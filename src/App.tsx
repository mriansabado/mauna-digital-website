import { useState, useEffect } from 'react'
import './App.css'
import heroLogo from './assets/new-mauna-logo.png'
import navLogo from './assets/mauna-only-transparent.png'
import logoTextLight from './assets/mauna-digital-black.png'
import logoTextDark from './assets/mauna-digital-white.png'
import devportfolioScreenshot from './assets/devportfolio-sc.png'
import barblendGuruScreenshot from './assets/barblend-guru-sc.png'
import postachioImage from './assets/postachio-project.png'
import postachioLogo from './assets/postachio-logo1.png'
import pocketsayScreenshot from './assets/pocketsay-screenshot.png'
import pocketsayLogo from './assets/pocketsay-logo1.png'
import tasqlyScreenshot from './assets/tasqly-sc.png'
import tasqlyLogo from './assets/Tasqly-Logo.png'
import sandiegoImage from './assets/sandiego.jpg'
import sandiegoBay from './assets/sandiego-bay.jpg'
import sandiegoBeach from './assets/sandiego-beach.jpg'
import { demoSites } from './data/demoSites'
import { DemoPreview } from './components/DemoPreview'

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof localStorage === 'undefined') return true
    const saved = localStorage.getItem('mauna-dark-mode')
    return saved !== null ? JSON.parse(saved) : true
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('mauna-dark-mode', JSON.stringify(isDark))
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={navLogo} alt="Mauna Digital" className="nav-logo-image" />
            <img src={isDark ? logoTextDark : logoTextLight} alt="Mauna Digital" className="nav-logo-text" />
          </div>
          <div className="nav-right">
            <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
            <div className="nav-actions">
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setIsDark((prev: boolean) => !prev)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Light mode' : 'Dark mode'}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <button
                type="button"
                className="nav-menu-toggle"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <span className="nav-menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

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
                <span className="hero-kicker">Web developer in San Diego</span>
                Small business tech,{' '}
                <span className="hero-subtitle">handled</span>
              </h1>
              <div className="hero-copy">
                <p className="hero-subtext">
                  Web developer in San Diego for small businesses. Websites, ongoing care, local SEO, social, fixes, and apps. Pick what fits. I handle the tech so you can run your business.
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
                <a href="#services" className="btn btn-secondary">See Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="services-bucket">
            <h3 className="services-bucket-header">Websites</h3>
            <p className="rebuild-tiers-intro">
              <strong>How do you want your site built?</strong> Shopify, Wix, or Squarespace if you want to log in and make simple changes yourself. Or a custom site I build and self host for you when you want more flexibility and no platform subscription. We pick what fits before we start.
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
                  <p className="service-card-tagline">One page, done right. For when you don&apos;t need a full site, just one strong page.</p>
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
                      <span>One round of revisions</span>
                    </div>
                  </div>
                  <p className="service-price-detail"><strong>Great for:</strong> events, performers, pop ups, &quot;coming soon&quot; pages, solo pros, food trucks.</p>
                  <a href="#contact" className="btn btn-primary service-btn">Tell me your idea</a>
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
                  <p className="service-card-tagline">New business or ready for a real upgrade? Let&apos;s build the whole thing together.</p>
                  <div className="service-price-block">
                    <div className="service-price">$1,200 flat</div>
                  </div>
                  <p className="service-price-detail">A multi page site that feels like <em>you</em>, not a generic template you fought with for three weekends. I walk you through it after launch so you&apos;re not lost.</p>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Multi page site (home, about, services or shop, contact)</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Online shop if you need it</span>
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
                  <p className="service-price-detail">Same platform choices as above. Monthly care is optional if you want someone on call after launch. It can include hosting when I self host a custom build for you.</p>
                  <a href="#contact" className="btn btn-primary service-btn">Let&apos;s plan it out</a>
                </div>
              </div>
            </div>
          </div>

          <div className="services-bucket">
            <h3 className="services-bucket-header">Monthly care</h3>
            <p className="rebuild-tiers-intro">
              Your tech person, on call, if you want one. Essentials keeps things running. Growth helps you get found. Month to month, cancel anytime. No plan required for a one time site or Quick Fix. Many clients pay for the project and reach out again when they need me.
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
                  <p className="service-card-tagline">Keep my site working.</p>
                  <div className="service-price-block">
                    <div className="service-price">$150/mo</div>
                  </div>
                  <p className="service-price-detail">If your site breaks, goes down, or gets hacked, I catch it and fix it, usually before you notice. Plus an hour a month for whatever you need.</p>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Site monitored, backed up, and kept up to date</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>1 hour a month for any tech help: website edits, email setup, domains, Google accounts, Square/Clover, &quot;why won&apos;t this work&quot; calls</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Hosting included for custom-built sites</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Same-day response</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Text me directly</span>
                    </div>
                  </div>
                  <a href="#contact" className="btn btn-primary service-btn">Let&apos;s Talk</a>
                </div>
              </div>
              <div className="service-card service-card-hot-pink">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">📈</div>
                  </div>
                  <div className="service-badge">Recommended</div>
                </div>
                <div className="service-content">
                  <h3>Growth</h3>
                  <p className="service-card-tagline">Help me get found.</p>
                  <div className="service-price-block">
                    <div className="service-price">$400/mo</div>
                  </div>
                  <p className="service-price-detail">Everything in Essentials, plus the local search work that takes time every month: Google Business Profile, listings, on site SEO, and a second hour of edits. I send a short monthly report so you know what changed.</p>
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
                      <span>Google Business Profile management (updates, posts, photos)</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Consistent listings across Yelp, Apple Maps, and Bing</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Ongoing on site SEO improvements</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Monthly summary report</span>
                    </div>
                  </div>
                  <p className="service-price-detail">Local SEO builds over time. Most businesses see movement in Google Maps within 2 to 4 months.</p>
                  <a href="#contact" className="btn btn-primary service-btn">Let&apos;s get you found</a>
                </div>
              </div>
            </div>
            <p className="service-payment-note rebuild-tiers-intro">Plan hours are for that month only. They don&apos;t roll over.</p>
          </div>

          <div className="services-bucket">
            <h3 className="services-bucket-header">Social posting</h3>
            <p className="rebuild-tiers-intro">Not the same as Growth: this is feed help only. Add it to Essentials or Growth if you want site care and social covered.</p>
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
                    <div className="service-price">$350/mo</div>
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
                  <a href="#contact" className="btn btn-primary service-btn">What&apos;s going on?</a>
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
                <p>Essentials $150/mo or Growth $400/mo when you want upkeep or local search handled every month.</p>
              </article>
              <article className="service-area-card">
                <h3>Mix and match</h3>
                <p>Add Social Posting $350/mo on its own or with a care plan. We set up only what you need.</p>
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
              <li><strong>Platform:</strong> $16 to $45/mo (Shopify from $39); $0 if I host a custom site</li>
              <li><strong>Apple Developer:</strong> $99/yr</li>
              <li><strong>Google Play:</strong> $25 one time</li>
            </ul>
            <p className="platform-costs-callout-footer">
              I never mark these up, and I&apos;ll flag any paid tools before we start.
            </p>
          </div>

          <p className="rebuild-tiers-intro">
            Your domain, your site, your accounts. Always yours. Leave anytime.
          </p>
        </div>
      </section>

      <div id="work">
      {/* Demo Websites Section */}
      <section id="demos" className="demos">
        <div className="container">
          <h2 className="section-title">Demo Websites</h2>
          <p className="demos-subtitle">
            A few sample sites I built. Click through and imagine yours here.
          </p>
          <div className="demos-grid">
            {demoSites.map((site) => (
              <article key={site.url} className="demo-card">
                <DemoPreview url={site.url} title={site.name} screenshot={site.screenshot} />
                <div className="demo-card-body">
                  <div className="demo-card-header">
                    <span className="demo-card-icon" aria-hidden="true">{site.icon}</span>
                    <div>
                      <h3 className="demo-card-title">{site.name}</h3>
                      <p className="demo-card-tagline">{site.tagline}</p>
                    </div>
                  </div>
                  <p className="demo-card-description">{site.description}</p>
                  <div className="demo-tags">
                    {site.tags.map((tag) => (
                      <span key={tag} className="demo-tag">{tag}</span>
                    ))}
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary demo-card-btn"
                  >
                    Open Live Site
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="tools" style={{ backgroundImage: `url(${sandiegoBay})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <h2 className="section-title">Apps I&apos;ve Built</h2>
          <div className="tools-grid">
            <div className="tool-card" id="tool-pocketsay">
              <div className="tool-media">
                <img src={pocketsayScreenshot} alt="PocketSay App screenshot" className="tool-image tool-image-pocketsay" />
              </div>
              <div className="tool-content">
                <div className="tool-badge">iOS App</div>
                <h3 className="tool-title">
                  <img src={pocketsayLogo} alt="PocketSay logo" className="tool-title-logo" />
                  PocketSay
                </h3>
                <p className="tool-subtitle">Say it BIG when you can&apos;t say it loud</p>
                <p className="tool-description">Show large, customizable text when you need to be seen instead of heard. Private, works offline.</p>
                <div className="tool-tags">
                  <span className="tool-tag">iOS</span>
                  <span className="tool-tag">Communication</span>
                  <span className="tool-tag">Privacy</span>
                </div>
                <div className="tool-cta">
                  <a href="https://apps.apple.com/us/app/pocketsay/id6756633082" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download PocketSay</a>
                </div>
              </div>
            </div>
            <div className="tool-card" id="tool-tasqly">
              <div className="tool-media">
                <img src={tasqlyScreenshot} alt="Tasqly app screenshot" className="tool-image tool-image-tasqly" />
              </div>
              <div className="tool-content">
                <div className="tool-badge">iOS App</div>
                <h3 className="tool-title">
                  <img src={tasqlyLogo} alt="Tasqly logo" className="tool-title-logo" />
                  Tasqly
                </h3>
                <p className="tool-subtitle">Planner first workflow for freelancers &amp; service pros</p>
                <p className="tool-description">A React Native app for independent pros to manage clients, schedule sessions, and stay on top of the week.</p>
                <div className="tool-tags">
                  <span className="tool-tag">Expo</span>
                  <span className="tool-tag">React Native</span>
                  <span className="tool-tag">Productivity</span>
                  <span className="tool-tag">iOS</span>
                </div>
                <div className="tool-cta">
                  <a href="https://apps.apple.com/us/app/tasqly/id6761040872" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Tasqly</a>
                </div>
              </div>
            </div>
            <div className="tool-card" id="tool-barblend-guru">
              <div className="tool-media">
                <img src={barblendGuruScreenshot} alt="BarBlend Guru app screenshot" className="tool-image" />
              </div>
              <div className="tool-content">
                <div className="tool-badge">Free Web App</div>
                <h3 className="tool-title">BarBlend Guru</h3>
                <p className="tool-subtitle">Find your next favorite pour from what&apos;s already in the cabinet</p>
                <p className="tool-description">Search a cocktail library by name, by what you have on hand, or hit the randomizer.</p>
                <div className="tool-tags">
                  <span className="tool-tag">Web App</span>
                  <span className="tool-tag">Recipes</span>
                  <span className="tool-tag">Randomizer</span>
                </div>
                <div className="tool-cta">
                  <a href="https://barblend-guru-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open BarBlend Guru</a>
                </div>
              </div>
            </div>
            <div className="tool-card" id="tool-postachio">
              <div className="tool-media">
                <img src={postachioImage} alt="Postachio App preview" className="tool-image" />
              </div>
              <div className="tool-content">
                <div className="tool-badge">Web App</div>
                <h3 className="tool-title">
                  <img src={postachioLogo} alt="Postachio logo" className="tool-title-logo" />
                  Postachio
                </h3>
                <p className="tool-subtitle">AI powered social posts with SEO in mind</p>
                <p className="tool-description">Write social content faster, with structure and search in mind, instead of staring at a blank caption box.</p>
                <div className="tool-tags">
                  <span className="tool-tag">AI</span>
                  <span className="tool-tag">SEO</span>
                  <span className="tool-tag">Content</span>
                </div>
                <div className="tool-cta">
                  <a href="https://postachio.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Try Postachio</a>
                </div>
              </div>
            </div>
            <div className="tool-card" id="tool-dev-portfolio">
              <div className="tool-media">
                <img src={devportfolioScreenshot} alt="Ian Sabado portfolio screenshot" className="tool-image" />
              </div>
              <div className="tool-content">
                <div className="tool-badge">Interactive Website</div>
                <h3 className="tool-title">Ian Sabado Dev Portfolio</h3>
                <p className="tool-subtitle">A gamified portfolio you explore like a tiny space adventure</p>
                <p className="tool-description">My own portfolio, built as a playful interactive site instead of a standard scroll and skim page.</p>
                <div className="tool-tags">
                  <span className="tool-tag">Portfolio</span>
                  <span className="tool-tag">Interactive</span>
                  <span className="tool-tag">Front End</span>
                </div>
                <div className="tool-cta">
                  <a href="https://www.iansabado.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Explore Portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      {/* About Section */}
      <section id="about" className="about" style={{ backgroundImage: `url(${sandiegoBeach})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Hey, I&apos;m Ian 👋</h2>
              <p>
                I&apos;ve spent years in tech and worked across most major platforms. I come from a family of small business owners, so I get that budgets are real. You shouldn&apos;t need a translator to understand your own site.
              </p>
              <p>
                I&apos;m still here after launch when you need a hand. Questions are welcome. I only recommend what you need, and I&apos;d rather do great work at a fair rate than oversell you.
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

      <section id="faq" className="faq" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className="section-title">Questions people ask first</h2>
          <div className="faq-list">
            <article className="faq-item">
              <h3>Are you based in San Diego?</h3>
              <p>Yes. In person locally, remote anywhere, including Hawaii.</p>
            </article>
            <article className="faq-item">
              <h3>Which platform should I use?</h3>
              <p>Shopify, Wix, or Squarespace if you want to make simple changes yourself. Custom built and self hosted by me if you want no templates and no platform fee. I walk you through the tradeoffs on a call.</p>
            </article>
            <article className="faq-item">
              <h3>Can I cancel a monthly plan?</h3>
              <p>Yes, anytime. Month to month, no contracts.</p>
            </article>
            <article className="faq-item">
              <h3>What if I just need one thing fixed?</h3>
              <p>$85/hr, no plan needed. One hour minimum, quoted same day.</p>
            </article>
            <article className="faq-item">
              <h3>Will I work with you directly?</h3>
              <p>Yes. It&apos;s always me. Text or email, and you can reach me after launch too.</p>
            </article>
            <article className="faq-item">
              <h3>If you host my site and I leave, what happens?</h3>
              <p>I hand over the code and help you move it to new hosting. It&apos;s yours.</p>
            </article>
            <article className="faq-item">
              <h3>Can you help with tech beyond my website?</h3>
              <p>Yes. Plan hours cover email, domains, Google accounts, POS setup, and the random stuff that breaks.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-header">
            <div className="contact-badge">Need a Hand?</div>
            <h2 className="section-title">Let&apos;s Talk</h2>
          </div>
          
          <div className="contact-content">
            <div className="contact-card contact-card-gradient">
              <div className="contact-card-header">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">💬</div>
                </div>
                <div className="contact-badge">Free Site Check</div>
              </div>
              <div className="contact-content-main">
                <h3>Start Here</h3>
                <p className="contact-subtitle">Send me your URL or describe what&apos;s going on. I&apos;ll tell you what to fix first, what can wait, and what it might cost. First chat is free.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-item-icon">📧</div>
                    <div className="contact-item-content">
                      <h4>Email</h4>
                      <p><a href="mailto:ian@maunadigital.com">ian@maunadigital.com</a></p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">☕</div>
                    <div className="contact-item-content">
                      <h4>First conversation</h4>
                      <p>Free, in person or video, your call</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">⚡</div>
                    <div className="contact-item-content">
                      <h4>Response Time</h4>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">💰</div>
                    <div className="contact-item-content">
                      <h4>Payment</h4>
                      <p>Projects paid upfront · Plans billed monthly</p>
                    </div>
                  </div>
                </div>
                <div className="contact-cta">
                  <a href="mailto:ian@maunadigital.com" className="btn btn-primary contact-btn">
                    Send Me a Quick Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Mauna Digital LLC. All rights reserved.</p>
          <address className="footer-nap">
            Web developer in San Diego · Remote across the US · Clients in Hawaii
            <br />
            San Diego, CA ·{' '}
            <a href="mailto:ian@maunadigital.com">ian@maunadigital.com</a>
          </address>
          <p className="footer-links">
            <a href="#faq">FAQ</a>
            {' · '}
            <a href="#contact">Contact</a>
            {' · '}
            <a href="https://www.instagram.com/ianexplainstech/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
