import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import navLogo from '../assets/mauna-only-transparent.png'
import logoTextLight from '../assets/mauna-digital-black.png'
import logoTextDark from '../assets/mauna-digital-white.png'
import {
  EMAIL,
  EMAIL_HREF,
  INSTAGRAM_URL,
  LOCALITY,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from '../constants/site'

export function Layout() {
  const location = useLocation()
  const [isDark, setIsDark] = useState(() => {
    if (typeof localStorage === 'undefined') return true
    const saved = localStorage.getItem('mauna-dark-mode')
    return saved !== null ? JSON.parse(saved) : true
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('mauna-dark-mode', JSON.stringify(isDark))
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    setIsMenuOpen(false)
    setServicesOpen(false)
    if (location.hash) {
      const id = location.hash.slice(1)
      // Wait a tick so the homepage sections exist after route change
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src={navLogo} alt={SITE_NAME} className="nav-logo-image" />
            <img
              src={isDark ? logoTextDark : logoTextLight}
              alt=""
              className="nav-logo-text"
            />
          </Link>
          <div className="nav-right">
            <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
              <NavLink to="/pricing" onClick={closeMenu}>
                Pricing
              </NavLink>
              <NavLink to="/website-fixes" onClick={closeMenu}>
                Website Fixes
              </NavLink>
              <div
                className={`nav-dropdown ${servicesOpen ? 'nav-dropdown-open' : ''}`}
              >
                <button
                  type="button"
                  className="nav-dropdown-trigger"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  Services
                  <span className="nav-dropdown-caret" aria-hidden="true">
                    ▾
                  </span>
                </button>
                <div className="nav-dropdown-menu" role="menu">
                  <Link to="/platform-help" role="menuitem" onClick={closeMenu}>
                    Platform help
                  </Link>
                  <Link to="/#services" role="menuitem" onClick={closeMenu}>
                    All services
                  </Link>
                </div>
              </div>
              <Link to="/#work" onClick={closeMenu}>
                Work
              </Link>
              <Link to="/#about" onClick={closeMenu}>
                About
              </Link>
              <Link to="/#contact" onClick={closeMenu}>
                Contact
              </Link>
              <a href={PHONE_TEL} className="nav-phone" onClick={closeMenu}>
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="nav-actions">
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setIsDark((prev: boolean) => !prev)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Light mode' : 'Dark mode'}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              <button
                type="button"
                className="nav-menu-toggle"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <span className="nav-menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Mauna Digital LLC. All rights reserved.</p>
          <address className="footer-nap">
            {SITE_NAME}
            <br />
            Website designer &amp; web developer in {LOCALITY}
            <br />
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            {' · '}
            <a href={EMAIL_HREF}>{EMAIL}</a>
          </address>
          <p className="footer-links">
            <Link to="/pricing">Affordable websites</Link>
            {' · '}
            <Link to="/website-fixes">Fix my website</Link>
            {' · '}
            <Link to="/platform-help">Wix &amp; WordPress help</Link>
            {' · '}
            <Link to="/#work">Work</Link>
            {' · '}
            <Link to="/#about">About</Link>
            {' · '}
            <Link to="/#contact">Contact</Link>
            {' · '}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
