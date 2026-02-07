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
                <span className="service-pill">Website fixes</span> <span className="service-pill">SEO & Google</span> <span className="service-pill">Social media</span> <span className="service-pill">Speed optimization</span>
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
          <p className="services-subtitle">Hi, I'm Ian. I come from a family of small business owners, so I know how frustrating tech problems can be when you're just trying to run your business. Whether your website is slow, your forms are broken, or you're scared to touch anything on your site, I can help. No confusing jargon, no judgment for asking questions. Just honest work from someone who is happy to help.</p>
              </div>
            </div>
          </div>
          
          <div className="services-section-header">
      <h2 className="services-title">Common Problems I Fix</h2>
      <p className="services-description">Real solutions for real business headaches</p>
          </div>
          
          <div className="services-grid">
      <div className="service-card service-card-electric-yellow">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
            <div className="service-icon">🔍</div>
                </div>
          <div className="service-badge">SEO + Social Package</div>
              </div>
              <div className="service-content">
          <h3>Get Found & Stay Visible</h3>
          <p className="service-card-tagline">Show up when people search and when they scroll.</p>
          <div className="service-price-block">
          <div className="service-price">$600<span>/month</span></div>
          <p className="service-price-detail">5 hrs included • Month-to-month</p>
          </div>
          <p>I help you get found on Google, Yelp, and Facebook and stay visible on social. I keep your listings and website current with your photos, work on local SEO so you climb in search, create social posts when you send content, and send you a quick monthly report. 5 hrs of help included so you're never on your own.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Google, Yelp & Facebook: optimized with your photos</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Website & listings: kept current, SEO-friendly</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Monthly local SEO so you climb in search</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Social posts when you send content; GBP posts for your Google listing</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Monthly report on what we did; 5 hrs help for content, updates, questions</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Found</a>
              </div>
            </div>
            
            <div className="service-card service-card-purple">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🛒</div>
                </div>
                <div className="service-badge">Shopify, WordPress & Fixes</div>
              </div>
              <div className="service-content">
                <h3>"I'm Stuck with My Shopify or WordPress Site"</h3>
                <div className="service-price-block">
                  <div className="service-price">$500–$1,200</div>
                  <p className="service-price-detail">One-time • Fixes + training</p>
                </div>
                <p>Stuck on Shopify or WordPress? I work with most platforms and raw code. I'll fix what's broken (speed, store, or site) and show you how to run it yourself. Monthly support available if you want it.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Shopify: store, products, shipping, checkout</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>WordPress: plugins, updates, content</span>
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
          <h3>"My Nephew Built This in 2018..."</h3>
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
                I spent 7+ years as a software developer managing 30+ high-traffic websites for a company in the Bay Area. I've seen every WordPress disaster, every "why isn't this working?" situation, every frustrated business owner who just wants their site to do what it's supposed to do.
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
                <p className="contact-subtitle">Send me your website or tell me what you want to get found for, and I'll give you honest feedback on what's working and what needs attention. No charge, no pressure.</p>
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

