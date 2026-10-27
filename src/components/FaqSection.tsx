import type { FaqItem } from '../seo/pages'

type FaqSectionProps = {
  title?: string
  faqs: FaqItem[]
}

export function FaqSection({ title = 'Questions people ask first', faqs }: FaqSectionProps) {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title" className="section-title">
          {title}
        </h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
