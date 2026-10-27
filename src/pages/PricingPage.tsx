import { Link } from 'react-router-dom'
import { ContactCta } from '../components/ContactCta'
import { FaqSection } from '../components/FaqSection'
import { RelatedLinks } from '../components/RelatedLinks'
import { PageMeta } from '../seo/PageMeta'
import { pricingFaqs } from '../seo/faqs'

export function PricingPage() {
  return (
    <>
      <PageMeta path="/pricing" faqs={pricingFaqs} />
      <main className="seo-page">
        <section className="seo-hero">
          <div className="container">
            <p className="seo-kicker">San Diego · Affordable website design</p>
            <h1>Affordable small business websites in San Diego</h1>
            <p className="seo-lead">
              Looking for an affordable website without agency fluff? Here&apos;s exactly what a small business website costs with me — flat prices, plain English, and you own everything.
            </p>
          </div>
        </section>

        <article className="seo-content container">
          <p>
            I&apos;m a website designer and web developer in San Diego. Most owners who email me aren&apos;t shopping for a 20-page corporate build. They need a clean site that looks trustworthy on a phone, tells people what they do, and makes it easy to get in touch. That shouldn&apos;t cost five figures.
          </p>

          <h2>Flat website prices (no surprise retainers)</h2>
          <p>
            Two clear options cover most small businesses. Pick based on how much you need to say online — not on how fancy the proposal sounds.
          </p>

          <div className="seo-price-grid">
            <div className="seo-price-card">
              <h3>Single Page Site — $600 flat</h3>
              <p>
                One page, done right. I design it, hook up your domain, and get you live on Shopify, Wix, Squarespace, or as a custom page I host for you. You bring photos and words. I make it look clean and clear.
              </p>
              <ul>
                <li>One custom designed page</li>
                <li>Domain setup</li>
                <li>Mobile friendly</li>
                <li>Contact or RSVP form</li>
                <li>One round of revisions</li>
              </ul>
              <p>
                <strong>Great for:</strong> events, performers, pop ups, &quot;coming soon&quot; pages, solo pros, food trucks.
              </p>
            </div>
            <div className="seo-price-card">
              <h3>Full Website — $1,200 flat</h3>
              <p>
                A multi page site that feels like you — not a generic template you fought with for three weekends. I walk you through it after launch so you&apos;re not lost.
              </p>
              <ul>
                <li>Multi page site (home, about, services or shop, contact)</li>
                <li>Online shop if you need it</li>
                <li>Domain setup, mobile friendly, basic SEO</li>
                <li>Contact form that reaches you</li>
                <li>Walkthrough after launch</li>
              </ul>
              <p>
                Same platform choices as above. Monthly care is optional.
              </p>
            </div>
          </div>

          <h2>What&apos;s included (and what isn&apos;t)</h2>
          <p>
            My flat fee covers design, build, domain setup help, and getting you live. Custom sites I host include the first year of hosting free, then $60/yr for hosting, SSL, uptime monitoring, and form delivery.
          </p>
          <p>
            Platform costs you pay directly — I never mark them up:
          </p>
          <ul>
            <li>
              <strong>Domain:</strong> about $15 to $20/yr (yours)
            </li>
            <li>
              <strong>Platform:</strong> $16 to $45/mo (Shopify from $39). Custom hosting with me: year one free, then $60/yr.
            </li>
          </ul>
          <p>
            No two websites are the same. These prices cover most work. If your project needs something custom, I&apos;ll walk you through it and quote that separately before anything starts.
          </p>

          <h2>Optional monthly care (no plan required)</h2>
          <p>
            Plenty of clients pay for the project and reach out again when they need me. If you want a tech person on call, monthly care is there:
          </p>
          <ul>
            <li>
              <strong>Essentials — $200/mo:</strong> monitoring, backups, updates, same-day response, 1 hour of help each month. Extra time $60/hour.
            </li>
            <li>
              <strong>Growth — $400/mo:</strong> everything in Essentials, plus Google Business Profile work, listings, on-site SEO, 2 hours a month, and a short monthly report.
            </li>
            <li>
              <strong>Social Posting — $200/mo:</strong> feed help only. Add it alone or with a care plan.
            </li>
          </ul>
          <p>
            Month to month. Cancel anytime. No contracts. Plan hours are for that month only — they don&apos;t roll over.
          </p>

          <h2>How to choose</h2>
          <p>
            <strong>Need one strong page?</strong> Start with the Single Page Site at $600.
          </p>
          <p>
            <strong>Need a real small business website</strong> with a few pages, services, or a shop? Full Website at $1,200.
          </p>
          <p>
            <strong>Already have a site that&apos;s broken or outdated?</strong> You might not need a rebuild. My{' '}
            <Link to="/website-fixes">website fixes</Link> start at $85/hr (1 hour minimum, same-day quote). If you&apos;re stuck on Wix, Squarespace, Shopify, or WordPress, see{' '}
            <Link to="/platform-help">platform help</Link>.
          </p>
          <p>
            Either way: you own your site, your domain, and your accounts. Leave anytime. I&apos;d rather do great work at a fair rate than oversell you.
          </p>
        </article>

        <RelatedLinks
          links={[
            {
              to: '/website-fixes',
              label: 'Website fixes',
              description: 'Broken form, mobile mess, or site down? $85/hr Quick Fix.',
            },
            {
              to: '/platform-help',
              label: 'Platform help',
              description: 'Wix, Squarespace, Shopify, and WordPress help in San Diego.',
            },
            {
              to: '/#work',
              label: 'Demo sites',
              description: 'See sample small business websites I built.',
            },
          ]}
        />

        <FaqSection title="Pricing questions" faqs={pricingFaqs} />
        <ContactCta
          heading="Ready for a clear quote?"
          subtext="Tell me what kind of site you need — or send your current URL. I'll say which package fits, what platform makes sense, and what you'd pay. First chat is free."
        />
      </main>
    </>
  )
}
