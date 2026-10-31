import arcofmauiScreenshot from '../assets/arcofmaui-sc.jpg'
import autoshopScreenshot from '../assets/autoshop-sc.jpg'
import bahaykuboScreenshot from '../assets/bahaykubo-sc.jpg'
import mauidogsScreenshot from '../assets/mauidogstg-sc.jpg'
import sabadoArtHawaiiScreenshot from '../assets/sabadoarthawaii-sc.jpg'
import sabadoGalleryScreenshot from '../assets/sabadogallery-sc.jpg'
import soapmakerScreenshot from '../assets/soapmaker-sc2.jpg'
import bandwebsiteScreenshot from '../assets/bandwebsite-sc.jpg'
import landscapingScreenshot from '../assets/landscaping-sc.jpg'

export type DemoSite = {
  name: string
  tagline: string
  url: string
  description: string
  tags: string[]
  icon: string
  screenshot: string
  kind: 'client' | 'demo'
}

export const demoSites: DemoSite[] = [
  {
    name: 'Bahay Kubo Maui',
    tagline: 'Heritage Foundation',
    url: 'https://www.bahaykubomaui.com/',
    description:
      'Official site for the Bahay Kubo Heritage Foundation — story, gallery, donate, and visit info for the 1952 Filipino house in ʻĪao Valley.',
    tags: ['Nonprofit', 'Maui'],
    icon: '🌴',
    screenshot: bahaykuboScreenshot,
    kind: 'client',
  },
  {
    name: 'Arc of Maui County',
    tagline: 'Nonprofit · Since 1954',
    url: 'https://www.arcofmaui.org/',
    description:
      'Site for Arc of Maui County — mission, programs, news, and donate for families and individuals with intellectual and developmental disabilities.',
    tags: ['Nonprofit', 'Maui'],
    icon: '🤝',
    screenshot: arcofmauiScreenshot,
    kind: 'client',
  },
  {
    name: 'Sabado Art Hawaii',
    tagline: 'Wailuku Gallery',
    url: 'https://www.sabadoarthawaii.com/',
    description:
      "Gallery and boutique site for the Wailuku location — art shop, visit hours, and Philip's current work.",
    tags: ['Art Gallery', 'Maui'],
    icon: '🖼️',
    screenshot: sabadoArtHawaiiScreenshot,
    kind: 'client',
  },
  {
    name: 'Sabado Gallery',
    tagline: 'Wailea & Kaʻanapali',
    url: 'https://www.sabadogallery.com/',
    description:
      'Multi-location gallery site with artists, shop, interior design, and Pacific-rooted original works.',
    tags: ['Art Gallery', 'E-commerce'],
    icon: '🎨',
    screenshot: sabadoGalleryScreenshot,
    kind: 'client',
  },
  {
    name: 'Maui Dogs TG',
    tagline: 'Transport, Grooming & Boarding',
    url: 'https://www.mauidogstg.com/',
    description:
      'Service business site for Maui dog transport, 1:1 grooming, and overnight boarding with online booking.',
    tags: ['Service Business', 'Maui'],
    icon: '🐕',
    screenshot: mauidogsScreenshot,
    kind: 'client',
  },
  {
    name: 'Salt & Pine',
    tagline: 'Handmade Soap',
    url: 'https://soapmaker-demo-website-silk.vercel.app/',
    description: 'A small-batch product showcase with a shop-ready layout for a maker or Etsy seller.',
    tags: ['E-commerce', 'Maker'],
    icon: '🧼',
    screenshot: soapmakerScreenshot,
    kind: 'demo',
  },
  {
    name: 'Coastline Landscaping',
    tagline: 'Lawn Care & Hardscaping',
    url: 'https://landscaping-demo-website.vercel.app/',
    description: 'Before-and-after photos, services, and a contact flow for a local landscaping crew.',
    tags: ['Service Business', 'Portfolio'],
    icon: '🌿',
    screenshot: landscapingScreenshot,
    kind: 'demo',
  },
  {
    name: 'Heat Signal',
    tagline: 'San Diego Band',
    url: 'https://heat-signal-band.vercel.app/',
    description: 'A single-page band site with show dates, music links, and photos.',
    tags: ['Single Page', 'Events'],
    icon: '🎸',
    screenshot: bandwebsiteScreenshot,
    kind: 'demo',
  },
  {
    name: 'Torque & Co.',
    tagline: 'Auto Repair',
    url: 'https://autoshop-demo-website.vercel.app/',
    description: 'A service-business site with booking cues, services, and trust signals for a local auto shop.',
    tags: ['Service Business', 'Local'],
    icon: '🔧',
    screenshot: autoshopScreenshot,
    kind: 'demo',
  },
]

export const clientSites = demoSites.filter((site) => site.kind === 'client')
export const sampleDemoSites = demoSites.filter((site) => site.kind === 'demo')
