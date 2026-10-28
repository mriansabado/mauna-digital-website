import { Link } from 'react-router-dom'
import { JsonLd } from '../seo/JsonLd'
import { SITE_URL } from '../constants/site'

export type Crumb = {
  name: string
  path: string
}

type BreadcrumbsProps = {
  items: Crumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const all: Crumb[] = [{ name: 'Home', path: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <JsonLd data={schema} />
      <ol className="breadcrumbs-list">
        {all.map((item, index) => {
          const isLast = index === all.length - 1
          return (
            <li key={item.path}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
              {!isLast ? (
                <span className="breadcrumbs-sep" aria-hidden="true">
                  /
                </span>
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
