import { useState, useEffect } from 'react'
import './App.css'
import heroLogo from './assets/new-mauna-logo.png'
import navLogo from './assets/mauna-only-transparent.png'
import logoTextLight from './assets/mauna-digital-black.png'
import logoTextDark from './assets/mauna-digital-white.png'
import profilePhoto from './assets/profile-photo2.png'
import postachioImage from './assets/postachio-project.png'
import postachioLogo from './assets/postachio-logo1.png'
import pocketsayScreenshot from './assets/pocketsay-screenshot.png'
import pocketsayLogo from './assets/pocketsay-logo1.png'
import sandiegoImage from './assets/sandiego.jpg'
import sandiegoBay from './assets/sandiego-bay.jpg'
import sandiegoBeach from './assets/sandiego-beach.jpg'
import sandiegoNorthpark from './assets/sandiego-northpark.jpg'
import sandiegoSunset from './assets/sandiego-sunset.jpg'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('mauna-dark-mode')
    return saved !== null ? JSON.parse(saved) : true
  })

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
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#tools">Apps</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setIsDark((prev: boolean) => !prev)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${sandiegoImage})` }}>
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
              <p className="hero-description">
                If something&apos;s broken, your site feels stuck, or Google isn&apos;t sending people your way, I can help. I&apos;ll tell you what&apos;s going on in plain English, fix what needs fixing, and keep it straightforward from start to finish.
                <br />
                <span className="service-pill">Ad Hoc</span> <span className="service-pill">Ongoing Help</span> <span className="service-pill">Shopify & WordPress</span> <span className="service-pill">SEO & Listings</span> <span className="service-pill">Rebuilds</span> <span className="service-pill">Mobile Apps</span>
              </p>
              <p className="hero-location">
                📍 Based in San Diego • Local or Remote, Whatever Works Best for You
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="services-header">
            <div className="services-intro">
              <img src={profilePhoto} alt="Ian Sabado" className="services-profile-photo" />
              <div className="intro-content">
          <p className="services-subtitle">Hey, I&apos;m Ian. I grew up around small business owners, so I know tech stuff usually lands on your plate at the worst possible time. If your site is acting weird, your forms are broken, or you&apos;re nervous to touch anything, you&apos;re in the right place. I&apos;ll handle it and keep it simple.</p>
              </div>
            </div>
          </div>
          
          <div className="services-section-header">
      <h2 className="services-title">Common Problems I Fix</h2>
      <p className="services-description">Straightforward help for the stuff slowing you down</p>
          </div>

          <div className="free-audit-callout">
            <h3>Not sure where to start?</h3>
            <p>
              Not sure what your site needs? I&apos;ll take a look for free and tell you exactly what I find — no charge, no pressure. Just send me your URL.
            </p>
            <a href="#contact" className="btn btn-primary">Get Your Free Site Audit</a>
          </div>
          
          {/* Section 1: AD-HOC WORK */}
          <div className="services-bucket">
            <div className="services-grid services-grid-two-up">
              <div className="service-card service-card-hot-pink">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">🔧</div>
                  </div>
                  <div className="service-badge">Ad-hoc Work</div>
                </div>
                <div className="service-content">
                  <h3>Get Something Done</h3>
                  <p className="service-card-tagline">Got a weird website problem or a short list of fixes? Send it over. I&apos;ll handle it.</p>
                  <div className="service-price-block">
                    <p className="service-price-detail">Most fixes are quoted same-day — just tell me what&apos;s going on.</p>
                    <p className="service-payment-note">Small jobs quoted on the spot. Bigger jobs get a flat quote before anything starts.</p>
                  </div>
                  <div className="service-adhoc-examples">
                    <ul className="service-adhoc-examples-list">
                      <li>Contact form not working</li>
                      <li>Mobile layout looking wild</li>
                      <li>Slow loading pages</li>
                      <li>Checkout or payment acting up</li>
                      <li>Broken links or missing images</li>
                    </ul>
                    <p className="service-adhoc-examples-reassurance">
                      I&apos;ll tell you what I think it&apos;ll take before I start. Clear and simple.
                    </p>
                  </div>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Works on Shopify, WordPress, Wix, custom code, and most platforms</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>I&apos;ll tell you what I think it&apos;ll take before I start</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                    </div>
                  </div>
                  <a href="#contact" className="btn btn-primary service-btn">Tell Me What You Need Done</a>
                </div>
              </div>
              <div className="service-card service-card-electric-blue">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">📍</div>
                  </div>
                  <div className="service-badge">SEO for Local Business</div>
                </div>
                <div className="service-content">
                  <h3>SEO for Local Business</h3>
                  <p className="service-card-tagline">This is the standard SEO foundation most local businesses need. I handle it for you so you don&apos;t have to.</p>
                  <div className="service-price-block">
                    <div className="service-price">One-off SEO Checklist: $399</div>
                    <p className="service-price-detail">One-time setup and cleanup of the core local SEO basics</p>
                    <p className="service-payment-note">One-time · Full payment upfront</p>
                  </div>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Google Business Profile fully cleaned up and optimized</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Business listings cleaned up so your info matches across Yelp, Apple Maps, and Bing Places</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Website SEO basics fixed on key pages (titles, descriptions, and headings)</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Behind-the-scenes business info code added so Google clearly understands your services and location</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Google tracking tools set up so you can see what&apos;s working</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>You get a clear checklist of everything I handled, in plain English</span>
                    </div>
                  </div>
                  <p className="service-agency-anchor">This is standard SEO work every local business should have in place. Agencies charge $800–2,000+ for it.</p>
                  <a href="#contact" className="btn btn-primary service-btn">Get My Local SEO Game Plan</a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: BIGGER PROJECTS */}
          <div className="services-bucket">
            <h3 className="services-bucket-header">Bigger Projects</h3>
            <p className="rebuild-tiers-intro">
              Not sure which one fits yet? No stress. Start with what you need right now, and we can build from there when the timing makes sense.
            </p>
            <div className="services-grid services-grid-rebuild-three">
              <div className="service-card service-card-neon-green">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">🖥️</div>
                  </div>
                  <div className="service-badge">Simple Site</div>
                </div>
                <div className="service-content">
                  <h3>Simple Site</h3>
                  <p className="service-card-tagline">A clean, professional site that works on every device and makes a good first impression. Nothing overcomplicated — just solid work, done right.</p>
                  <div className="service-price-block">
                    <div className="service-price">$1,200</div>
                    <p className="service-price-detail">One-time · You can update it yourself</p>
                    <p className="service-payment-note">Full payment upfront · Work starts once payment clears</p>
                  </div>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>5 pages (Home, About, Services, Contact, plus one more of your choice)</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Mobile-friendly design that doesn&apos;t look like a template</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Contact form set up and working</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Basic SEO so Google can find you</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Training so you can update it yourself without calling me every time</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>30 days of post-launch support included — questions welcome</span>
                    </div>
                  </div>
                  <p className="service-payment-note">Need more pages or something special? I&apos;ll quote that separately before anything starts — no surprises.</p>
                  <a href="#contact" className="btn btn-primary service-btn">Talk About a Simple Site</a>
                </div>
              </div>

              <div className="service-card service-card-neon-green">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">🖥️</div>
                  </div>
                  <div className="service-badge">Custom Build</div>
                </div>
                <div className="service-content">
                  <h3>Custom Build</h3>
                  <p className="service-card-tagline">More pages, more functionality, or something that needs a custom touch. Shopify stores, complex WordPress builds, e-commerce — if it&apos;s more involved, we scope it together before anything starts.</p>
                  <div className="service-price-block">
                    <div className="service-price">Starting at $2,500</div>
                    <p className="service-price-detail">One-time · You can run it yourself</p>
                    <p className="service-payment-note">Full payment upfront · Work starts once payment clears</p>
                  </div>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Everything in the Simple Site</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Custom design tailored to your brand</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Shopify store or complex WordPress build</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>E-commerce or advanced functionality</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Full training so you can run it yourself</span>
                    </div>
                  </div>
                  <p className="service-agency-anchor">Agencies charge $8,000–20,000+ for comparable work</p>
                  <a href="#contact" className="btn btn-primary service-btn">Let&apos;s Talk About Your Build</a>
                </div>
              </div>
            </div>

            <div className="services-grid services-grid-single services-grid-mobile-app-below">
              <div className="service-card service-card-hot-pink">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">📱</div>
                  </div>
                  <div className="service-badge">Mobile App</div>
                </div>
                <div className="service-content">
                  <h3>Mobile App</h3>
                  <p className="service-card-tagline">Got a focused app idea? I build for iPhone and Android without the agency price tag. Best for businesses that need something specific — ordering, menus, internal tools, events. Not the right fit for the next Instagram.</p>
                  <div className="service-price-block">
                    <div className="service-price">Starting at $5,000</div>
                    <p className="service-price-detail">Project-based · iPhone & Android</p>
                    <p className="service-agency-anchor">Agencies quote $25,000–100,000+ for custom apps</p>
                    <p className="service-payment-note">Full payment upfront · Work starts once payment clears</p>
                  </div>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>One codebase, works on iPhone and Android</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Best for focused apps: events, menus, internal tools, ordering</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Not the right fit for social platforms or apps needing millions of users</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>App Store and Google Play setup included</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Custom design tailored to your brand</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Recent work: PocketSay (live on App Store, 4.8★)</span>
                    </div>
                  </div>
                  <a href="#contact" className="btn btn-primary service-btn">Let's Talk</a>
                </div>
              </div>
            </div>
            <div className="ongoing-help-blurb">
              <h3>A heads up on platform costs</h3>
              <p>My fee covers the design, build, and launch. But there are a few ongoing costs you&apos;ll pay directly to the platforms — not to me. Totally normal, just want you to know upfront:</p>
              <ul className="service-adhoc-examples-list">
                <li>Domain name — around $15–20/year. You own it, not me.</li>
                <li>Hosting or platform subscription — depends on what we build on. Squarespace and Wix run $16–45/month. WordPress hosting is usually $10–20/month. Shopify starts at $39/month.</li>
                <li>Shopify POS — if you&apos;re selling in person, Shopify charges extra for point-of-sale features depending on your plan.</li>
                <li>Third-party apps or plugins — sometimes the right tool for your business costs a few bucks a month. I&apos;ll always tell you upfront if I&apos;m recommending something paid.</li>
              </ul>
              <p className="service-payment-note">I&apos;ll walk you through all of this before we start so nothing catches you off guard.</p>
            </div>
          </div>

          <div className="services-bucket">
            <h3 className="services-bucket-header">Need Ongoing Help?</h3>
            <div className="ongoing-help-blurb">
              <p>
                Some people need help every month. Some just need a fix and they&apos;re set for a while. If you keep needing updates, social posting help, or just want someone to keep the digital side from becoming a headache, reach out. I&apos;ll set up something that fits your situation. Nothing rigid.
              </p>
              <a href="#contact" className="btn btn-primary">Let&apos;s Figure Out What Fits</a>
            </div>
          </div>
        </div>
      </section>

      {/* How This Works Section */}
      <section className="how-it-works" style={{ backgroundImage: `url(${sandiegoSunset})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <h2 className="section-title">How This Works</h2>
          <p className="section-subtitle">Simple process. No runaround.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>We Talk</h3>
              <p>You tell me what&apos;s going on. I&apos;ll take a look and give you a straight answer. No pressure.</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Clear Plan</h3>
              <p>I&apos;ll tell you what I recommend, what it costs, and how long it should take.</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>I Get to Work</h3>
              <p>Once you approve it, I get started and keep you posted as things move.</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>You Can Breathe Again</h3>
              <p>Things work. You know what changed. And you&apos;re not stuck guessing anymore.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mauna Digital Section */}
      <section className="why-choose" style={{ backgroundImage: `url(${sandiegoNorthpark})` }}>
        <div className="section-overlay section-overlay-light"></div>
        <div className="container">
          <h2 className="section-title">Why People Work With Me</h2>
          <div className="why-choose-content">
            <div className="why-choose-problem">
              <h3>I Keep It Human</h3>
              <p>You shouldn&apos;t need a translator to understand your own website. I explain what&apos;s wrong, what I&apos;m doing, and what to expect next.</p>
              <p>You&apos;re working directly with me, not getting passed around. That also means you&apos;re not paying for agency overhead and layers of account managers.</p>
              <ul className="frustration-list">
                <li>I explain what was wrong and how I fixed it</li>
                <li>I answer every question without judgment</li>
                <li>I stick around after the project is done</li>
                <li>I only recommend what you need</li>
              </ul>
            </div>
            <div className="why-choose-solution">
              <h3>What It&apos;s Like Working Together</h3>
              <ul className="solution-list">
                <li><strong>San Diego clients:</strong> If in-person is easier, great. If remote is easier, also great.</li>
                <li><strong>Remote clients:</strong> We can hop on a call, share screens, and sort things out together.</li>
                <li><strong>Everyone:</strong> You can text me directly. No ticket maze.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="tools" style={{ backgroundImage: `url(${sandiegoBay})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <h2 className="section-title">Apps I&apos;ve Built</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-media">
                <img src={postachioImage} alt="Postachio App preview" className="tool-image" />
              </div>
              <div className="tool-content">
                <div className="tool-badge">New</div>
                <h3 className="tool-title">
                  <img src={postachioLogo} alt="Postachio logo" className="tool-title-logo" />
                  Postachio
                </h3>
                <p className="tool-subtitle">AI-powered social posts with SEO in mind</p>
                <p className="tool-description">Postachio helps you write social content faster while keeping search visibility in mind. It&apos;s built for consistency, clear structure, and less time staring at a blank caption box.</p>
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
            <div className="tool-card">
              <div className="tool-media">
                <img src={pocketsayScreenshot} alt="PocketSay App screenshot" className="tool-image tool-image-pocketsay" />
              </div>
              <div className="tool-content">
                <div className="tool-badge">Mobile App</div>
                <h3 className="tool-title">
                  <img src={pocketsayLogo} alt="PocketSay logo" className="tool-title-logo" />
                  PocketSay
                </h3>
                <p className="tool-subtitle">Say it BIG when you can't say it loud</p>
                <p className="tool-description">PocketSay lets you show large, customizable text when you need to be seen instead of heard. Great for noisy places, distance, or quick non-verbal communication. Private and works offline.</p>
                <div className="tool-tags">
                  <span className="tool-tag">Mobile</span>
                  <span className="tool-tag">Communication</span>
                  <span className="tool-tag">Privacy</span>
                </div>
                <div className="tool-cta">
                  <a href="https://apps.apple.com/us/app/pocketsay/id6756633082" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download PocketSay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="about" style={{ backgroundImage: `url(${sandiegoBeach})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Hey, I'm Ian 👋</h2>
              <p>
                I&apos;m a developer who helps small businesses with websites, SEO, and the random tech messes that pop up during a normal week.
              </p>
              <p>
                I spent years managing websites in the Bay Area, and I&apos;ve worked across most major platforms. I care way more about being useful than sounding impressive.
              </p>
              <p>
                I also build web and mobile apps. If you&apos;ve got an idea for an internal tool or a customer-facing app, I&apos;m happy to talk it through and tell you what&apos;s realistic.
              </p>
              <p>
                I&apos;m based in San Diego and happy to meet in person when that helps, but I work with people all over. No fluff. No confusing contract language. Just clear, honest help.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>📍</h3>
                  <p>San Diego based</p>
                </div>
                <div className="stat">
                  <h3>💻</h3>
                  <p>Remote available</p>
                </div>
              </div>
            </div>
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
                <div className="contact-badge">Free Website Check</div>
              </div>
              <div className="contact-content-main">
                <h3>Start Here</h3>
                <p className="contact-subtitle">Send me your site or just tell me what&apos;s going on. I&apos;ll give you honest feedback on what I&apos;d fix first, what can wait, and what it might cost. No pressure.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-item-icon">📧</div>
                    <div className="contact-item-content">
                      <h4>Email</h4>
                      <p><a href="mailto:ian@maunadigital.com">ian@maunadigital.com</a></p>
                    </div>
                  </div>
                  <div className="contact-item contact-item-wide">
                    <div className="contact-item-icon">📍</div>
                    <div className="contact-item-content">
                      <h4>Based in San Diego</h4>
                      <p>Local to San Diego — happy to meet in person or work fully remote</p>
                      <p className="contact-item-note">💻 Also working with clients across the US</p>
                      <p className="contact-item-note">☕ First conversation is free — in person or video, your call</p>
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
                      <p>Upfront for quick fixes and projects · Ongoing help can be arranged as needed</p>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Mauna Digital LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

