import './App.css'
import logo from './assets/mauna-logo-transparent.png'
import mountains from './assets/mauna-only2.png'
import logoText from './assets/mauna-digital-text.png'
import profilePhoto from './assets/profile-photo2.png'
import postachioImage from './assets/postachio-project.png'
import pocketsayLogo from './assets/pocketsay-logo.png'
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
                Slow website? Broken contact forms? Can't update your own site? 
                I help small businesses solve tech headaches without the agency price tag.
                <span className="service-pill">Website fixes</span> <span className="service-pill">Mobile apps</span> <span className="service-pill">Local SEO</span> <span className="service-pill">Speed optimization</span>
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
            <div className="service-card service-card-electric-blue">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🐌</div>
                </div>
          <div className="service-badge">Speed & Fixes</div>
              </div>
              <div className="service-content">
          <h3>"My Website is Painfully Slow"</h3>
                <div className="service-price">$400-$1,000</div>
          <p className="service-price-detail">2-3 days turnaround</p>
          <p>Your site takes forever to load. Customers leave. Google penalizes you. I'll figure out what's slowing you down and fix it: image compression, caching, hosting issues, bloated plugins.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Make it faster (get load times under 3 seconds)</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Fix broken contact forms, links, and images</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Mobile responsiveness fixes</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Free diagnostic report included</span>
                  </div>
                </div>
          <a href="#contact" className="btn btn-primary service-btn">Fix My Site</a>
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
          <div className="service-price">$2,500-$4,000</div>
          <p className="service-price-detail">2-3 weeks • You'll actually be able to update it yourself</p>
          <p>Custom site you can't update? WordPress with 47 plugins? Scared to touch anything? I'll rebuild it with something you can actually manage, and train you how to update your own hours, add photos, and change text without calling me.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Modern, professional design that works on all devices</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Built on a platform you can actually manage (Shopify/Wix/WordPress done right)</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>SEO setup so Google can find you</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Training session so you're not stuck</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Contact forms, email integration, the works</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Rebuild My Site</a>
              </div>
            </div>
            
      <div className="service-card service-card-electric-yellow">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
            <div className="service-icon">🔍</div>
                </div>
          <div className="service-badge">SEO & Support</div>
              </div>
              <div className="service-content">
          <h3>"Nobody Can Find Me on Google"</h3>
          <div className="service-price">$750<span>/month</span></div>
          <p className="service-price-detail">Starting at $750/month | Ongoing SEO + 5 hours of help each month</p>
          <p>Customers search for what you do and you don't show up. Your Google Business Profile is a mess (or doesn't exist). I'll fix your local SEO, keep your site updated, and be there when you need help.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Google Business Profile setup & optimization</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Monthly SEO improvements to climb rankings</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Help adding products, pages, or content</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Answer your "how do I..." questions</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>You're never stuck. I'm just a message away</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Found</a>
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
                <div className="service-price">Starting at $12,000</div>
                <p className="service-price-detail">4-6 weeks • Works on iPhone and Android</p>
                <p>Got an idea for a mobile app? I build them using React Native, so one codebase works on both iPhone and Android. Pricing depends on complexity, so let's chat about what you're thinking.</p>
                <div className="service-features">
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
                    <span>30 days of post-launch support</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Recent work: PocketSay (live on App Store, 4.8★)</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Tell Me Your Idea</a>
              </div>
            </div>
            
      <div className="service-card service-card-purple service-card-horizontal">
              <div className="service-content">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
              <div className="service-icon">🛒</div>
                  </div>
                </div>
            <h3>"I'm Stuck with My Shopify/Wix Site"</h3>
            <div className="service-price">$600-$1,200</div>
            <p className="service-price-detail">Fixes + training so you're never stuck again</p>
            <p>Products uploaded wrong? Shipping broken? Can't figure out how to edit sections? I'll clean up your store, fix what's broken, and walk you through how to manage it yourself. Optional monthly support available.</p>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                <span>Store cleanup and proper setup</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                <span>Fix products, shipping, and checkout issues</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                <span>Training session so you can manage it yourself</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                <span>Monthly help available if you want ongoing support</span>
                    </div>
                  </div>
              </div>
              <div className="service-cta">
            <a href="#contact" className="btn btn-primary service-btn">Get Unstuck</a>
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
          <p className="section-subtitle">No mystery, no runaround. Just a simple process</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>Free Website Check</h3>
              <p>Send me your URL. I'll spend 15 minutes looking at it and tell you what's working, what's broken, and what you should fix first. No charge, no pressure - just honest feedback.</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Clear Quote</h3>
              <p>I tell you exactly what's wrong, what it costs to fix, and how long it takes. No surprises.</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>I Fix It</h3>
              <p>You approve, I get to work. I send updates as I go. You're never in the dark.</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>You're Back in Business</h3>
              <p>Your site works. Your forms work. You can update things yourself. Problem solved.</p>
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
                <li>I only recommend what you actually need</li>
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
                <h3 className="tool-title">Postachio</h3>
                <p className="tool-subtitle">AI-powered, SEO-optimized social posts</p>
                <p className="tool-description">Create engaging social media content that ranks. Postachio helps you generate posts with strong keywords, clear structure, and consistent tone—saving you time while improving discoverability.</p>
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
                <img src={pocketsayLogo} alt="PocketSay App logo" className="tool-image" />
              </div>
              <div className="tool-content">
                <div className="tool-badge">Mobile App</div>
                <h3 className="tool-title">PocketSay</h3>
                <p className="tool-subtitle">Say it BIG when you can't say it loud</p>
                <p className="tool-description">Display large, customizable text for visual communication across distances. Perfect for when you need to be seen, not heard. Features animated backgrounds, custom colors, multiple fonts, and day/night modes—all completely private and offline.</p>
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
                I also build mobile apps (PocketSay is live on the App Store with a 4.8★ rating), but here's the truth: most small businesses don't need a fancy app. They just need their website to work and their forms to actually send emails.
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
                <p className="contact-subtitle">Send me your website and I'll give you honest feedback on what's working and what needs attention. No charge, no pressure.</p>
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

