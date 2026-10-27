import { Link } from 'react-router-dom'
import { ContactCta } from '../components/ContactCta'
import { FaqSection } from '../components/FaqSection'
import { RelatedLinks } from '../components/RelatedLinks'
import { PageMeta } from '../seo/PageMeta'
import { websiteFixesFaqs } from '../seo/faqs'

export function WebsiteFixesPage() {
  return (
    <>
      <PageMeta path="/website-fixes" faqs={websiteFixesFaqs} />
      <main className="seo-page">
        <section className="seo-hero">
          <div className="container">
            <p className="seo-kicker">San Diego · Fix my website</p>
            <h1>Website fixes and updates in San Diego</h1>
            <p className="seo-lead">
              Something broke, looks wrong, or hasn&apos;t been touched in years? I fix websites for small businesses — clear hourly rate, same-day quote, no contract.
            </p>
          </div>
        </section>

        <article className="seo-content container">
          <h2>Quick Fix — $85/hr</h2>
          <p>
            This is the page for &quot;fix my website&quot; searches. I&apos;m a website designer and web developer in San Diego who spends a lot of time repairing what already exists — not upselling a brand-new build you don&apos;t need.
          </p>
          <p>
            <strong>Quick Fix is $85/hr</strong> with a <strong>1 hour minimum</strong>. Tell me what&apos;s going on. I quote you same day and fix it on Squarespace, Shopify, Wix, WordPress, or most anything else. If I finish early, I&apos;ll use the rest of the hour on your to-do list.
          </p>
          <p>
            No monthly plan required. Text or email me, send the URL, and we go from there.
          </p>

          <h2>My website is down</h2>
          <p>
            A down site is usually hosting, DNS, an expired domain, a bad deploy, or a platform outage. I check whether the domain still points the right way, whether hosting is actually running, and whether the site itself is throwing an error. Then I get you back online or tell you exactly who holds the missing piece (registrar, host, or platform).
          </p>
          <p>
            If you&apos;re not sure what &quot;DNS&quot; even means — that&apos;s fine. You shouldn&apos;t need a translator to get your site loading again.
          </p>

          <h2>My contact form isn&apos;t working</h2>
          <p>
            Forms fail for boring reasons: wrong email settings, spam filters eating messages, a broken third-party form tool, or a platform change that quietly broke the connection. I test the form end to end, confirm messages land in your inbox (or a spam folder), and fix the setup so leads stop disappearing.
          </p>
          <p>
            If you never got a form in the first place, I can add a simple one that reaches you — still under Quick Fix time unless you want a bigger redesign.
          </p>

          <h2>My site looks broken on phones</h2>
          <p>
            Most customers will only ever see you on a phone. Broken mobile layouts usually come from old themes, custom code that wasn&apos;t tested small, oversized images, or a builder section that stacked wrong. I check the site on real phone widths, fix spacing and overflow, and make buttons and text easy to tap and read.
          </p>
          <p>
            Sometimes it&apos;s a quick CSS or builder tweak. Sometimes the theme itself is the problem — and I&apos;ll say so honestly before we burn hours.
          </p>

          <h2>My website got hacked</h2>
          <p>
            Hacked sites often show spam links, weird redirects, login pages you didn&apos;t create, or Google warnings. I help you lock down access, clean what I can on your platform, remove malicious plugins or injected scripts when they&apos;re findable, and set safer passwords and updates so it&apos;s harder next time.
          </p>
          <p>
            Severe WordPress infections sometimes need a restore from backup or a rebuild. I won&apos;t pretend a five-minute wipe fixes everything — I&apos;ll show you the options and cost before we go deep.
          </p>

          <h2>I can&apos;t log in to my website</h2>
          <p>
            Lost admin access is common after a freelancer left, an email changed, or a platform locked the account. I help you recover through the right channel (Wix, Squarespace, Shopify, WordPress, hosting, or domain email), reset access securely, and make sure you — not a random old login — own the keys.
          </p>
          <p>
            Your domain, your site, your accounts. Always yours.
          </p>

          <h2>My site is outdated or has old info</h2>
          <p>
            Old hours, old menus, old phone numbers, and photos from three owners ago quietly cost you trust. Updates are classic Quick Fix work: swap copy and images, fix broken links, refresh a homepage banner, or clean up pages you no longer offer.
          </p>
          <p>
            If the bones of the site are fine, we update. If the whole thing fights every change, I&apos;ll tell you when an{' '}
            <Link to="/pricing">affordable rebuild</Link> is the smarter spend — Single Page from $600 or Full Website at $1,200 flat.
          </p>

          <h2>Something&apos;s wrong on Wix, Squarespace, or WordPress</h2>
          <p>
            Builders are great until they aren&apos;t — editor quirks, app conflicts, checkout weirdness, plugin updates that break the layout. I work inside those platforms every week. For a deeper walkthrough by tool, see{' '}
            <Link to="/platform-help">Wix, Squarespace, Shopify, and WordPress help</Link>.
          </p>
          <p>
            Bottom line: if your site is down, broken, hacked, outdated, or just confusing — start with a Quick Fix. One hour minimum, $85/hr, quoted same day. I&apos;m a real person in San Diego. When you reach out, you talk to me.
          </p>
        </article>

        <RelatedLinks
          links={[
            {
              to: '/platform-help',
              label: 'Platform help',
              description: 'Wix, Squarespace, Shopify, and WordPress issues explained.',
            },
            {
              to: '/pricing',
              label: 'Website pricing',
              description: 'When a fix isn\'t enough — affordable sites from $600.',
            },
            {
              to: '/#contact',
              label: 'Contact',
              description: 'Send your URL and what\'s going wrong.',
            },
          ]}
        />

        <FaqSection title="Website fix questions" faqs={websiteFixesFaqs} />
        <ContactCta
          heading="What's going on with your site?"
          subtext="Send the URL and a short description. I'll quote a Quick Fix same day — $85/hr, 1 hour minimum. First chat is free."
        />
      </main>
    </>
  )
}
