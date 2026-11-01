import { Breadcrumbs } from '../components/Breadcrumbs'
import { ContactCta } from '../components/ContactCta'
import { DemoPreview } from '../components/DemoPreview'
import { RelatedLinks } from '../components/RelatedLinks'
import { clientSites, conceptSites } from '../data/demoSites'
import { PageMeta } from '../seo/PageMeta'
import { FOUNDER_NAME } from '../constants/site'
import sandiegoBay from '../assets/sandiego-bay.jpg'
import devportfolioScreenshot from '../assets/devportfolio-sc.jpg'
import barblendGuruScreenshot from '../assets/barblend-guru-sc.jpg'
import postachioImage from '../assets/postachio-project.jpg'
import postachioLogo from '../assets/postachio-logo1.png'
import pocketsayScreenshot from '../assets/pocketsay-screenshot.jpg'
import pocketsayLogo from '../assets/pocketsay-logo1.png'
import tasqlyScreenshot from '../assets/tasqly-sc.jpg'
import tasqlyLogo from '../assets/Tasqly-Logo.png'

export function WorkPage() {
  return (
    <>
      <PageMeta path="/work" />
      <main className="seo-page work-page">
        <section className="seo-hero">
          <div className="container">
            <Breadcrumbs items={[{ name: 'Work', path: '/work' }]} />
            <p className="seo-kicker">Portfolio · Client sites, apps &amp; concepts</p>
            <h1>Work</h1>
            <p className="seo-lead">
              Real client websites, apps I&apos;ve shipped, and a few concept sites that show the kind of look and feel I build for local businesses.
            </p>
          </div>
        </section>

        <section id="client-sites" className="demos work-section">
          <div className="container">
            <h2 className="section-title">Client websites</h2>
            <p className="demos-subtitle">
              Live sites for nonprofits, galleries, and service businesses. Click through to see them in the wild.
            </p>

            <div className="client-sites">
              {clientSites.map((site) => (
                <article key={site.url} className="client-site-row">
                  <DemoPreview
                    url={site.url}
                    title={site.name}
                    screenshot={site.screenshot}
                    featured
                  />
                  <div className="client-site-copy">
                    <p className="client-site-tagline">{site.tagline}</p>
                    <h3 className="client-site-title">{site.name}</h3>
                    <p className="client-site-description">{site.description}</p>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="client-site-link"
                    >
                      Visit site →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="concept-sites" className="demos work-section work-section-alt">
          <div className="container">
            <h2 className="section-title">Concept sites</h2>
            <p className="demos-subtitle">
              Speculative builds for fictional businesses. Useful if you want to poke around a layout before we talk about yours.
            </p>
            <div className="demos-grid">
              {conceptSites.map((site) => (
                <article key={site.url} className="demo-card">
                  <DemoPreview url={site.url} title={site.name} screenshot={site.screenshot} />
                  <div className="demo-card-body">
                    <div className="demo-card-header">
                      <div>
                        <h3 className="demo-card-title">{site.name}</h3>
                        <p className="demo-card-tagline">{site.tagline}</p>
                      </div>
                    </div>
                    <p className="demo-card-description">{site.description}</p>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-card-link"
                    >
                      Open live site →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="apps"
          className="tools work-section"
          style={{ backgroundImage: `url(${sandiegoBay})` }}
        >
          <div className="section-overlay"></div>
          <div className="container">
            <h2 className="section-title">Apps</h2>
            <p className="demos-subtitle work-apps-subtitle">
              Side projects and shipped products — iOS and web — when a website isn&apos;t the whole story.
            </p>
            <div className="tools-grid">
              <div className="tool-card" id="tool-pocketsay">
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
                    <img src={pocketsayLogo} alt="PocketSay logo" className="tool-title-logo" />
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
              </div>
              <div className="tool-card" id="tool-tasqly">
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
                    <img src={tasqlyLogo} alt="Tasqly logo" className="tool-title-logo" />
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
              </div>
              <div className="tool-card" id="tool-barblend-guru">
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
                  <p className="tool-subtitle">Find your next favorite pour from what&apos;s already in the cabinet</p>
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
              </div>
              <div className="tool-card" id="tool-postachio">
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
                    <img src={postachioLogo} alt="Postachio logo" className="tool-title-logo" />
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
              </div>
              <div className="tool-card" id="tool-dev-portfolio">
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
              </div>
            </div>
          </div>
        </section>

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
