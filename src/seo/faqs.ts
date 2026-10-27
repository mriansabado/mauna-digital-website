import type { FaqItem } from './pages'

export const homeFaqs: FaqItem[] = [
  {
    question: 'Are you based in San Diego?',
    answer: 'Yes. In person locally, remote anywhere, including Hawaii.',
  },
  {
    question: 'Which platform should I use?',
    answer:
      'Shopify, Wix, or Squarespace if you want to make simple changes yourself. Custom built and hosted by me if you want no templates. Custom hosting is first year free, then $60/yr. I walk you through the tradeoffs on a call.',
  },
  {
    question: 'What does hosting cost for a custom site?',
    answer:
      "The first year is free. After that it's $60/yr for hosting, SSL, uptime monitoring, and form delivery.",
  },
  {
    question: 'What if my project needs something custom?',
    answer:
      "No two websites are the same. The prices here cover most work, but some jobs call for a custom solution. I'll walk you through it and quote that separately.",
  },
  {
    question: 'Can I cancel a monthly plan?',
    answer: 'Yes, anytime. Month to month, no contracts.',
  },
  {
    question: 'What if I just need one thing fixed?',
    answer: '$85/hr, no plan needed. One hour minimum, quoted same day.',
  },
  {
    question: 'Will I work with you directly?',
    answer: "Yes. It's always me. Text or email, and you can reach me after launch too.",
  },
  {
    question: 'If you host my site and I leave, what happens?',
    answer: "I hand over the code and help you move it to new hosting. It's yours.",
  },
  {
    question: 'Can you help with tech beyond my website?',
    answer:
      'Yes. Plan hours cover email, domains, Google accounts, POS setup, and the random stuff that breaks.',
  },
]

export const pricingFaqs: FaqItem[] = [
  {
    question: 'Is $600 really enough for a small business website?',
    answer:
      'For a Single Page Site, yes — one strong page with your domain, mobile layout, and a contact form. If you need multiple pages, a shop, or a fuller brand site, the Full Website at $1,200 is the better fit. I tell you which one matches before we start.',
  },
  {
    question: 'Do you lock me into a contract?',
    answer:
      'No contracts. Projects are one-time. Monthly care is month to month — cancel anytime. Your domain, site, and accounts stay yours.',
  },
  {
    question: 'Are platform fees included in your price?',
    answer:
      'No. You pay Shopify, Wix, Squarespace, or domain fees directly. I never mark those up, and I flag any paid tools before we start. Custom sites I host include the first year free, then $60/yr.',
  },
  {
    question: 'What if I only need something fixed, not a new site?',
    answer:
      "That's the Quick Fix at $85/hr with a one-hour minimum. Same-day quote. See the website fixes page for common problems I handle.",
  },
]

export const websiteFixesFaqs: FaqItem[] = [
  {
    question: 'How fast can you start a Quick Fix?',
    answer:
      "Send me what's going on (and your URL if you have one). I quote same day. Many fixes land in the first hour; if it needs more, I tell you before I keep going.",
  },
  {
    question: 'Do I need a monthly plan to get something fixed?',
    answer:
      'No. Quick Fix is $85/hr with a one-hour minimum. No plan required. Monthly care is optional if you want ongoing help later.',
  },
  {
    question: 'Can you fix Wix, Squarespace, Shopify, and WordPress?',
    answer:
      'Yes. Most Quick Fixes are on those platforms. For deeper platform-specific help, see the platform help page.',
  },
  {
    question: 'What if the fix takes less than an hour?',
    answer:
      'One hour minimum. If I finish early, I use the rest of the hour on your to-do list — updates, cleanups, broken links, whatever else is waiting.',
  },
]

export const platformHelpFaqs: FaqItem[] = [
  {
    question: 'Can you log into my Wix or Squarespace and just fix it?',
    answer:
      'Yes — once you invite me or share access. I make the changes, explain what I did in plain language, and leave you in control of the account.',
  },
  {
    question: 'Do you mark up platform subscription fees?',
    answer:
      'Never. You pay Wix, Squarespace, Shopify, WordPress hosting, and domains directly. I flag any paid apps before we add them.',
  },
  {
    question: 'When should I rebuild instead of patching?',
    answer:
      "If every small change turns into a fight, the theme is ancient, or the site can't do what your business needs now, a rebuild is often cheaper long-term. Single Page from $600, Full Website $1,200 flat.",
  },
  {
    question: 'What does platform help cost?',
    answer:
      'Most platform work is Quick Fix pricing: $85/hr, 1 hour minimum, same-day quote. Bigger rebuilds use the flat website prices.',
  },
]

export function faqsForPath(pathname: string): FaqItem[] | undefined {
  switch (pathname) {
    case '/':
      return homeFaqs
    case '/pricing':
      return pricingFaqs
    case '/website-fixes':
      return websiteFixesFaqs
    case '/platform-help':
      return platformHelpFaqs
    default:
      return undefined
  }
}
