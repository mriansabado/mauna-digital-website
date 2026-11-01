import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ContactCta } from '../components/ContactCta'
import { FaqSection } from '../components/FaqSection'
import { RelatedLinks } from '../components/RelatedLinks'
import { PageMeta } from '../seo/PageMeta'
import { pricingFaqs } from '../seo/faqs'

export function PricingPage() {
  return (
    <>
      <PageMeta path="/pricing" faqs={pricingFaqs} />
      <main className="seo-page pricing-page">
        <section className="seo-hero">
          <div className="container">
            <Breadcrumbs items={[{ name: 'Pricing', path: '/pricing' }]} />
            <p className="seo-kicker">San Diego · Affordable website design</p>
            <h1>Affordable website design in San Diego</h1>
            <p className="seo-lead">
              Looking for a San Diego website designer with clear pricing? Here&apos;s what a small business website costs with me: flat prices, plain English, and you own everything.
            </p>
          </div>
        </section>

        <section className="services pricing-services" aria-label="Website pricing">
          <div className="container">
            <div className="services-bucket">
              <h2 className="services-bucket-header">Websites</h2>
              <p className="rebuild-tiers-intro">
                Flat prices. No surprise retainers. Two clear options cover most small businesses. Pick based on how much you need to say online, not on how fancy the proposal sounds.
              </p>
              <div className="services-grid services-grid-two-up services-grid-offer-pair">
                <div className="service-card service-card-purple">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">📄</div>
                    </div>
                    <div className="service-badge">Single Page Site</div>
                  </div>
                  <div className="service-content">
                    <h3>Single Page Site</h3>
                    <p className="service-card-tagline">
                      One strong page. Events, pop-ups, solo pros, food trucks.
                    </p>
                    <div className="service-price-block">
                      <div className="service-price">$600 flat</div>
                    </div>
                    <p className="service-price-detail">
                      I design it, hook up your domain, and get you live on Shopify, Wix, Squarespace, or as a custom page I host for you. You bring photos and words.
                    </p>
                    <div className="service-features">
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>One custom designed page</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Domain setup</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Mobile friendly</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Contact or RSVP form</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>One polish pass after you send photos &amp; words</span>
                      </div>
                    </div>
                    <a href="#contact" className="btn btn-primary service-btn">
                      Get started
                    </a>
                  </div>
                </div>

                <div className="service-card service-card-neon-green">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">🌱</div>
                    </div>
                    <div className="service-badge">Full Website</div>
                  </div>
                  <div className="service-content">
                    <h3>Full Website</h3>
                    <p className="service-card-tagline">Multi-page site for a real small business.</p>
                    <div className="service-price-block">
                      <div className="service-price">$1,200 flat</div>
                    </div>
                    <p className="service-price-detail">
                      Feels like you, not a generic template. I walk you through it after launch so you&apos;re not lost.
                    </p>
                    <div className="service-features">
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Home, about, services, contact</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Domain setup, mobile friendly, basic SEO</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Contact form that reaches you</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Walkthrough after launch</span>
                      </div>
                    </div>
                    <p className="service-price-detail">
                      Same platforms as above. Full online store? I&apos;ll quote that separately.
                    </p>
                    <a href="#contact" className="btn btn-primary service-btn">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="platform-costs-callout">
              <div className="platform-costs-callout-header">
                <span className="platform-costs-callout-badge">Good to know</span>
                <h3>What&apos;s included (and what isn&apos;t)</h3>
              </div>
              <p className="platform-costs-callout-intro">
                My flat fee covers design, build, domain setup help, and getting you live. Custom sites I host include the first year free, then $60/yr for hosting, SSL, uptime monitoring, and form delivery.
              </p>
              <ul className="platform-costs-list">
                <li>
                  <strong>Domain:</strong> about $15 to $20/yr (yours)
                </li>
                <li>
                  <strong>Platform:</strong> $16 to $45/mo (Shopify from $39). Custom hosting with me: year one free, then $60/yr.
                </li>
              </ul>
              <p className="platform-costs-callout-footer">
                No two websites are the same. These prices cover most work. If your project needs something custom, I&apos;ll walk you through it and quote that separately before anything starts.
              </p>
            </div>

            <div className="services-bucket">
              <h2 className="services-bucket-header">Monthly care</h2>
              <p className="rebuild-tiers-intro">
                Optional. Essentials = keep it running. Growth = help you get found. Month to month — not required for a one-time site or Quick Fix.
              </p>
              <div className="services-grid services-grid-two-up services-grid-offer-pair">
                <div className="service-card service-card-electric-blue">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">🛠️</div>
                    </div>
                    <div className="service-badge">Essentials</div>
                  </div>
                  <div className="service-content">
                    <h3>Essentials</h3>
                    <p className="service-card-tagline">
                      Peace of mind. I watch the site so you don&apos;t have to.
                    </p>
                    <div className="service-price-block">
                      <div className="service-price">$200/mo</div>
                    </div>
                    <p className="service-price-detail">
                      Same-day response, plus 1 hour a month for updates. Extra time $60/hour.
                    </p>
                    <div className="service-features">
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Site monitored, backed up, and kept up to date</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>1 hour a month for updates and tech help</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Same-day response. Text me directly</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Extra time: $60/hour</span>
                      </div>
                    </div>
                    <a href="#contact" className="btn btn-primary service-btn">
                      Ask about Essentials
                    </a>
                  </div>
                </div>

                <div className="service-card service-card-hot-pink">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">📈</div>
                    </div>
                    <div className="service-badge">Growth</div>
                  </div>
                  <div className="service-content">
                    <h3>Growth</h3>
                    <p className="service-card-tagline">Help me get found.</p>
                    <div className="service-price-block">
                      <div className="service-price">$400/mo</div>
                    </div>
                    <p className="service-price-detail">
                      Everything in Essentials, plus Google Business Profile, listing cleanup, on-site SEO tweaks, 2 hours a month, and a short note on what changed.
                    </p>
                    <div className="service-features">
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Everything in Essentials</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>2 hours a month for any tech help</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>GBP posts &amp; listing cleanup</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>On-site SEO tweaks</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Monthly summary</span>
                      </div>
                    </div>
                    <a href="#contact" className="btn btn-primary service-btn">
                      Ask about Growth
                    </a>
                  </div>
                </div>
              </div>
              <p className="service-payment-note rebuild-tiers-intro">
                Month to month. Cancel anytime. No contracts. Plan hours are for that month only. They don&apos;t roll over.
              </p>
            </div>

            <div className="services-bucket">
              <h2 className="services-bucket-header">Social posting</h2>
              <p className="rebuild-tiers-intro">
                Feed help only — not the same as Growth. Add it alone or with a care plan.
              </p>
              <div className="services-grid services-grid-single">
                <div className="service-card service-card-electric-yellow">
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">📱</div>
                    </div>
                    <div className="service-badge">Social Posting</div>
                  </div>
                  <div className="service-content">
                    <h3>Social Posting</h3>
                    <p className="service-card-tagline">Stay visible without living on your phone.</p>
                    <div className="service-price-block">
                      <div className="service-price">$200/mo</div>
                    </div>
                    <p className="service-price-detail">
                      You send photos and clips. I write captions, design posts, and publish twice a week on Instagram and Facebook.
                    </p>
                    <div className="service-features">
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>2 posts or reels per week on Instagram and Facebook</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>You send photos and clips; I handle design, captions, and scheduling</span>
                      </div>
                      <div className="feature-item">
                        <div className="feature-dot"></div>
                        <span>Month to month</span>
                      </div>
                    </div>
                    <a href="#contact" className="btn btn-primary service-btn">
                      Let&apos;s talk social
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-bucket">
              <h2 className="services-bucket-header">How to choose</h2>
              <div className="service-areas-grid">
                <article className="service-area-card">
                  <h3>Need one strong page?</h3>
                  <p>Start with the Single Page Site at $600.</p>
                </article>
                <article className="service-area-card">
                  <h3>Need a real small business website?</h3>
                  <p>
                    Full Website at $1,200. Full online store? I&apos;ll quote that separately.
                  </p>
                </article>
                <article className="service-area-card">
                  <h3>Already have a site that&apos;s broken?</h3>
                  <p>
                    You might not need a rebuild. My{' '}
                    <Link to="/website-fixes">website fixes</Link> start at $85/hr. Stuck on a builder? See{' '}
                    <Link to="/platform-help">platform help</Link>.
                  </p>
                </article>
              </div>
              <p className="rebuild-tiers-intro">
                Either way: you own your site, your domain, and your accounts. Leave anytime. I&apos;d rather do great work at a fair rate than oversell you.
              </p>
            </div>
          </div>
        </section>

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
              to: '/work',
              label: 'Work',
              description: 'Client websites, concept sites, and apps I\'ve built.',
            },
          ]}
        />

        <FaqSection title="Pricing questions" faqs={pricingFaqs} />
        <ContactCta
          heading="Ready for a clear quote?"
          subtext="Tell me what kind of site you need, or send your current URL. I'll say which package fits, what platform makes sense, and what you'd pay. First chat is free."
        />
      </main>
    </>
  )
}
