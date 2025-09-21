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
            <a href="#pricing">Pricing</a>
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
                  
                  <div className="main-chart">
                    <div className="chart-title">Website Speed Improvement</div>
                    <div className="speed-chart">
                      <div className="chart-line">
                        <div className="line-point" style={{left: '10%', bottom: '20%'}}></div>
                        <div className="line-point" style={{left: '30%', bottom: '35%'}}></div>
                        <div className="line-point" style={{left: '50%', bottom: '60%'}}></div>
                        <div className="line-point" style={{left: '70%', bottom: '80%'}}></div>
                        <div className="line-point active" style={{left: '90%', bottom: '95%'}}></div>
                        <svg className="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M10,80 Q30,65 50,40 T90,5" stroke="url(#gradient)" strokeWidth="2" fill="none" className="chart-path"/>
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#e53e3e"/>
                              <stop offset="100%" stopColor="#38b2ac"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="chart-labels">
                        <span>Before</span>
                        <span>After</span>
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
                <h2 className="section-title">What I Do</h2>
                <p className="services-subtitle">Hi, I'm Ian - founder and operator of Mauna Digital LLC. Here's how I can help you succeed online.</p>
              </div>
            </div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-header">
                <div className="service-icon">🛠️</div>
                <div className="service-number">01</div>
              </div>
              <h3>Fix Your Website</h3>
              <p>One-time fixes for your current site. I'll make it faster, mobile-friendly, and working perfectly on all devices.</p>
              <div className="service-features">
                <span className="feature-tag">Performance Optimization</span>
                <span className="feature-tag">Mobile & Desktop Fixes</span>
                <span className="feature-tag">Bug Fixes</span>
                <span className="feature-tag">Security Updates</span>
              </div>
            </div>
            <div className="service-card featured">
              <div className="service-card-header">
                <div className="service-icon">🏗️</div>
                <div className="service-number">02</div>
              </div>
              <h3>Build New Website</h3>
              <p>Brand new professional website with cloud hosting, mobile & desktop optimization, and performance monitoring.</p>
              <div className="service-features">
                <span className="feature-tag">Cloud Solutions</span>
                <span className="feature-tag">Mobile & Desktop Design</span>
                <span className="feature-tag">Performance Optimization</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                <div className="service-icon">🔧</div>
                <div className="service-number">03</div>
              </div>
              <h3>Monthly Website Care</h3>
              <p>Ongoing maintenance to keep your site updated, secure, and running smoothly. Perfect for established websites.</p>
              <div className="service-features">
                <span className="feature-tag">Regular Security Updates</span>
                <span className="feature-tag">Performance Monitoring</span>
                <span className="feature-tag">Content Updates</span>
                <span className="feature-tag">Email Support</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-header">
                <div className="service-icon">⚡</div>
                <div className="service-number">04</div>
              </div>
              <h3>Custom Work</h3>
              <p>Advanced projects: Shopify stores, WordPress customization, complex cloud solutions, and full-stack applications</p>
              <div className="service-features">
                <span className="feature-tag">Shopify</span>
                <span className="feature-tag">WordPress</span>
                <span className="feature-tag">Cloud Solutions</span>
                <span className="feature-tag">Hourly Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Simple Pricing</h2>
          <p className="pricing-subtitle">Three services. Fair prices. No confusion.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Fix Your Website</h3>
                <div className="price">$500</div>
                <p className="price-detail">One-time fixes (6-8 hours)</p>
              </div>
              <ul className="pricing-features">
                <li>✅ Fix problems with your current website</li>
                <li>✅ Make it faster and mobile-friendly</li>
                <li>✅ Security updates and bug fixes</li>
                <li>✅ Done in 3-5 days</li>
                <li>❌ No ongoing maintenance included</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Get Started</a>
            </div>
            
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="pricing-header">
                <h3>Build New Website</h3>
                <div className="price">$1,000</div>
                <p className="price-detail">12-15 hours of work</p>
              </div>
              <ul className="pricing-features">
                <li>✅ Brand new professional website</li>
                <li>✅ Works on phones and computers</li>
                <li>✅ Ready in 1-2 weeks</li>
                <li>✅ Cloud hosting setup and configuration</li>
                <li>✅ Mobile and desktop responsive design</li>
                <li>✅ Performance optimization and speed testing</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Get Started</a>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Monthly Website Care</h3>
                <div className="price">$400<span>/month</span></div>
                <p className="price-detail">Ongoing maintenance (5 hours/month)</p>
              </div>
              <ul className="pricing-features">
                <li>✅ Keep your website updated and secure (1 hour)</li>
                <li>✅ Fix small problems when they happen (up to 2 hours)</li>
                <li>✅ Monthly website performance report (1 hour)</li>
                <li>✅ Add new content and photos as needed (up to 1 hour)</li>
                <li>✅ Monitor your Google search rankings</li>
                <li>✅ Email support and monthly check-ins</li>
                <li>❌ Major redesigns not included</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Get Started</a>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Custom Work</h3>
                <div className="price">$65<span>/hour</span></div>
                <p className="price-detail">Advanced projects</p>
              </div>
              <ul className="pricing-features">
                <li>✅ Shopify stores and e-commerce</li>
                <li>✅ WordPress customization</li>
                <li>✅ Complex cloud solutions</li>
                <li>✅ Full-stack applications</li>
                <li>✅ Custom integrations</li>
                <li>✅ Project estimates provided upfront</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Get Started</a>
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
                I love solving problems and creating solutions. Whether you need a quick fix, a brand 
                new site, or ongoing support, I bring that same problem-solving passion to every project. 
                No hidden fees, no confusing contracts - just honest work at fair prices.
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
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-card-header">
                  <div className="contact-icon">💬</div>
                  <h3>Get in Touch</h3>
                </div>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-item-icon">📧</div>
                    <div className="contact-item-content">
                      <h4>Email</h4>
                      <p>maunadigitalcontact@gmail.com</p>
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
              </div>
            </div>
            
            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send me a message</h3>
                <p>Tell me about your project and I'll get back to you within 24 hours</p>
              </div>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">What do you need help with?</label>
                  <select id="service" required>
                    <option value="">Choose a service...</option>
                    <option value="fix">Fix my current website ($500)</option>
                    <option value="build">Build a new website ($1,000)</option>
                    <option value="monthly">Monthly website care ($400/month)</option>
                    <option value="custom">Custom work ($65/hour)</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea 
                    id="message" 
                    placeholder="Tell me about your project, goals, timeline, or any specific requirements..." 
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-large">
                  <span>Send Message</span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Mauna Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
