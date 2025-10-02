import './App.css'
import { useState } from 'react'
import logo from './assets/mauna-logo-transparent.png'
import mountains from './assets/mauna-only2.png'
import logoText from './assets/mauna-digital-text.png'
import profilePhoto from './assets/profile-photo2.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h2 className="services-title">Services I Offer</h2>
            <p className="services-description">Four clear ways I can help you succeed online</p>
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
                <h3>Website Quick Fix</h3>
                <div className="service-price">$250</div>
                <p className="service-price-detail">Fix common problems (2-3 business days) • Includes ~3 hours</p>
                <p>One-time fixes for your current site. I'll make it faster, mobile-friendly, and working perfectly on all devices.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Fix broken contact forms</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Mobile & desktop fixes</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Bug fixes & security updates</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Simple content updates</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
              </div>
            </div>
            
            <div className="service-card service-card-neon-green">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🔧</div>
                </div>
                <div className="service-badge">Ongoing</div>
              </div>
              <div className="service-content">
                <h3>Monthly Website Care</h3>
                <div className="service-price">$400<span>/month</span></div>
                <p className="service-price-detail">Includes 5 hours/month • Keep your site secure and updated</p>
                <p>Ongoing maintenance to keep your site updated, secure, and running smoothly. Perfect for established websites.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Monthly security updates</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Performance monitoring</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Content updates & support</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Monthly check-in calls</span>
                  </div>
                </div>
                <a href="#contact" className="btn btn-primary service-btn">Get Started</a>
              </div>
            </div>
            
            <div className="service-card service-card-hot-pink featured">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className="service-icon">🏗️</div>
                </div>
                <div className="service-badge">Most Popular</div>
              </div>
              <div className="service-content">
                <h3>Build New Website</h3>
                <div className="service-price">$1,500</div>
                <p className="service-price-detail">Professional website (2-3 weeks) • Includes ~18 hours</p>
                <p>Brand new professional website with cloud hosting, mobile & desktop optimization, and performance monitoring.</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Up to 5 pages included</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Cloud hosting setup</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>SEO & Analytics setup</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>1 round of revisions</span>
                  </div>
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
                <h3>Custom Projects</h3>
                <div className="service-price">$85<span>/hour</span></div>
                <p className="service-price-detail">Advanced web development • Flexible monthly commitment</p>
                <p>Advanced projects: Shopify stores, WordPress customization, complex cloud solutions, and full-stack applications</p>
                <div className="service-features">
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>Shopify & WordPress</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>E-commerce development</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>AWS cloud solutions</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-dot"></div>
                    <span>API development</span>
                  </div>
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
              <form className="contact-form" onSubmit={handleSubmit}>
                {submitStatus === 'success' && (
                  <div className="form-message success">
                    ✅ Thank you for your message! I'll get back to you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-message error">
                    ❌ Something went wrong. Please try again or email me directly at maunadigitalcontact@gmail.com
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">What do you need help with?</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose a service...</option>
                    <option value="quick-fix">Website Quick Fix ($250)</option>
                    <option value="build">Build New Website ($1,500)</option>
                    <option value="monthly">Monthly Website Care ($400/month)</option>
                    <option value="custom">Custom Projects ($85/hour)</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, goals, timeline, or any specific requirements..." 
                    rows={4}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <span className="btn-icon">{isSubmitting ? '⏳' : '→'}</span>
                </button>
              </form>
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

