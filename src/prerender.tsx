import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import { PRERENDER_ROUTES } from './constants/site'
import { buildHeadElements, normalizePath } from './seo/pages'

type PrerenderData = {
  url?: string
}

export async function prerender(data: PrerenderData) {
  const url = data.url ?? '/'
  const helmetContext = {}

  let html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )

  const preloadElements = new Set<{
    type: 'link'
    props: { rel: string; as: string; href: string }
  }>()
  const preloadTag = /^<link\s+rel="preload"[^>]*>/
  let match = html.match(preloadTag)
  while (match) {
    const as = /as="([^"]+)"/.exec(match[0])
    const href = /href="([^"]+)"/.exec(match[0])
    if (as && href) {
      preloadElements.add({
        type: 'link',
        props: { rel: 'preload', as: as[1], href: href[1] },
      })
    }
    html = html.slice(match[0].length)
    match = html.match(preloadTag)
  }

  const path = normalizePath(url)
  const head = buildHeadElements(path)
  for (const el of preloadElements) {
    head.elements.add(el)
  }

  const { parseLinks } = await import('vite-prerender-plugin/parse')
  const discovered = parseLinks(html).filter((link: string) =>
    (PRERENDER_ROUTES as readonly string[]).includes(normalizePath(link)),
  )

  return {
    html,
    links: new Set<string>([...PRERENDER_ROUTES, ...discovered]),
    head: {
      lang: 'en',
      title: head.title,
      elements: head.elements,
    },
  }
}
