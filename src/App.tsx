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
                I've got you covered. <span className="service-pill">Web development</span> <span className="service-pill">Cloud solutions</span> <span className="service-pill">Mobile & desktop design</span> <span className="service-pill">Performance optimization</span>. 
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
                <p className="services-subtitle">Hi, I'm Ian - founder and operator of Mauna Digital LLC. Here's how I can help you succeed online.</p>
              </div>
            </div>
          </div>
          
          <div className="services-section-header">
            <h2 className="services-title">Five Ways I Can Help Your Website</h2>
            <p className="services-description">Clear options for every website need - from quick fixes to custom projects</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card service-card-electric-blue">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🛠️</div>
                </div>
                <div className="service-badge">Quick Fix</div>
              </div>
              <div className="service-content">
                <h3>Quick Fix</h3>
                <div className="service-price">$300</div>
                <p className="service-price-detail">One-time fixes and updates • 3 hours included • 2-3 business days</p>
                <p>Something broken? Need a quick update? I'll fix it fast across WordPress, Shopify, and modern web applications. Quick fixes are handled on a first-come, first-served basis with 2-3 business day turnaround.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>WordPress bug fixes & updates</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Shopify store troubleshooting</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Performance optimization</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Mobile responsiveness fixes</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Security patches & updates</span>
                  </div>
                </div>
                <div className="service-not-included">
                  <h4>What's NOT Included:</h4>
                  <div className="not-included-item">❌ Major redesigns or new feature development</div>
                  <div className="not-included-item">❌ Content creation or copywriting</div>
                  <div className="not-included-item">❌ Logo or graphic design work</div>
                  <div className="not-included-item">❌ Platform migrations (separate project)</div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
              </div>
            </div>
            
            <div className="service-card service-card-neon-green">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🔧</div>
                </div>
                <div className="service-badge">Development</div>
              </div>
              <div className="service-content">
                <h3>New Website</h3>
                <div className="service-price">$2,500</div>
                <p className="service-price-detail">WordPress & Shopify: $2,500 • React/Next.js: $3,500</p>
                <p>Complete website from design to launch. Choose your platform and I'll build a professional site that grows with your business. I can take on 1-2 new website projects per month to ensure quality delivery.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Full website projects (design to launch)</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>WordPress: Custom themes, plugins, optimization</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Shopify: Store setup, customization, integrations</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>React/Next.js: Modern web applications</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Platform migrations & API development</span>
                  </div>
                </div>
                <div className="service-not-included">
                  <h4>What's NOT Included:</h4>
                  <div className="not-included-item">❌ Content creation or copywriting</div>
                  <div className="not-included-item">❌ Logo or graphic design work</div>
                  <div className="not-included-item">❌ Ongoing maintenance (see Monthly Care plans)</div>
                  <div className="not-included-item">❌ Third-party app subscription fees</div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
              </div>
            </div>
            
            <div className="service-card service-card-hot-pink">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🔄</div>
                </div>
                <div className="service-badge">Refresh</div>
              </div>
              <div className="service-content">
                <h3>Website Refresh</h3>
                <div className="service-price">$1,200</div>
                <p className="service-price-detail">Major updates to existing websites • ~10-12 hours • 1-2 weeks</p>
                <p>Your website needs significant updates but not a complete rebuild. Perfect for modernizing existing sites with new features and improvements. I can handle 2-3 refresh projects per month alongside other work.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Design updates & modern styling</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>New features & functionality</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Performance optimization</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Mobile responsiveness improvements</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>SEO improvements & updates</span>
                  </div>
                </div>
                <div className="service-not-included">
                  <h4>What's NOT Included:</h4>
                  <div className="not-included-item">❌ Complete redesign from scratch</div>
                  <div className="not-included-item">❌ Content creation or copywriting</div>
                  <div className="not-included-item">❌ Platform migration (separate project)</div>
                  <div className="not-included-item">❌ E-commerce functionality (see New Website)</div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
              </div>
            </div>
            
            <div className="service-card service-card-neon-green">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🔧</div>
                </div>
                <div className="service-badge">Monthly Care</div>
              </div>
              <div className="service-content">
                <h3>Monthly Website Care</h3>
                <div className="service-price">$375-1,000<span>/month</span></div>
                <p className="service-price-detail">Basic: $375 • Standard: $625 • Premium: $1,000</p>
                <p>Ongoing maintenance and support to keep your website secure, updated, and performing optimally across all platforms. I can commit to 2-3 monthly care clients maximum to ensure quality service.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Basic: 3 hours/month - Essential updates</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Standard: 5 hours/month - Includes minor changes</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Premium: 8 hours/month - Priority support</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Security updates & performance monitoring</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Monthly reports & recommendations</span>
                  </div>
                </div>
                <div className="service-not-included">
                  <h4>What's NOT Included:</h4>
                  <div className="not-included-item">❌ Major redesigns or new feature development</div>
                  <div className="not-included-item">❌ Content creation or copywriting</div>
                  <div className="not-included-item">❌ Unused hours do NOT roll over to next month</div>
                  <div className="not-included-item">❌ Third-party app subscription fees</div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
              </div>
            </div>
            
            <div className="service-card service-card-electric-yellow">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">⚡</div>
                </div>
                <div className="service-badge">Custom</div>
              </div>
              <div className="service-content">
                <h3>Custom Work & Retainers</h3>
                <div className="service-price">$125<span>/hour</span></div>
                <p className="service-price-detail">Complex projects • Retainer packages available</p>
                <p>Need something custom? Complex integrations, ongoing development, or retainer work for larger projects. I can commit to 1-2 major custom projects at a time to ensure quality delivery.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Complex customizations</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>API development & integrations</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Platform migrations</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Retainer packages: 10h ($1,125), 20h ($2,250), 40h ($4,500) - 10% discount</span>
                  </div>
                </div>
                <div className="service-not-included">
                  <h4>What's NOT Included:</h4>
                  <div className="not-included-item">❌ Content creation or copywriting</div>
                  <div className="not-included-item">❌ Logo or graphic design work</div>
                  <div className="not-included-item">❌ Ongoing maintenance (see Monthly Care)</div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
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
                long-term. You're not just getting a website, you're getting a partner who will teach 
                you how to manage your site and be here when you need help.
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
              Have a website that needs fixing? Want something brand new? Just need some help? 
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

