import { Link } from 'react-router-dom'
import heroLogo from '../assets/new-mauna-logo.png'
import profilePhoto from '../assets/profile-photo2.jpg'
import sandiegoImage from '../assets/sandiego.jpg'
import sandiegoBeach from '../assets/sandiego-beach.jpg'
import { ContactCta } from '../components/ContactCta'
import { FOUNDER_NAME } from '../constants/site'
import { PageMeta } from '../seo/PageMeta'

export function HomePage() {
  return (
    <>
      <PageMeta path="/" />
      <main>
      {/* Hero Section */}
      <section
        className="hero"
        aria-label="San Diego skyline, Mauna Digital web development"
        style={{ backgroundImage: `url(${sandiegoImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-logo">
                <img src={heroLogo} alt="Mauna Digital" className="logo-image" />
              </div>
              <h1 className="hero-title">
                Small business tech,{' '}
                <span className="hero-subtitle">handled</span>
              </h1>
              <div className="hero-copy">
                <p className="hero-subtext">
                  Affordable websites, fixes, apps, and everyday tech help for San Diego small businesses. New site, broken site, or something in between. I handle the tech so you can run your business.
                </p>
                <div className="hero-pills">
                  <span className="service-pill">Websites</span>
                  <span className="hero-pill-sep" aria-hidden="true">·</span>
                  <span className="service-pill">Monthly Care</span>
                  <span className="hero-pill-sep" aria-hidden="true">·</span>
                  <span className="service-pill">Local SEO</span>
                  <span className="hero-pill-sep" aria-hidden="true">·</span>
                  <span className="service-pill">Social</span>
                  <span className="hero-pill-sep" aria-hidden="true">·</span>
                  <span className="service-pill">Apps</span>
                </div>
              </div>
              <p className="hero-location">
                Based in San Diego · In person locally · Remote anywhere · Hawaii clients welcome
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Get a Free Site Check</a>
                <Link to="/pricing" className="btn btn-secondary">See Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="meet" aria-labelledby="meet-title">
        <div className="container meet-inner">
          <img
            src={profilePhoto}
            alt="Ian Sabado, founder of Mauna Digital"
            className="meet-photo"
            width={320}
            height={320}
          />
          <p className="meet-kicker">A real person, based in San Diego</p>
          <h2 id="meet-title" className="meet-title">Hey, I&apos;m {FOUNDER_NAME}</h2>
          <p className="meet-copy">
            I run Mauna Digital as a San Diego website designer and web developer for small businesses. When you reach out, you talk to me from the first message through after launch. I come from a family of small business owners, so I know what it feels like to need someone you can trust with the tech.
          </p>
          <a href="#about" className="btn btn-secondary">A little more about me</a>
        </div>
      </section>

      <section className="seo-intent" aria-labelledby="seo-intent-title">
        <div className="container">
          <h2 id="seo-intent-title" className="section-title">
            Looking for a San Diego website designer?
          </h2>
          <p className="seo-intent-intro">
            Most people who reach out need a local web designer, web developer, or someone to fix what they already have. Pick what fits and I&apos;ll tell you the clear next step.
          </p>
          <ul className="seo-intent-list">
            <li>
              <Link to="/pricing" className="seo-intent-card">
                <span className="seo-intent-label">I need a new website</span>
                <span className="seo-intent-desc">
                  Affordable website design for small businesses. Single Page from $600, Full Website $1,200 flat.
                </span>
              </Link>
            </li>
            <li>
              <Link to="/website-fixes" className="seo-intent-card">
                <span className="seo-intent-label">I need to fix my website</span>
                <span className="seo-intent-desc">
                  Website help and repairs at $85/hr. Broken forms, mobile issues, outdated pages, logins, and more.
                </span>
              </Link>
            </li>
            <li>
              <Link to="/platform-help" className="seo-intent-card">
                <span className="seo-intent-label">I&apos;m stuck on Wix, Squarespace, Shopify, or WordPress</span>
                <span className="seo-intent-desc">
                  Platform help from a local website designer who works in these tools every week.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="services-bucket">
            <h3 className="services-bucket-header">Websites</h3>
            <p className="rebuild-tiers-intro">
              <strong>Need a website built in San Diego?</strong> Wix, Squarespace, or Shopify if you want to edit it yourself — or a custom site I host (year one free, then $60/yr). Flat prices below. Bigger or unusual jobs get a custom quote.
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
                  <p className="service-card-tagline">One strong page. Events, pop-ups, solo pros, food trucks.</p>
                  <div className="service-price-block">
                    <div className="service-price">$600 flat</div>
                  </div>
                  <p className="service-price-detail">I design it, hook up your domain, and get you live on Shopify, Wix, Squarespace, or as a custom page I host for you. You bring photos and words. I make it look clean and clear.</p>
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
                  <Link to="/pricing" className="btn btn-primary service-btn">See pricing details</Link>
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
                  <p className="service-price-detail">A multi page site that feels like <em>you</em>, not a generic template you fought with for three weekends. I walk you through it after launch so you&apos;re not lost.</p>
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
                  <p className="service-price-detail">Same platforms as above. Full online store? I&apos;ll quote that separately.</p>
                  <Link to="/pricing" className="btn btn-primary service-btn">See pricing details</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="services-bucket">
            <h3 className="services-bucket-header">Monthly care</h3>
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
                  <p className="service-card-tagline">Peace of mind. I watch the site so you don&apos;t have to.</p>
                  <div className="service-price-block">
                    <div className="service-price">$200/mo</div>
                  </div>
                  <p className="service-price-detail">If it breaks or goes down, I catch it. Same-day response, plus 1 hour a month for updates.</p>
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
                  <Link to="/pricing" className="btn btn-primary service-btn">See care plans</Link>
                </div>
              </div>
              <div className="service-card service-card-hot-pink">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">📈</div>
                  </div>
                  <div className="service-badge">Local SEO</div>
                </div>
                <div className="service-content">
                  <h3>Growth</h3>
                  <p className="service-card-tagline">Help me get found.</p>
                  <div className="service-price-block">
                    <div className="service-price">$400/mo</div>
                  </div>
                  <p className="service-price-detail">Everything in Essentials, plus Google Business Profile, listing cleanup, and a short note each month on what changed.</p>
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
                  <p className="service-price-detail">Local SEO builds over time. Most businesses see movement in Google Maps within 2 to 4 months.</p>
                  <Link to="/pricing" className="btn btn-primary service-btn">See care plans</Link>
                </div>
              </div>
            </div>
            <p className="service-payment-note rebuild-tiers-intro">Plan hours are for that month only. They don&apos;t roll over.</p>
          </div>

          <div className="services-bucket">
            <h3 className="services-bucket-header">Social posting</h3>
            <p className="rebuild-tiers-intro">Feed help only — not the same as Growth. Add it alone or with a care plan.</p>
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
                  <p className="service-price-detail">You send photos and clips from the shop floor. I write captions, design posts, and publish twice a week on Instagram and Facebook. Pairs well with Essentials if you want your site covered too.</p>
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
                  <p className="service-payment-note">Light, consistent posting for busy owners. Need full ad strategy? A dedicated social agency may be a better fit.</p>
                  <a href="#contact" className="btn btn-primary service-btn">Let&apos;s talk social</a>
                </div>
              </div>
            </div>
          </div>

          <div className="services-bucket">
            <h3 className="services-bucket-header">Other</h3>
            <div className="services-grid services-grid-two-up services-grid-offer-pair">
              <div className="service-card service-card-hot-pink service-card-business-app">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">🔧</div>
                  </div>
                  <div className="service-badge">Quick Fix</div>
                </div>
                <div className="service-content">
                  <h3>Quick Fix</h3>
                  <p className="service-card-tagline">Something&apos;s broken, weird, or overdue for a cleanup?</p>
                  <div className="service-price-block">
                    <div className="service-price">$85/hr</div>
                    <p className="service-payment-note">1 hour minimum</p>
                  </div>
                  <p className="service-price-detail">Tell me what&apos;s going on. I quote you same day and fix it on Squarespace, Shopify, Wix, WordPress, or most anything else. If I finish early, I&apos;ll use the rest of the hour on your to-do list.</p>
                  <Link to="/website-fixes" className="btn btn-primary service-btn">Website fixes explained</Link>
                </div>
              </div>
              <div className="service-card service-card-purple">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">📱</div>
                  </div>
                  <div className="service-badge">Small App</div>
                </div>
                <div className="service-content">
                  <h3>Small App</h3>
                  <p className="service-card-tagline">One focused feature, built clean. iPhone and Android from one codebase.</p>
                  <div className="service-price-block">
                    <div className="service-price">from $3,500</div>
                  </div>
                  <p className="service-price-detail">Menus, schedules, simple booking, internal tools. If it helps your business and the scope stays tight, let&apos;s talk. We agree on price before work starts.</p>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>One core feature</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>iPhone + Android from one codebase</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>App Store and Google Play setup</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Custom design, launch support</span>
                    </div>
                  </div>
                  <p className="service-price-detail"><strong>Great for:</strong> event schedules, digital menus, simple booking, internal tools.</p>
                  <a href="#contact" className="btn btn-primary service-btn">Talk through an app idea</a>
                </div>
              </div>
            </div>
          </div>

          <div className="services-bucket">
            <h3 className="services-bucket-header">Work with me your way</h3>
            <div className="service-areas-grid">
              <article className="service-area-card">
                <h3>One time project</h3>
                <p>Single Page, Full Website, Quick Fix, or an app. Pay the flat fee or hourly rate. Call me again whenever something comes up.</p>
              </article>
              <article className="service-area-card">
                <h3>Monthly care (optional)</h3>
                <p>Essentials $200/mo or Growth $400/mo when you want upkeep or local search handled every month.</p>
              </article>
              <article className="service-area-card">
                <h3>Mix and match</h3>
                <p>Add Social Posting $200/mo on its own or with a care plan. We set up only what you need.</p>
              </article>
            </div>
          </div>

          <div className="platform-costs-callout">
            <div className="platform-costs-callout-header">
              <span className="platform-costs-callout-badge">Good to know</span>
              <h3>Platform costs you pay directly</h3>
            </div>
            <ul className="platform-costs-list">
              <li><strong>Domain:</strong> about $15 to $20/yr (yours)</li>
              <li><strong>Platform:</strong> $16 to $45/mo (Shopify from $39). Custom sites I host: first year free, then $60/yr.</li>
              <li><strong>Apple Developer:</strong> $99/yr</li>
              <li><strong>Google Play:</strong> $25 one time</li>
            </ul>
            <p className="platform-costs-callout-footer">
              I never mark these up, and I&apos;ll flag any paid tools before we start.{' '}
              <Link to="/platform-help">Need Wix, Squarespace, Shopify, or WordPress help?</Link>
            </p>
          </div>

          <p className="rebuild-tiers-intro">
            Your domain, your site, your accounts. Always yours. Leave anytime.
          </p>
        </div>
      </section>

      <section className="work-teaser" aria-labelledby="work-teaser-heading">
        <div className="container work-teaser-inner">
          <div className="work-teaser-copy">
            <h2 id="work-teaser-heading" className="work-teaser-title">
              See the work
            </h2>
            <p className="work-teaser-text">
              Client websites, apps I&apos;ve shipped, and concept sites that show the kind of look I build for local businesses.
            </p>
          </div>
          <Link to="/work" className="btn btn-primary">
            View portfolio →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" style={{ backgroundImage: `url(${sandiegoBeach})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <img
                src={profilePhoto}
                alt="Ian Sabado, web designer and developer in San Diego"
                className="about-photo"
                width={180}
                height={180}
                loading="lazy"
              />
              <h2 className="section-title">Hey, I&apos;m {FOUNDER_NAME} 👋</h2>
              <p>
                I&apos;m {FOUNDER_NAME}. I design and build websites for local businesses, and I handle the web development when something needs more than a template tweak. I&apos;ve spent years in tech and worked across most major platforms. I come from a family of small business owners, so I get that budgets are real. You shouldn&apos;t need a translator to understand your own site.
              </p>
              <p>
                Whether you need help making a website, fixing the one you have, or sorting out apps and everyday tech, I&apos;m still here after launch when you need a hand. Questions are welcome. I only recommend what you need, and I&apos;d rather do great work at a fair rate than oversell you.
              </p>
              <p>
                I post short tech explainers on Instagram at{' '}
                <a href="https://www.instagram.com/ianexplainstech/" target="_blank" rel="noopener noreferrer">@ianexplainstech</a>
                . I also build web and mobile apps when a project calls for it.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>🤝</h3>
                  <p>You talk to me</p>
                </div>
                <a
                  className="stat"
                  href="https://www.instagram.com/ianexplainstech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>📸</h3>
                  <p>@ianexplainstech</p>
                </a>
              </div>
            </div>
          </div>
      </div>
      </section>

      <section className="faq-teaser" aria-labelledby="faq-teaser-heading">
        <div className="container faq-teaser-inner">
          <div className="faq-teaser-copy">
            <h2 id="faq-teaser-heading" className="faq-teaser-title">
              Questions people ask first
            </h2>
            <p className="faq-teaser-text">
              Pricing, platforms, fixes, hosting, and how we work — straight answers in one place.
            </p>
          </div>
          <Link to="/faq" className="btn btn-primary">
            Read the FAQ →
          </Link>
        </div>
      </section>

      <ContactCta />
      </main>
    </>
  )
}
