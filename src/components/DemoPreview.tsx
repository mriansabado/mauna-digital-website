type DemoPreviewProps = {
  url: string
  title: string
  screenshot: string
  featured?: boolean
}

export function DemoPreview({ url, title, screenshot, featured = false }: DemoPreviewProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`demo-card-preview demo-card-preview-link${featured ? ' demo-card-preview-featured' : ''}`}
      aria-label={`Open ${title} in a new tab`}
    >
      <div className="demo-browser-bar">
        <span className="demo-browser-dot" aria-hidden="true" />
        <span className="demo-browser-dot" aria-hidden="true" />
        <span className="demo-browser-dot" aria-hidden="true" />
        <span className="demo-browser-url">{url.replace('https://', '')}</span>
      </div>
      <div className="demo-preview-image-wrap">
        <img
          src={screenshot}
          alt={`${title} website preview`}
          className="demo-preview-image"
          loading="lazy"
          decoding="async"
        />
        <span className="demo-preview-overlay">
          <span className="demo-preview-cta">Open live site →</span>
        </span>
      </div>
    </a>
  )
}
