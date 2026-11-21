import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ContactCta } from '../components/ContactCta'
import { RelatedLinks } from '../components/RelatedLinks'
import { clientSites, conceptSites } from '../data/demoSites'
import { socialPosts } from '../data/socialPosts'
import { PageMeta } from '../seo/PageMeta'
import { FOUNDER_NAME } from '../constants/site'
import sdLandscape1 from '../assets/sd-landscape1.jpg'
import sdLandscape2 from '../assets/sd-landscape2.jpg'
import sdLandscape3 from '../assets/sd-landscape3.jpg'
import sdLandscape4 from '../assets/sd-landscape4.jpg'
import sandiegoBeach from '../assets/sandiego-beach.jpg'
import devportfolioScreenshot from '../assets/devportfolio-sc.jpg'
import barblendGuruScreenshot from '../assets/barblend-guru-sc.jpg'
import postachioImage from '../assets/postachio-project.jpg'
import postachioLogo from '../assets/postachio-logo1.png'
import pocketsayScreenshot from '../assets/pocketsay-screenshot.jpg'
import pocketsayLogo from '../assets/pocketsay-logo1.png'
import tasqlyScreenshot from '../assets/tasqly-sc.jpg'
import tasqlyLogo from '../assets/Tasqly-Logo.png'

type SiteCardProps = {
  name: string
  tagline: string
  url: string
  description: string
  tags: string[]
  screenshot: string
  badge: string
  ctaLabel: string
}

