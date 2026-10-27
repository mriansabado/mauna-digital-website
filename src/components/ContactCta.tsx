import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL } from '../constants/site'

type ContactCtaProps = {
  heading?: string
  subtext?: string
}

export function ContactCta({
  heading = "Let's Talk",
  subtext = "Send me your URL or describe what's going on. I'll tell you what to fix first, what can wait, and what it might cost. First chat is free.",
}: ContactCtaProps) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="contact-badge">Need a Hand?</div>
          <h2 className="section-title">{heading}</h2>
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
              <p className="contact-subtitle">{subtext}</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">📧</div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <p>
                      <a href={EMAIL_HREF}>{EMAIL}</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div className="contact-item-content">
                    <h4>Phone</h4>
                    <p>
                      <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
                    </p>
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
              </div>
              <div className="contact-cta">
                <a href={EMAIL_HREF} className="btn btn-primary contact-btn">
                  Send Me a Quick Email
                </a>
                <a href={PHONE_TEL} className="btn btn-secondary contact-btn">
                  Call or text me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
