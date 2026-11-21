import barblendGuruScreenshot from '../assets/barblend-guru-sc.jpg'
import postachioImage from '../assets/postachio-project.jpg'
import postachioLogo from '../assets/postachio-logo1.png'
import pocketsayScreenshot from '../assets/pocketsay-screenshot.jpg'
import pocketsayLogo from '../assets/pocketsay-logo1.png'
import tasqlyScreenshot from '../assets/tasqly-sc.jpg'
import tasqlyLogo from '../assets/Tasqly-Logo.png'
import devportfolioScreenshot from '../assets/devportfolio-sc.jpg'
import { FOUNDER_NAME } from '../constants/site'

export type FeaturedApp = {
  name: string
  badge: string
  subtitle: string
  description: string
  tags: string[]
  src: string
  alt: string
  href: string
  ctaLabel: string
  logo?: string
}

/** Apps shown beside Small App on home — same set featured on /work#apps */
export const featuredApps: FeaturedApp[] = [
  {
    name: 'PocketSay',
    badge: 'iOS App',
    subtitle: 'Say it BIG when you can\'t say it loud',
    description:
      'Show large, customizable text when you need to be seen instead of heard. Private, works offline.',
    tags: ['iOS', 'Communication', 'Privacy'],
    src: pocketsayScreenshot,
    alt: 'PocketSay iOS app showing large on-screen text',
    href: 'https://apps.apple.com/us/app/pocketsay/id6756633082',
    ctaLabel: 'Download PocketSay',
    logo: pocketsayLogo,
  },
  {
    name: 'Tasqly',
    badge: 'iOS App',
    subtitle: 'Planner first workflow for freelancers & service pros',
    description:
      'Manage clients, schedule sessions, and stay on top of the week — built for independent pros.',
    tags: ['Expo', 'React Native', 'Productivity'],
    src: tasqlyScreenshot,
    alt: 'Tasqly planner app for freelancers and service pros',
    href: 'https://apps.apple.com/us/app/tasqly/id6761040872',
    ctaLabel: 'Download Tasqly',
    logo: tasqlyLogo,
  },
  {
    name: 'BarBlend Guru',
    badge: 'Free Web App',
    subtitle: 'Find your next favorite pour from what\'s already in the cabinet',
    description:
      'Search a cocktail library by name, by what you have on hand, or hit the randomizer.',
    tags: ['Web App', 'Recipes', 'Randomizer'],
    src: barblendGuruScreenshot,
    alt: 'BarBlend Guru cocktail recipe web app',
    href: 'https://barblend-guru-app.vercel.app/',
    ctaLabel: 'Open BarBlend Guru',
  },
  {
    name: 'Postachio',
    badge: 'Web App',
    subtitle: 'AI powered social posts with SEO in mind',
    description:
      'Write social content faster, with structure and search in mind, instead of staring at a blank caption box.',
    tags: ['AI', 'SEO', 'Content'],
    src: postachioImage,
    alt: 'Postachio social content web app',
    href: 'https://postachio.app/',
    ctaLabel: 'Try Postachio',
    logo: postachioLogo,
  },
  {
    name: `${FOUNDER_NAME} Dev Portfolio`,
    badge: 'Interactive Website',
    subtitle: 'A gamified portfolio you explore like a tiny space adventure',
    description:
      'My own portfolio, built as a playful interactive site instead of a standard scroll and skim page.',
    tags: ['Portfolio', 'Interactive', 'Front End'],
    src: devportfolioScreenshot,
    alt: `${FOUNDER_NAME} interactive developer portfolio`,
    href: 'https://www.iansabado.dev/',
    ctaLabel: 'Explore Portfolio',
  },
]
