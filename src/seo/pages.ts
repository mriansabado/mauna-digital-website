import {
  EMAIL,
  FOUNDER_NAME,
  GBP_URL,
  INSTAGRAM_URL,
  OG_IMAGE,
  OG_IMAGE_ALT,
  PHONE_E164,
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

/**
 * Titles ~50-60 chars. Descriptions ~140-155 chars (before Google truncation).
 * Aimed at popular San Diego intent: website designer, affordable website,
 * fix my website / website help, platform help.
 */
export const pageSeo: Record<string, PageSeo> = {
  '/': {
    path: '/',
    title: 'San Diego Web Designer & Developer | Mauna Digital',
    description:
      `${FOUNDER_NAME} is a San Diego website designer and web developer for small businesses. Affordable sites from $600, website fixes $85/hr, apps, and tech help.`,
  },
  '/pricing': {
    path: '/pricing',
    title: 'Affordable Website Design in San Diego | From $600',
    description:
      'San Diego website designer with clear pricing: Single Page $600, Full Website $1,200. Affordable web design for small businesses, no contracts.',
  },
  '/website-fixes': {
    path: '/website-fixes',
    title: 'Fix My Website in San Diego | Website Help $85/hr',
    description:
      'Need a San Diego web developer to fix your website? Forms, mobile layout, outages, updates, and more. Local website help at $85/hr, same-day quote.',
  },
  '/platform-help': {
    path: '/platform-help',
    title: 'Wix, Squarespace, Shopify & WordPress Help in San Diego',
    description:
      'Wix, Squarespace, Shopify, and WordPress help from a San Diego website designer and web developer. Fixes, updates, rebuild advice. Quick Fix $85/hr.',
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
  }

  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: OG_IMAGE,
    logo: OG_IMAGE,
    description:
      `${FOUNDER_NAME} — San Diego website designer and web developer. Affordable web design from $600, website fixes at $85/hr, mobile apps, and small-business tech help.`,
    email: EMAIL,
    telephone: PHONE_E164,
    priceRange: PRICE_RANGE,
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Invoice',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7157,
      longitude: -117.1611,
    },
    areaServed: [
      { '@type': 'City', name: 'San Diego' },
      { '@type': 'AdministrativeArea', name: 'San Diego County' },
    ],
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#ian`,
      name: FOUNDER_NAME,
      email: EMAIL,
      jobTitle: 'Web Designer and Software Developer',
      url: `${SITE_URL}/`,
      homeLocation: {
        '@type': 'Place',
        name: 'San Diego, California',
      },
      sameAs: [INSTAGRAM_URL, 'https://www.iansabado.dev/'],
    },
    knowsAbout: [
      'San Diego website designer',
      'San Diego web designer',
      'San Diego web developer',
      'Website design',
      'Web design',
      'Web development',
      'Affordable websites',
      'Small business websites',
      'Website repair',
      'Website fixes',
      'Website help',
      'Wix',
      'Squarespace',
      'Shopify',
      'WordPress',
      'Mobile app development',
      'Local SEO',
      'Small business tech help',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Single Page Site',
        price: '600',
        priceCurrency: 'USD',
        url: `${SITE_URL}/pricing`,
        description: 'Affordable one-page website design in San Diego',
      },
      {
        '@type': 'Offer',
        name: 'Full Website',
        price: '1200',
        priceCurrency: 'USD',
        url: `${SITE_URL}/pricing`,
        description: 'Multi-page small business website design in San Diego',
      },
      {
        '@type': 'Offer',
        name: 'Quick Fix website help',
        price: '85',
        priceCurrency: 'USD',
        url: `${SITE_URL}/website-fixes`,
        description: 'Website repair and updates in San Diego',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '85',
          priceCurrency: 'USD',
          unitText: 'HOUR',
        },
      },
    ],
    sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_E164,
      contactType: 'customer service',
      areaServed: ['San Diego', 'US'],
      availableLanguage: ['English'],
    },
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description:
      'San Diego website designer and web developer for small businesses. Affordable websites, website fixes, and tech help.',
    inLanguage: 'en-US',
    publisher: { '@id': `${SITE_URL}/#business` },
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
    { type: 'meta', props: { name: 'geo.region', content: 'US-CA' } },
    { type: 'meta', props: { name: 'geo.placename', content: 'San Diego' } },
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