function SiteCard({
  name,
  tagline,
  url,
  description,
  tags,
  screenshot,
  badge,
  ctaLabel,
}: SiteCardProps) {
  return (
    <article className="tool-card">
      <div className="tool-media">
        <img
          src={screenshot}
          alt={`${name} website screenshot`}
          className="tool-image tool-image-site"
          loading="lazy"
        />
      </div>
      <div className="tool-content">
        <div className="tool-badge">{badge}</div>
        <h3 className="tool-title">{name}</h3>
        <p className="tool-subtitle">{tagline}</p>
        <p className="tool-description">{description}</p>
        <div className="tool-tags">
          {tags.map((tag) => (
            <span key={tag} className="tool-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="tool-cta">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {ctaLabel}
          </a>
        </div>
      </div>
    </article>
  )
}

export function WorkPage() {
  return (
    <>
      <PageMeta path="/work" />
      <main className="seo-page work-page">
        <section
          className="seo-hero work-hero"
          style={{ ['--work-hero-image' as string]: `url(${sdLandscape1})` }}
        >
          <div className="work-hero-overlay" aria-hidden="true" />
          <div className="container">
            <Breadcrumbs items={[{ name: 'Work', path: '/work' }]} />
            <p className="seo-kicker">Portfolio · Client sites, social posts, apps &amp; concepts</p>
            <h1>Work</h1>
            <p className="seo-lead">
              Real client websites, hand-designed social posts, apps I&apos;ve shipped, and a few concept sites that show the kind of look and feel I build for local businesses.
            </p>
          </div>
        </section>

        <section
          id="client-sites"
          className="tools work-portfolio"
          style={{ backgroundImage: `url(${sdLandscape2})` }}
          aria-labelledby="client-sites-title"
        >
          <div className="section-overlay"></div>
          <div className="container work-portfolio-bucket">
            <h2 id="client-sites-title" className="work-portfolio-title">
              Client websites
            </h2>
            <p className="work-portfolio-subtitle">
              Live sites for nonprofits, galleries, and service businesses. Click through to see them in the wild.
            </p>
            <div className="tools-grid tools-grid-balanced">
              {clientSites.map((site) => (
                <SiteCard
                  key={site.url}
                  name={site.name}
                  tagline={site.tagline}
                  url={site.url}
                  description={site.description}
                  tags={site.tags}
                  screenshot={site.screenshot}
                  badge="Client Website"
                  ctaLabel="Visit site"
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="concept-sites"
          className="tools work-portfolio"
          style={{ backgroundImage: `url(${sdLandscape3})` }}
          aria-labelledby="concept-sites-title"
        >
          <div className="section-overlay"></div>
          <div className="container work-portfolio-bucket">
            <h2 id="concept-sites-title" className="work-portfolio-title">
              Concept sites
            </h2>
            <p className="work-portfolio-subtitle">
              Speculative builds for fictional businesses. Useful if you want to poke around a layout before we talk about yours.
            </p>
            <div className="tools-grid tools-grid-balanced">
              {conceptSites.map((site) => (
                <SiteCard
                  key={site.url}
                  name={site.name}
                  tagline={site.tagline}
                  url={site.url}
                  description={site.description}
                  tags={site.tags}
                  screenshot={site.screenshot}
                  badge="Concept Site"
                  ctaLabel="Open live site"
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="social-posts"
          className="tools work-portfolio social-posts-section"
          style={{ backgroundImage: `url(${sandiegoBeach})` }}
          aria-labelledby="social-posts-title"
        >
          <div className="section-overlay"></div>
          <div className="container work-portfolio-bucket">
            <p className="social-posts-kicker">Social posting · $200/mo</p>
            <h2 id="social-posts-title" className="work-portfolio-title">
              Real posts. No AI.
            </h2>
            <p className="work-portfolio-subtitle social-posts-lead">
              Keeping a feed going every week takes more time than it looks. I make posts that look like your
              brand and vibe — real design, no AI fluff — so people keep hearing about your business. Here&apos;s the
              kind of work included in social posting for $200 a month.
            </p>

            {socialPosts.length > 0 ? (
              <ul className="social-posts-grid">
                {socialPosts.map((post) => (
                  <li key={post.src} className="social-post-item">
                    <img
                      src={post.src}
                      alt={post.alt}
                      className="social-post-image"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="social-posts-empty" role="status">
                <p className="social-posts-empty-title">Gallery loading soon</p>
                <p className="social-posts-empty-copy">
                  Drop your past post images into{' '}
                  <code>src/assets/social-posts/</code> — jpg, png, or webp — and they&apos;ll show up here
                  automatically.
                </p>
              </div>
            )}

            <div className="social-posts-cta">
              <Link to="/pricing" className="btn btn-primary">
                See social posting · $200/mo
              </Link>
              <a href="#contact" className="btn btn-secondary">
                Let&apos;s talk social
              </a>
            </div>
          </div>
        </section>

        <section
          id="apps"
          className="tools work-portfolio"
          style={{ backgroundImage: `url(${sdLandscape4})` }}
          aria-labelledby="apps-title"
        >
          <div className="section-overlay"></div>
          <div className="container work-portfolio-bucket">
            <h2 id="apps-title" className="work-portfolio-title">
              Apps
            </h2>
            <p className="work-portfolio-subtitle">
              Side projects and shipped products — iOS and web — when a website isn&apos;t the whole story.
            </p>
            <div className="tools-grid tools-grid-balanced">
              <article className="tool-card" id="tool-pocketsay">
                <div className="tool-media">
                  <img
                    src={pocketsayScreenshot}
                    alt="PocketSay iOS app showing large on-screen text"
                    className="tool-image tool-image-pocketsay"
                    loading="lazy"
                  />
                </div>
                <div className="tool-content">
                  <div className="tool-badge">iOS App</div>
                  <h3 className="tool-title">
                    <img src={pocketsayLogo} alt="" className="tool-title-logo" />
                    PocketSay
                  </h3>
                  <p className="tool-subtitle">Say it BIG when you can&apos;t say it loud</p>
                  <p className="tool-description">
                    Show large, customizable text when you need to be seen instead of heard. Private, works offline.
                  </p>
                  <div className="tool-tags">
                    <span className="tool-tag">iOS</span>
                    <span className="tool-tag">Communication</span>
                    <span className="tool-tag">Privacy</span>
                  </div>
                  <div className="tool-cta">
                    <a
                      href="https://apps.apple.com/us/app/pocketsay/id6756633082"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Download PocketSay
                    </a>
                  </div>
                </div>
              </article>

              <article className="tool-card" id="tool-tasqly">
                <div className="tool-media">
                  <img
                    src={tasqlyScreenshot}
                    alt="Tasqly planner app for freelancers and service pros"
                    className="tool-image tool-image-tasqly"
                    loading="lazy"
                  />
                </div>
                <div className="tool-content">
                  <div className="tool-badge">iOS App</div>
                  <h3 className="tool-title">
                    <img src={tasqlyLogo} alt="" className="tool-title-logo" />
                    Tasqly
                  </h3>
                  <p className="tool-subtitle">Planner first workflow for freelancers &amp; service pros</p>
                  <p className="tool-description">
                    A React Native app for independent pros to manage clients, schedule sessions, and stay on top of the week.
                  </p>
                  <div className="tool-tags">
                    <span className="tool-tag">Expo</span>
                    <span className="tool-tag">React Native</span>
                    <span className="tool-tag">Productivity</span>
                    <span className="tool-tag">iOS</span>
                  </div>
                  <div className="tool-cta">
                    <a
                      href="https://apps.apple.com/us/app/tasqly/id6761040872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Download Tasqly
                    </a>
                  </div>
                </div>
              </article>

              <article className="tool-card" id="tool-barblend-guru">
                <div className="tool-media">
                  <img
                    src={barblendGuruScreenshot}
                    alt="BarBlend Guru cocktail recipe web app"
                    className="tool-image"
                    loading="lazy"
                  />
                </div>
                <div className="tool-content">
                  <div className="tool-badge">Free Web App</div>
                  <h3 className="tool-title">BarBlend Guru</h3>
                  <p className="tool-subtitle">
                    Find your next favorite pour from what&apos;s already in the cabinet
                  </p>
                  <p className="tool-description">
                    Search a cocktail library by name, by what you have on hand, or hit the randomizer.
                  </p>
                  <div className="tool-tags">
                    <span className="tool-tag">Web App</span>
                    <span className="tool-tag">Recipes</span>
                    <span className="tool-tag">Randomizer</span>
                  </div>
                  <div className="tool-cta">
                    <a
                      href="https://barblend-guru-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Open BarBlend Guru
                    </a>
                  </div>
                </div>
              </article>

              <article className="tool-card" id="tool-postachio">
                <div className="tool-media">
                  <img
                    src={postachioImage}
                    alt="Postachio AI social content app preview"
                    className="tool-image"
                    loading="lazy"
                  />
                </div>
                <div className="tool-content">
                  <div className="tool-badge">Web App</div>
                  <h3 className="tool-title">
                    <img src={postachioLogo} alt="" className="tool-title-logo" />
                    Postachio
                  </h3>
                  <p className="tool-subtitle">AI powered social posts with SEO in mind</p>
                  <p className="tool-description">
                    Write social content faster, with structure and search in mind, instead of staring at a blank caption box.
                  </p>
                  <div className="tool-tags">
                    <span className="tool-tag">AI</span>
                    <span className="tool-tag">SEO</span>
                    <span className="tool-tag">Content</span>
                  </div>
                  <div className="tool-cta">
                    <a
                      href="https://postachio.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Try Postachio
                    </a>
                  </div>
                </div>
              </article>

              <article className="tool-card" id="tool-dev-portfolio">
                <div className="tool-media">
                  <img
                    src={devportfolioScreenshot}
                    alt={`${FOUNDER_NAME} interactive developer portfolio`}
                    className="tool-image"
                    loading="lazy"
                  />
                </div>
                <div className="tool-content">
                  <div className="tool-badge">Interactive Website</div>
                  <h3 className="tool-title">{FOUNDER_NAME} Dev Portfolio</h3>
                  <p className="tool-subtitle">A gamified portfolio you explore like a tiny space adventure</p>
                  <p className="tool-description">
                    My own portfolio, built as a playful interactive site instead of a standard scroll and skim page.
                  </p>
                  <div className="tool-tags">
                    <span className="tool-tag">Portfolio</span>
                    <span className="tool-tag">Interactive</span>
                    <span className="tool-tag">Front End</span>
                  </div>
                  <div className="tool-cta">
                    <a
                      href="https://www.iansabado.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Explore Portfolio
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
            {
              to: '/pricing',
              label: 'Website & social pricing',
              description: 'Sites from $600 · Social posting $200/mo · hand-designed, no AI.',
            },
            {
              to: '/website-fixes',
              label: 'Website fixes',
              description: 'Broken form, mobile mess, or site down? $60/hr Quick Fix.',
            },
            {
              to: '/#contact',
              label: 'Contact',
              description: 'Have a project in mind? Let\'s talk.',
            },
          ]}
        />

        <ContactCta
          heading="Want something like this for your business?"
          subtext="Tell me what you need — a new site, a fix, or an app idea. First chat is free."
        />
      </main>
    </>
  )
}
