import { Link } from 'react-router-dom'

export type RelatedLink = {
  to: string
  label: string
  description: string
}

type RelatedLinksProps = {
  links: RelatedLink[]
  heading?: string
}

export function RelatedLinks({
  links,
  heading = 'Related pages',
}: RelatedLinksProps) {
  return (
    <section className="related-links" aria-labelledby="related-links-title">
      <div className="container">
        <h2 id="related-links-title" className="section-title">
          {heading}
        </h2>
        <ul className="related-links-list">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="related-link-card">
                <span className="related-link-label">{link.label}</span>
                <span className="related-link-desc">{link.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
