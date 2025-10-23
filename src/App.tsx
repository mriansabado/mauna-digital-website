import './App.css'
import logo from './assets/mauna-logo-transparent.png'
import mountains from './assets/mauna-only2.png'
import logoText from './assets/mauna-digital-text.png'
import profilePhoto from './assets/profile-photo2.png'

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
                I've got you covered. <span className="service-pill">Web development</span> <span className="service-pill">SEO optimization</span> <span className="service-pill">Mobile & desktop design</span> <span className="service-pill">Performance optimization</span>. 
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
                  
                  <div className="performance-visualization">
                    <div className="chart-title">Website Performance Optimization</div>
                    <div className="chart-title">Page Loading Speeds</div>
                    <div className="animated-metrics">
                      <div className="metric-comparison">
                        <div className="metric-before">
                          <div className="metric-label">Before</div>
                          <div className="metric-value slow">8.2s</div>
                          <div className="progress-ring slow">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                              <path className="circle slow" strokeDasharray="20, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            </svg>
                          </div>
                        </div>
                        <div className="optimization-arrow">
                          <div className="arrow-line"></div>
                          <div className="arrow-head">→</div>
                          <div className="optimization-text">Optimized</div>
                        </div>
                        <div className="metric-after">
                          <div className="metric-label">After</div>
                          <div className="metric-value fast">2.1s</div>
                          <div className="progress-ring fast">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                              <path className="circle fast" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="improvement-stats">
                        <div className="stat-item">
                          <div className="stat-number">74%</div>
                          <div className="stat-label">Faster</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">6.1s</div>
                          <div className="stat-label">Saved</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">A+</div>
                          <div className="stat-label">Grade</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="metrics-row">
                    <div className="metric-card">
                      <div className="metric-icon">⚡</div>
                      <div className="metric-content">
                        <div className="metric-value">2.1s</div>
                        <div className="metric-label">Load Time</div>
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-icon">🛡️</div>
                      <div className="metric-content">
                        <div className="metric-value">A+</div>
                        <div className="metric-label">Security</div>
                      </div>
                    </div>
                  </div>

                  <div className="progress-section">
                    <div className="progress-item">
                      <div className="progress-header">
                        <span>Uptime</span>
                        <span>99.9%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: '99.9%'}}></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <div className="progress-header">
                        <span>Performance</span>
                        <span>95%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: '95%'}}></div>
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
          <h3>Something's Not Working?</h3>
          <div className="service-price">$300</div>
          <p className="service-price-detail">I'll fix it in 2-3 days</p>
          <p>Your website is acting up? I'll figure out what's wrong and fix it. No mystery, no surprises - just a working website again.</p>
          <div className="service-features">
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>All major website platforms and custom websites</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Mobile phone problems</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Slow loading pages</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Broken links, forms, or images</span>
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
              <span>Online store setup (if you need to sell products)</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Google Analytics and SEO optimization</span>
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
      
      <div className="service-card service-card-hot-pink">
        <div className="service-card-header">
          <div className="service-icon-wrapper">
            <div className="service-icon">✨</div>
          </div>
          <div className="service-badge">Make It Better</div>
        </div>
        <div className="service-content">
          <h3>Update Your Current Site?</h3>
          <div className="service-price">$900</div>
          <p className="service-price-detail">Better design in 1-2 weeks</p>
          <p>Your website works but looks outdated? I'll give it a fresh look and make it work better. Keep what works, improve what doesn't.</p>
          <div className="service-features">
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Modern, professional look</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Faster loading pages</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Better mobile experience</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>SEO improvements to get found on Google</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Google Analytics setup and tracking</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Keep your existing content</span>
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
      
      <div className="service-card service-card-purple">
        <div className="service-card-header">
          <div className="service-icon-wrapper">
            <div className="service-icon">🚀</div>
          </div>
          <div className="service-badge">Custom</div>
        </div>
        <div className="service-content">
          <h3>Need Something Custom?</h3>
          <div className="service-price">Quote Based</div>
          <p className="service-price-detail">Custom web apps, mobile apps, complex integrations</p>
          <p>Need something more complex? Custom web applications, mobile apps, or integrations? Let's talk about your specific needs and I'll give you a fair quote.</p>
          <div className="service-features">
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Custom web applications</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Mobile phone apps</span>
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
          <a href="#contact" className="btn btn-primary service-btn">Get Quote</a>
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
                      <p>Available Worldwide</p>
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

