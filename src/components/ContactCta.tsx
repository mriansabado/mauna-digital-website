import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_TEL } from '../constants/site'
import { ContactForm } from './ContactForm'

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
          <div className="contact-badge">Ready to get started?</div>
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

              <ContactForm />

              <p className="contact-alt">
                Prefer to reach out directly?{' '}
                <a href={EMAIL_HREF}>{EMAIL}</a>
                {' · '}
                <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
