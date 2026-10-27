import {
  EMAIL,
  FOUNDER_NAME,
  GBP_URL,
  INSTAGRAM_URL,
  OG_IMAGE,
  OG_IMAGE_ALT,
  PHONE_DISPLAY,
  PRICE_RANGE,
  SITE_NAME,
  SITE_URL,
} from '../constants/site'

export type FaqItem = { question: string; answer: string }

export type PageSeo = {
  path: string
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
}

export const pageSeo: Record<string, PageSeo> = {
  '/': {
    path: '/',
    title: 'Affordable Web Design, Website Fixes & Apps in San Diego | Mauna Digital',
    description:
      'San Diego web designer and software developer. Affordable websites from $600, website fixes at $85/hr, mobile apps, and small-business tech help. Clear talk, no contracts.',
  },
  '/pricing': {
    path: '/pricing',
    title: 'Affordable Small Business Website Pricing in San Diego | Mauna Digital',
    description:
      'Affordable website pricing in San Diego: Single Page Site $600 flat, Full Website $1,200 flat. Clear scope, no contracts, you own your site. Platform costs never marked up.',
  },
  '/website-fixes': {
    path: '/website-fixes',
    title: 'Website Fixes & Updates in San Diego | $85/hr | Mauna Digital',
    description:
      'Need to fix my website? Website repair and updates in San Diego at $85/hr (1 hour minimum, same-day quote). Down sites, broken forms, mobile issues, hacks, logins, and more.',
  },
  '/platform-help': {
    path: '/platform-help',
    title: 'Wix, Squarespace, Shopify & WordPress Help in San Diego | Mauna Digital',
    description:
      'Wix help, Squarespace help, Shopify fixes, and WordPress repair in San Diego. Updates, troubleshooting, and honest advice on when to rebuild — $85/hr Quick Fix.',
  },
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '') return '/'
  const clean = pathname.split('?')[0].split('#')[0]
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1)
  return clean || '/'
}

export function getPageSeo(pathname: string): PageSeo {
  const path = normalizePath(pathname)
  return pageSeo[path] ?? pageSeo['/']
}

export function canonicalUrl(pathname: string): string {
  const path = normalizePath(pathname)
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export function businessJsonLd() {
  const sameAs = [INSTAGRAM_URL]
  if (GBP_URL && !GBP_URL.includes('{{')) {
    sameAs.push(GBP_URL)
  } else {
    // Keep placeholder visible in source for the TODO checklist
    sameAs.push(GBP_URL)
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: OG_IMAGE,
    logo: OG_IMAGE,
    description:
      'Affordable web design and website fixes in San Diego. Websites from $600, Quick Fix at $85/hr. Clear talk, no contracts.',
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    priceRange: PRICE_RANGE,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'San Diego County',
    },
    founder: {
      '@type': 'Person',
      name: FOUNDER_NAME,
      email: EMAIL,
    },
    sameAs,
  }
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildHeadElements(pathname: string) {
  const seo = getPageSeo(pathname)
  const url = canonicalUrl(pathname)
  const title = seo.title
  const description = seo.description
  const ogTitle = seo.ogTitle ?? title
  const ogDescription = seo.ogDescription ?? description

  const elements = new Set<{
    type: string
    props: Record<string, string>
    children?: string
  }>([
    { type: 'meta', props: { name: 'description', content: description } },
    { type: 'meta', props: { name: 'author', content: FOUNDER_NAME } },
    {
      type: 'meta',
      props: {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    { type: 'link', props: { rel: 'canonical', href: url } },
    { type: 'meta', props: { property: 'og:type', content: 'website' } },
    { type: 'meta', props: { property: 'og:site_name', content: SITE_NAME } },
    { type: 'meta', props: { property: 'og:url', content: url } },
    { type: 'meta', props: { property: 'og:title', content: ogTitle } },
    { type: 'meta', props: { property: 'og:description', content: ogDescription } },
    { type: 'meta', props: { property: 'og:image', content: OG_IMAGE } },
    { type: 'meta', props: { property: 'og:image:alt', content: OG_IMAGE_ALT } },
    { type: 'meta', props: { property: 'og:locale', content: 'en_US' } },
    { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
    { type: 'meta', props: { name: 'twitter:title', content: ogTitle } },
    { type: 'meta', props: { name: 'twitter:description', content: ogDescription } },
    { type: 'meta', props: { name: 'twitter:image', content: OG_IMAGE } },
    { type: 'meta', props: { name: 'twitter:image:alt', content: OG_IMAGE_ALT } },
  ])

  return { title, elements }
}
