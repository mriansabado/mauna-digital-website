export type DemoSite = {
  name: string
  tagline: string
  url: string
  description: string
  tags: string[]
  icon: string
}

export const demoSites: DemoSite[] = [
  {
    name: 'Torque & Co.',
    tagline: 'Auto Repair',
    url: 'https://autoshop-demo-website.vercel.app/',
    description: 'A clean service-business site with booking cues, services, and trust signals — built for a local auto shop.',
    tags: ['Service Business', 'Local'],
    icon: '🔧',
  },
  {
    name: 'Salt & Pine',
    tagline: 'Handmade Soap',
    url: 'https://soapmaker-demo-website-silk.vercel.app/',
    description: 'Small-batch product showcase with shop-ready layout — the kind of site a maker or Etsy seller needs to look legit.',
    tags: ['E-commerce', 'Maker'],
    icon: '🧼',
  },
  {
    name: 'Heat Signal',
    tagline: 'San Diego Band',
    url: 'https://heat-signal-band.vercel.app/',
    description: 'A single-page band site with show dates, music links, and photos — perfect when you need something live fast.',
    tags: ['Single Page', 'Events'],
    icon: '🎸',
  },
  {
    name: 'Coastline Landscaping',
    tagline: 'Lawn Care & Hardscaping',
    url: 'https://landscaping-demo-website.vercel.app/',
    description: 'Before-and-after portfolio, services, and contact flow for a local landscaping crew.',
    tags: ['Service Business', 'Portfolio'],
    icon: '🌿',
  },
]
