import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ContactCta } from '../components/ContactCta'
import { FaqSection } from '../components/FaqSection'
import { RelatedLinks } from '../components/RelatedLinks'
import { PageMeta } from '../seo/PageMeta'
import { platformHelpFaqs } from '../seo/faqs'

export function PlatformHelpPage() {
  return (
    <>
      <PageMeta path="/platform-help" faqs={platformHelpFaqs} />
      <main className="seo-page">
        <section className="seo-hero">
          <div className="container">
            <Breadcrumbs items={[{ name: 'Platform Help', path: '/platform-help' }]} />
            <p className="seo-kicker">San Diego · Wix · Squarespace · Shopify · WordPress</p>
            <h1>Wix, Squarespace, Shopify and WordPress help in San Diego</h1>
            <p className="seo-lead">
              Stuck in a website builder? I help San Diego small businesses with Wix help, Squarespace help, Shopify fixes, and WordPress repair, without the jargon.
            </p>
          </div>
        </section>

        <article className="seo-content container">
          <p>
            Most local businesses don&apos;t need a custom-coded empire. They need a site that works on the platform they already pay for. I&apos;m a website designer and web developer in San Diego who lives in these tools: for new builds and for the &quot;why did this break?&quot; days.
          </p>
          <p>
            Platform help is usually a <Link to="/website-fixes">Quick Fix at $85/hr</Link> (1 hour minimum, same-day quote). If we decide a rebuild is smarter, I use the same{' '}
            <Link to="/pricing">affordable flat prices</Link>: Single Page $600, Full Website $1,200.
          </p>

          <h2>Wix help</h2>
          <p>
            Wix is friendly until the editor fights you: sections that won&apos;t align on mobile, apps that conflict, forms that never arrive, or a site that looks fine on desktop and broken in your pocket. Common Wix help includes layout cleanups, mobile fixes, domain connection, contact forms, basic SEO settings, and removing leftover demo content.
          </p>
          <p>
            I also help when you inherited a Wix site and can&apos;t find where anything lives. We get you oriented, fix what&apos;s urgent, and leave you with a site you can edit.
          </p>
          <p>
            <strong>When rebuilding on Wix makes sense:</strong> the current site is a pile of patched sections, or you want a clean Single Page / Full Website without starting from a messy template.
          </p>

          <h2>Squarespace help</h2>
          <p>
            Squarespace sites look polished, but custom code blocks, old templates, and commerce settings can get fragile. People usually call me for mobile spacing issues, broken buttons, scheduling or membership quirks, domain and email setup, and content updates they don&apos;t want to fight the fluid engine for.
          </p>
          <p>
            If a template update scrambled your layout, I sort what can be restored vs. what needs a careful rebuild of a few key pages, without rewriting your whole brand overnight.
          </p>
          <p>
            <strong>When to rebuild:</strong> you&apos;re on a very old template, or every edit risks breaking the homepage. A fresh Full Website at $1,200 is often calmer than endless hourly patches.
          </p>

          <h2>Shopify help</h2>
          <p>
            Shopify is built for selling. The headaches show up in themes, checkout apps, product pages that don&apos;t convert, and &quot;simple&quot; design changes that touch Liquid code. I help with theme tweaks, homepage and product page polish, navigation cleanups, basic speed/image issues, and making the store feel like your business instead of a default theme.
          </p>
          <p>
            You pay Shopify directly (plans from $39/mo). I never mark that up. If an app costs money, I tell you before we install it.
          </p>
          <p>
            <strong>When to rebuild:</strong> your theme is so customized that updates are scary, or you want a cleaner storefront without Frankenstein apps. We can rebuild on Shopify as a Full Website project when that fits.
          </p>

          <h2>WordPress help</h2>
          <p>
            WordPress is powerful and, honestly, where a lot of &quot;fix my website&quot; emergencies live: plugin conflicts, failed updates, hacked sites, slow page builders, and login chaos. I help with updates done safely, form and cache plugin issues, malware cleanup when it&apos;s realistic, restoring from backups, and making the editor usable again.
          </p>
          <p>
            I&apos;m direct about risk: some WordPress sites are one bad plugin away from another outage. Sometimes the right move is stabilize now, then plan a move to Wix, Squarespace, Shopify, or a simpler custom setup you can maintain.
          </p>
          <p>
            <strong>When to rebuild:</strong> the site is slow, insecure, or impossible for you to edit. An affordable rebuild beats paying forever for emergency hours.
          </p>

          <h2>How we usually work</h2>
          <p>
            You send the URL and what&apos;s wrong. I quote same day. For builder access, you invite me to the account. You keep ownership. After the fix, I tell you what changed in plain language. Remote is fine; I&apos;m based in San Diego and happy to meet locally when it helps.
          </p>
          <p>
            Need something fixed today? Start on the{' '}
            <Link to="/website-fixes">website fixes</Link> page. Comparing new site costs? See{' '}
            <Link to="/pricing">affordable website pricing</Link>.
          </p>
        </article>

        <RelatedLinks
          links={[
            {
              to: '/website-fixes',
              label: 'Website fixes',
              description: 'Down sites, broken forms, hacks, mobile issues: $85/hr.',
            },
            {
              to: '/pricing',
              label: 'Affordable websites',
              description: 'Single Page $600 · Full Website $1,200 flat.',
            },
            {
              to: '/#work',
              label: 'Demo work',
              description: 'Sample sites for local small businesses.',
            },
          ]}
        />

        <FaqSection title="Platform help questions" faqs={platformHelpFaqs} />
        <ContactCta
          heading="Which platform are you stuck on?"
          subtext="Tell me Wix, Squarespace, Shopify, or WordPress, and what's going wrong. I'll quote a Quick Fix same day. First chat is free."
        />
      </main>
    </>
  )
}
