type DemoPreviewProps = {
  url: string
  title: string
  icon: string
}

export function DemoPreview({ url, title, icon }: DemoPreviewProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="demo-card-preview demo-card-preview-link"
      aria-label={`Open ${title} demo in a new tab`}
    >
      <div className="demo-browser-bar">
        <span className="demo-browser-dot" aria-hidden="true" />
        <span className="demo-browser-dot" aria-hidden="true" />
        <span className="demo-browser-dot" aria-hidden="true" />
        <span className="demo-browser-url">{url.replace('https://', '')}</span>
      </div>
      <div className="demo-preview-placeholder">
        <span className="demo-preview-icon" aria-hidden="true">{icon}</span>
        <span className="demo-preview-cta">Click to open live demo →</span>
      </div>
    </a>
  )
}
