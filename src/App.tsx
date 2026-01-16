import './App.css'
import logo from './assets/mauna-logo-transparent.png'
import mountains from './assets/mauna-only2.png'
import logoText from './assets/mauna-digital-text.png'
import profilePhoto from './assets/profile-photo2.png'
import postachioImage from './assets/postachio-project.png'
import pocketsayLogo from './assets/pocketsay-logo.png'

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
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-logo">
                <img src={logo} alt="Mauna Digital" className="logo-image" />
              </div>
              <h1 className="hero-title">
                Need help with your website?
                <br />
                <span className="hero-subtitle">I'm here to help.</span>
              </h1>
              <p className="hero-description">
                Whether your site needs fixing, updating, or you're ready for something new - 
                I've got you covered. <span className="service-pill">Web development</span> <span className="service-pill">Get Found on Google</span> <span className="service-pill">Mobile & desktop design</span> <span className="service-pill">Performance optimization</span>. 
                Let's scale the mountain of digital success together. Fair prices, honest work, and friendly service.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Get Started</a>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-visual">
                <div className="stats-card">
                  <div className="stat-item">
                    <div className="stat-number">7+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">30+</div>
                    <div className="stat-label">Websites Managed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Honest Approach</div>
                  </div>
                </div>
                <div className="dashboard">
                  <div className="dashboard-header">
                    <div className="dashboard-title">Performance Dashboard</div>
                    <div className="status-indicator">
                      <div className="status-dot"></div>
                      <span>Live</span>
                    </div>
                  </div>
                  
                  <div className="comprehensive-visualization">
                    <div className="chart-title">Complete Digital Excellence</div>
                    <div className="chart-title">Responsive • Fast • Found on Google</div>
                    <div className="showcase-container">
                      <div className="showcase-grid">
                        <div className="showcase-item responsive-showcase">
                          <div className="showcase-header">
                            <div className="showcase-icon">📱</div>
                            <div className="showcase-title">Responsive Design</div>
                          </div>
                          <div className="device-stack">
                            <div className="device-3d desktop-3d">
                              <div className="device-screen-3d">
                                <div className="website-preview-3d">
                                  <div className="preview-header-3d"></div>
                                  <div className="preview-content-3d">
                                    <div className="preview-line-3d"></div>
                                    <div className="preview-line-3d short"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="device-3d mobile-3d">
                              <div className="device-screen-3d">
                                <div className="website-preview-3d">
                                  <div className="preview-header-3d"></div>
                                  <div className="preview-content-3d">
                                    <div className="preview-line-3d"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="showcase-stats">
                            <div className="stat-3d">100%</div>
                            <div className="stat-label-3d">Responsive</div>
                          </div>
                        </div>

                        <div className="showcase-item performance-showcase">
                          <div className="showcase-header">
                            <div className="showcase-icon">⚡</div>
                            <div className="showcase-title">Lightning Fast</div>
                          </div>
                          <div className="speed-visualization">
                            <div className="loading-bars">
                              <div className="loading-bar slow-bar">
                                <div className="bar-fill slow-fill"></div>
                                <div className="bar-label">8.2s</div>
                              </div>
                              <div className="loading-bar fast-bar">
                                <div className="bar-fill fast-fill"></div>
                                <div className="bar-label">2.1s</div>
                              </div>
                            </div>
                            <div className="speed-improvement">
                              <div className="improvement-arrow">↓</div>
                              <div className="improvement-text">74% Faster</div>
                            </div>
                        </div>
                          <div className="showcase-stats">
                            <div className="stat-3d">2.1s</div>
                            <div className="stat-label-3d">Load Time</div>
                          </div>
                        </div>

                        <div className="showcase-item seo-showcase">
                          <div className="showcase-header">
                            <div className="showcase-icon">🔍</div>
                            <div className="showcase-title">SEO Optimized</div>
                          </div>
                          <div className="search-visualization">
                            <div className="search-result-3d position-1">
                              <div className="result-title-3d">Your Business</div>
                              <div className="result-url-3d">yourbusiness.com</div>
                              <div className="result-description-3d">Top Results</div>
                      </div>
                            <div className="google-icon">G</div>
                        </div>
                          <div className="showcase-stats">
                            <div className="stat-3d">Google</div>
                            <div className="stat-label-3d">Ready</div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
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
          <p className="services-subtitle">Hi, I'm Ian. I help small businesses get online and sell their stuff. No tech jargon, no surprises - just honest work at fair prices.</p>
              </div>
            </div>
          </div>
          
          <div className="services-section-header">
      <h2 className="services-title">How I Can Help You</h2>
      <p className="services-description">Simple options for getting your business online</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card service-card-electric-blue">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🛠️</div>
                </div>
          <div className="service-badge">Quick Help</div>
              </div>
              <div className="service-content">
          <h3>Quick Fixes & Website Check</h3>
                <div className="service-price">$300</div>
          <p className="service-price-detail">Quick fixes in 2-3 days + free diagnostic report</p>
          <p>Need a quick fix? I'll solve your immediate problem AND give you a free diagnostic report showing opportunities to improve your website's performance and visibility.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Quick fixes: broken links, forms, images, mobile issues</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Speed improvements and basic optimizations</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Free diagnostic report with improvement opportunities</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>No major redesigns or complex changes</span>
                  </div>
                </div>
          <a href="#contact" className="btn btn-primary service-btn">Get Help</a>
              </div>
            </div>
            
            <div className="service-card service-card-neon-green">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
            <div className="service-icon">🏗️</div>
                </div>
          <div className="service-badge">New Website</div>
              </div>
              <div className="service-content">
          <h3>Need a New Website?</h3>
          <div className="service-price">$1,800</div>
          <p className="service-price-detail">Complete website in 2-3 weeks • Domain not included</p>
          <p>Starting from scratch? I'll build you a professional website that works for your business. I'll listen to what you need and choose the best way to build it for you. All the technical stuff is handled so you can focus on what you do best.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>I'll choose the best way to build your site</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Complete setup from domain to launch</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Professional design optimized for desktop and mobile</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Get found on Google with SEO optimization</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Online store setup (if you need to sell products)</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Contact forms and email integration</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Self-hosting options available at a reduced price for simple sites</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
              </div>
            </div>
            
      <div className="service-card service-card-electric-yellow">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
            <div className="service-icon">🤝</div>
                </div>
          <div className="service-badge">Ongoing Help</div>
              </div>
              <div className="service-content">
          <h3>Need Ongoing Support?</h3>
          <div className="service-price">$400<span>/month</span></div>
          <p className="service-price-detail">5 hours of help each month</p>
          <p>Want someone to help you manage your website and get found on Google? I'll answer your questions, make updates, help you add new content, and work on improving your search rankings. Like having a website assistant who also handles your SEO.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Monthly SEO improvements to get found on Google</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Help you add products or pages</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Answer your "how do I..." questions</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Make small changes and tweaks</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
              <span>Monthly check-ins and advice</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
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
                <h3>Need a Mobile App?</h3>
                <div className="service-price">$5,000</div>
                <p className="service-price-detail">Simple mobile app for iOS and Android • 4-6 weeks</p>
                <p>Want an app for your business? I'll build you a simple mobile app that works on both iPhone and Android. One app, two platforms, easy to use.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Works on iPhone and Android</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Simple, easy-to-use design</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>App Store and Google Play setup</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Basic features and functionality</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
              </div>
            </div>
            
      <div className="service-card service-card-purple service-card-horizontal">
              <div className="service-content">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
              <div className="service-icon">🚀</div>
                  </div>
                </div>
            <h3>Need Something Custom?</h3>
            <div className="service-price">Quote Based</div>
            <p className="service-price-detail">Complex mobile apps, custom web apps, complex integrations</p>
            <p>Need something more complex? Bigger mobile apps with lots of features, custom web applications, or complex integrations? Let's talk about your specific needs and I'll give you a fair quote.</p>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                <span>Complex mobile apps with advanced features</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                <span>Custom web applications</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                <span>Complex integrations</span>
                    </div>
                    <div className="feature-item">
                      <div className="feature-dot"></div>
                <span>Tailored solutions for your business</span>
                    </div>
                  </div>
              </div>
              <div className="service-cta">
            <a href="#contact" className="btn btn-primary service-btn">Get Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      {/* Tools Section */}
      <section id="tools" className="tools">
        <div className="container">
          <h2 className="section-title">Tools to Help Your Business</h2>
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
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Why Choose Mauna Digital?</h2>
              <p>
                With over 7 years of web development experience, I've built everything from simple 
                business sites to complex applications. I've worked as a software developer managing 
                30+ websites with hundreds of pages, so I know how to handle projects of any size.
              </p>
              <p>
                I start every project by listening to your goals and challenges. Complex problems don't 
                always need complex solutions - I focus on what actually works and what you can maintain 
                long-term. You're not just getting a website, you're getting a partner who will help you 
                get found on Google and be here when you need help.
              </p>
              <p>
                No hidden fees, no confusing contracts, no endless revisions. Just honest work at fair 
                prices with clear timelines and regular updates every step of the way.
              </p>
              <p>
                I focus on sustainable pricing that reflects the true value of professional web development - 
                because quality work deserves fair compensation.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>7+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>30+</h3>
                  <p>Websites Managed</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Problem Solver</p>
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
            <div className="contact-badge">Let's Work Together</div>
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="contact-description">
              Have a website that needs fixing? Want something brand new? Need help getting found on Google? 
              Let's chat! I promise to keep it simple and honest.
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-card contact-card-gradient">
              <div className="contact-card-header">
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">💬</div>
                </div>
                <div className="contact-badge">Let's Connect</div>
              </div>
              <div className="contact-content-main">
                <h3>Get in Touch</h3>
                <p className="contact-subtitle">Ready to work together? I'm here to help with your website needs.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-item-icon">📧</div>
                    <div className="contact-item-content">
                      <h4>Email</h4>
                      <p><a href="mailto:maunadigitalcontact@gmail.com">maunadigitalcontact@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">🌍</div>
                    <div className="contact-item-content">
                      <h4>Location</h4>
                      <p>United States</p>
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
          <p>&copy; 2025 Mauna Digital LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

