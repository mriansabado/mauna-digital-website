import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'

export async function prerender() {
  let html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )

  const elements = new Set<{ type: 'link'; props: { rel: string; as: string; href: string } }>()
  const preloadTag = /^<link\s+rel="preload"[^>]*>/
  let match = html.match(preloadTag)
  while (match) {
    const as = /as="([^"]+)"/.exec(match[0])
    const href = /href="([^"]+)"/.exec(match[0])
    if (as && href) {
      elements.add({
        type: 'link',
        props: { rel: 'preload', as: as[1], href: href[1] },
      })
    }
    html = html.slice(match[0].length)
    match = html.match(preloadTag)
  }

  return {
    html,
    links: new Set<string>(),
    head: elements.size > 0 ? { elements } : undefined,
  }
}
