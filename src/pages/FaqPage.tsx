import { Breadcrumbs } from '../components/Breadcrumbs'
import { ContactCta } from '../components/ContactCta'
import { FaqSection } from '../components/FaqSection'
import { RelatedLinks } from '../components/RelatedLinks'
import { PageMeta } from '../seo/PageMeta'
import { homeFaqs } from '../seo/faqs'

export function FaqPage() {
  return (
    <>
      <PageMeta path="/faq" faqs={homeFaqs} />
      <main className="seo-page">
        <section className="seo-hero">
          <div className="container">
            <Breadcrumbs items={[{ name: 'FAQ', path: '/faq' }]} />
            <p className="seo-kicker">San Diego · Straight answers</p>
            <h1>Frequently asked questions</h1>
            <p className="seo-lead">
              Pricing, platforms, fixes, hosting, and how we work together. Plain English, no pitch deck.
            </p>
          </div>
        </section>

        <FaqSection title="Questions people ask first" faqs={homeFaqs} />

        <RelatedLinks
          links={[
            {
              to: '/pricing',
              label: 'Website pricing',
              description: 'Single Page $600 · Full Website $1,200 flat.',
            },
            {
              to: '/website-fixes',
              label: 'Website fixes',
              description: 'Broken form, mobile mess, or site down? $85/hr Quick Fix.',
            },
            {
              to: '/work',
              label: 'Work',
              description: 'Client websites, concept sites, and apps I\'ve built.',
            },
          ]}
        />

        <ContactCta
          heading="Still have a question?"
          subtext="Send a note or your site URL. First chat is free — happy to talk it through."
        />
      </main>
    </>
  )
}
