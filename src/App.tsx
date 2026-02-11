import { useState } from 'react'
import './App.css'
import logo from './assets/mauna-logo-transparent.png'
import mountains from './assets/mauna-only2.png'
import logoText from './assets/mauna-digital-text.png'
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
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleDetails = (id: string) => {
    setExpandedCard(prev => prev === id ? null : id)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={mountains} alt="Mauna Digital" className="nav-logo-image" />
            <img src={logoText} alt="Mauna Digital" className="nav-logo-text" />
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#tools">Tools</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
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
                <img src={logo} alt="Mauna Digital" className="logo-image" />
              </div>
              <h1 className="hero-title">
                Small Business Tech Problems?
                <br />
                <span className="hero-subtitle">I Fix Them.</span>
              </h1>
              <p className="hero-description">
                Slow website? Can't get found on Google? I help small businesses with their sites and with getting seen online, without the agency price tag.
                <span className="service-pill">Shopify & WordPress</span> <span className="service-pill">SEO & Google</span> <span className="service-pill">Social media</span> <span className="service-pill">Speed optimization</span>
              </p>
              <p className="hero-location">
                📍 Based in San Diego • Meeting Local Clients In Person (Remote Projects Welcome Too)
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
          <p className="services-subtitle">Hi, I'm Ian. I come from a family of small business owners, so I know how frustrating tech problems can be when you're just trying to run your business. Whether you're on Shopify or WordPress, your website is slow, your forms are broken, or you're scared to touch anything on your site, I can help. No confusing jargon, no judgment for asking questions. Just honest work from someone who is happy to help.</p>
              </div>
            </div>
          </div>
          
          <div className="services-section-header">
      <h2 className="services-title">Common Problems I Fix</h2>
      <p className="services-description">Real solutions for real business headaches</p>
          </div>
          
          <div className="services-grid">
            {/* Ad Hoc - $120/hr */}
            <div className="service-card service-card-hot-pink">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🔧</div>
                </div>
                <div className="service-badge">Ad Hoc</div>
              </div>
              <div className="service-content">
                <h3>AD HOC</h3>
                <p className="service-card-tagline">For when you just need something fixed</p>
                <div className="service-price-block">
                  <div className="service-price">$120<span>/hr</span></div>
                  <p className="service-price-detail">No retainer, no minimum</p>
                </div>
                <div className="service-features service-features-condensed">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Form broken? Site broken on mobile?</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Quick updates, bug fixes, one-off changes</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>I'll estimate before starting — typically 1–3 hrs for most fixes</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Tell Me What's Broken</a>
              </div>
            </div>

            {/* Starter - $400/month */}
            <div className="service-card service-card-electric-yellow">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🔍</div>
                </div>
                <div className="service-badge">Starter</div>
              </div>
              <div className="service-content">
                <h3>STARTER</h3>
                <p className="service-card-tagline">For businesses that just need to show up online</p>
                <div className="service-price-block">
                  <div className="service-price">$400<span>/month</span></div>
                  <p className="service-price-detail">4 hrs/month · Overage at $120/hr</p>
                </div>
                <div className="service-features service-features-condensed">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Google, Yelp & Apple Maps managed</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Local SEO basics</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Basic site updates</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-see-details"
                  onClick={() => toggleDetails('starter')}
                  aria-expanded={expandedCard === 'starter'}
                >
                  {expandedCard === 'starter' ? 'Hide Details' : 'See Details'}
                </button>
                <div className={`service-details-expand ${expandedCard === 'starter' ? 'service-details-expand-open' : ''}`}>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Google Business Profile setup and ongoing management</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Yelp and Apple Maps listings kept current</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Local SEO basics (meta titles, descriptions, local keywords)</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Site updates (hours, photos, text changes)</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>4 flexible hours for whatever comes up</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>24hr response time</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Monthly summary of what was done</span>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
                <p className="retainer-footer">Additional hours billed at $120/hr — I'll always ask before going over.</p>
              </div>
            </div>

            {/* Essential - $600/month */}
            <div className="service-card service-card-purple">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">⚙️</div>
                </div>
                <div className="service-badge">Essential</div>
              </div>
              <div className="service-content">
                <h3>ESSENTIAL</h3>
                <p className="service-card-tagline">For businesses that need their site working and current</p>
                <div className="service-price-block">
                  <div className="service-price">$600<span>/month</span></div>
                  <p className="service-price-detail">6 hrs/month · Overage at $120/hr</p>
                </div>
                <div className="service-features service-features-condensed">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Everything in Starter</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Ongoing SEO work</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Proactive site updates and new pages</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-see-details"
                  onClick={() => toggleDetails('essential')}
                  aria-expanded={expandedCard === 'essential'}
                >
                  {expandedCard === 'essential' ? 'Hide Details' : 'See Details'}
                </button>
                <div className={`service-details-expand ${expandedCard === 'essential' ? 'service-details-expand-open' : ''}`}>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Everything in Starter</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Ongoing SEO work (content updates, technical fixes, ranking improvements)</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Seasonal updates, promotions, new pages</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Google listing posts and review monitoring</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>More hands-on site work as your business changes</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>6 flexible hours</span>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
                <p className="retainer-footer">Additional hours billed at $120/hr — I'll always ask before going over.</p>
              </div>
            </div>

            {/* Partner - $900/month */}
            <div className="service-card service-card-neon-green">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🤝</div>
                </div>
                <div className="service-badge">Partner</div>
              </div>
              <div className="service-content">
                <h3>PARTNER</h3>
                <p className="service-card-tagline">Your tech person, fully handled</p>
                <div className="service-price-block">
                  <div className="service-price">$900<span>/month</span></div>
                  <p className="service-price-detail">10 hrs/month · Overage at $120/hr</p>
                </div>
                <div className="service-features service-features-condensed">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Everything in Essential</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Monthly SEO report</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Same-day response</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Light design work included</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-see-details"
                  onClick={() => toggleDetails('partner')}
                  aria-expanded={expandedCard === 'partner'}
                >
                  {expandedCard === 'partner' ? 'Hide Details' : 'See Details'}
                </button>
                <div className={`service-details-expand ${expandedCard === 'partner' ? 'service-details-expand-open' : ''}`}>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Everything in Essential</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Priority same-day response</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Light design work (banners, graphics, branding updates)</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Monthly SEO report showing progress</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>Quarterly check-in call</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                      <span>10 flexible hours</span>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Let's Talk</a>
                <p className="retainer-footer">Additional hours billed at $120/hr — I'll always ask before going over.</p>
              </div>
            </div>
            
            <div className="service-card service-card-electric-blue">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🛒</div>
                </div>
                <div className="service-badge">Shopify & WordPress</div>
              </div>
              <div className="service-content">
                <h3>"I'm Stuck with My Shopify or WordPress Site"</h3>
                <div className="service-price-block">
                  <div className="service-price">$500–$1,200</div>
                  <p className="service-price-detail">One-time • Fixes + training</p>
                </div>
                <p>I've done a lot of work in Shopify and WordPress: theme customization, custom sections, plugins, updates, bug fixes, performance. I'm equally comfortable in both, and I work with most major platforms and raw code too. Whatever you're on, I can help. I'll fix what's broken and show you how to run it yourself. Monthly support available as well.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Shopify: theme customization, sections, store/checkout fixes</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>WordPress: plugins, updates, content, performance</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Most platforms and raw code: not just Shopify & WordPress</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Speed & fixes: faster load, forms, links</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Training so you can manage it yourself</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Unstuck</a>
              </div>
            </div>
            
            <div className="service-card service-card-neon-green">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
            <div className="service-icon">🖥️</div>
                </div>
          <div className="service-badge">Rebuild</div>
              </div>
              <div className="service-content">
          <h3>"My Website is Stuck in the Past. I Need a Fresh Start."</h3>
          <div className="service-price-block">
          <div className="service-price">$2,500–$4,000</div>
          <p className="service-price-detail">One-time • 2–3 weeks • You can update it yourself</p>
          </div>
          <p>Old site you can't update? I'll rebuild it on something you can manage and train you to update it yourself. Modern design, SEO setup, forms and email, the works.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Modern design that works on all devices</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Shopify or WordPress done right</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>SEO setup so Google can find you</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Training so you can run it yourself</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Rebuild My Site</a>
              </div>
            </div>
            
            <div className="service-card service-card-hot-pink">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">📱</div>
                </div>
                <div className="service-badge">Mobile App</div>
              </div>
              <div className="service-content">
                <h3>"I Have an App Idea..."</h3>
                <div className="service-price-block">
                <div className="service-price">Let's talk</div>
                <p className="service-price-detail">Project-based • iPhone & Android</p>
                </div>
                <p>I build focused apps: think events for a conference, a menu or ordering app, or internal tools for your team. One codebase for iPhone and Android. I'm not the right fit for social platforms or apps that need to scale to millions; I'm best for apps that solve a specific problem for your business or audience.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Events, menus, internal tools, and focused apps</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Works on iPhone and Android (React Native)</span>
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
        </div>
      </section>

      {/* How This Works Section */}
      <section className="how-it-works" style={{ backgroundImage: `url(${sandiegoSunset})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <h2 className="section-title">How This Works</h2>
          <p className="section-subtitle">Same simple process whether you need a fix or want to get found</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>We Talk</h3>
              <p>Tell me what's broken, what you want to get found for, or both. I'll take a look and give you honest feedback. No charge, no pressure.</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Clear Quote</h3>
              <p>I tell you what I'll do, what it costs, and how long it takes. No surprises.</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>I Get to Work</h3>
              <p>You approve, I get started. I keep you updated as I go.</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>You're in Better Shape</h3>
              <p>Site working when it needed fixing, or you're getting found when you wanted visibility. Either way, you're in good hands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mauna Digital Section */}
      <section className="why-choose" style={{ backgroundImage: `url(${sandiegoNorthpark})` }}>
        <div className="section-overlay section-overlay-light"></div>
        <div className="container">
          <h2 className="section-title">Why Choose Mauna Digital?</h2>
          <div className="why-choose-content">
            <div className="why-choose-problem">
              <h3>I'm Not Your Typical Developer</h3>
              <p>Most tech people talk over your head and make you feel bad for asking questions. I'm not that guy. Here's what I do differently:</p>
              <ul className="frustration-list">
                <li>I explain what was wrong and how I fixed it</li>
                <li>I answer every question without judgment</li>
                <li>I stick around after the project is done</li>
                <li>I only recommend what you need</li>
              </ul>
            </div>
            <div className="why-choose-solution">
              <h3>What Working Together Looks Like:</h3>
              <ul className="solution-list">
                <li><strong>San Diego clients:</strong> We grab coffee, look at your site together, and I walk you through everything</li>
                <li><strong>Remote clients:</strong> Video calls with screen sharing - it feels like I'm right there with you</li>
                <li><strong>Everyone:</strong> You get my cell number, not a support ticket system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="tools" style={{ backgroundImage: `url(${sandiegoBay})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <h2 className="section-title">Tools I've Built</h2>
          <p className="tools-subtitle">Side projects that showcase what I can do</p>
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
                <p className="tool-subtitle">AI-powered, SEO-optimized social posts</p>
                <p className="tool-description">Create engaging social media content that ranks. Postachio helps you generate posts with strong keywords, clear structure, and consistent tone, saving you time while improving discoverability.</p>
                <div className="tool-tags">
                  <span className="tool-tag">AI</span>
                  <span className="tool-tag">SEO</span>
                  <span className="tool-tag">Content</span>
                </div>
                <div className="tool-cta">
                  <a href="https://postachio.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Postachio</a>
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
                <p className="tool-description">Display large, customizable text for visual communication across distances. Perfect for when you need to be seen, not heard. Features animated backgrounds, custom colors, multiple fonts, and day/night modes. All completely private and offline.</p>
                <div className="tool-tags">
                  <span className="tool-tag">Mobile</span>
                  <span className="tool-tag">Communication</span>
                  <span className="tool-tag">Privacy</span>
                </div>
                <div className="tool-cta">
                  <a href="https://pocketsay.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download PocketSay</a>
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
                I come from a family of small business owners - my parents, aunts, uncles - so I grew up watching how hard it is to find tech help that doesn't make you feel stupid or charge you an arm and a leg. That's why I do things differently.
              </p>
              <p>
                I spent 7+ years as a software developer managing 30+ high-traffic websites for a company in the Bay Area. I've done a lot of work in Shopify and WordPress, and I work with most major platforms and raw code too: theme customization, custom sections, plugins, updates, bug fixes. I've seen every WordPress disaster, every "why isn't this working?" situation, every frustrated business owner who just wants their site to do what it's supposed to do.
              </p>
              <p>
                I also build mobile apps (PocketSay is live on the App Store with a 4.8★ rating), but here's the truth: most small businesses don't need a fancy app. They just need their website to work and their forms to send emails.
              </p>
              <p>
                I'm based in San Diego and love meeting clients in person, but I also work with folks across the US. No agency overhead. No confusing contracts. Just honest work from someone who gets it.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>7+</h3>
                  <p>Years Dev Experience</p>
                </div>
                <div className="stat">
                  <h3>30+</h3>
                  <p>Websites Managed</p>
                </div>
                <div className="stat">
                  <h3>📍</h3>
                  <p>San Diego Based</p>
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
            <div className="contact-badge">Got a Tech Problem?</div>
            <h2 className="section-title">Let's Talk</h2>
            <p className="contact-description">
              Tell me what's broken, slow, or frustrating you. I'll take a look and let you know 
              exactly what it'll take to fix it. No pressure, no confusing quotes.
            </p>
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
                <h3>Get in Touch</h3>
                <p className="contact-subtitle">Send me your website or tell me what you need — monthly support or a one-off project. I'll give you honest feedback on what's working and what needs attention. No charge, no pressure.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-item-icon">📧</div>
                    <div className="contact-item-content">
                      <h4>Email</h4>
                      <p><a href="mailto:maunadigitalcontact@gmail.com">maunadigitalcontact@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="contact-item contact-item-wide">
                    <div className="contact-item-icon">📍</div>
                    <div className="contact-item-content">
                      <h4>Based in San Diego</h4>
                      <p>Meeting local clients in person: Gaslamp, Little Italy, Pacific Beach, North Park, La Jolla & beyond</p>
                      <p className="contact-item-note">💻 Also working with clients across the US</p>
                      <p className="contact-item-note">☕ First meeting free (in-person or video call)</p>
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
                      <p>Half now, half when done</p>
                    </div>
                  </div>
                </div>
                <div className="contact-cta">
                  <a href="mailto:maunadigitalcontact@gmail.com" className="btn btn-primary contact-btn">
                    Send Me an Email
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

