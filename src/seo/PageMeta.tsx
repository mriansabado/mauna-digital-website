import { Helmet } from 'react-helmet-async'
import {
  FOUNDER_NAME,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_NAME,
} from '../constants/site'
import { JsonLd } from './JsonLd'
import {
  businessJsonLd,
  canonicalUrl,
  faqJsonLd,
  getPageSeo,
  type FaqItem,
} from './pages'

type PageMetaProps = {
  path: string
  faqs?: FaqItem[]
}

/**
 * Head tags are injected at build time via prerender `buildHeadElements`.
 * Helmet only runs in the browser so SSR/prerender HTML does not get
 * duplicate <title>/<meta> nodes inside #root.
 */
export function PageMeta({ path, faqs }: PageMetaProps) {
  const seo = getPageSeo(path)
  const url = canonicalUrl(path)
  const title = seo.title
  const description = seo.description
  const ogTitle = seo.ogTitle ?? title
  const ogDescription = seo.ogDescription ?? description
  const isBrowser = typeof window !== 'undefined'

  return (
    <>
      {isBrowser ? (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="author" content={FOUNDER_NAME} />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <link rel="canonical" href={url} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={ogTitle} />
          <meta property="og:description" content={ogDescription} />
          <meta property="og:image" content={OG_IMAGE} />
          <meta property="og:image:alt" content={OG_IMAGE_ALT} />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={ogTitle} />
          <meta name="twitter:description" content={ogDescription} />
          <meta name="twitter:image" content={OG_IMAGE} />
          <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
        </Helmet>
      ) : null}
      <JsonLd data={businessJsonLd()} />
      {faqs && faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
    </>
  )
}
