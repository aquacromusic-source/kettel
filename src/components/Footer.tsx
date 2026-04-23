'use client'
import Link from 'next/link'
import { T } from './tokens'

// SVG Social Icons
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.85a4.86 4.86 0 0 1-1.07-.16z"/>
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0B0B0C"/>
    </svg>
  )
}

function IconStrava() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
    </svg>
  )
}

const SOCIALS = [
  { icon: <IconInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <IconTikTok />, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: <IconYouTube />, href: 'https://youtube.com', label: 'YouTube' },
  { icon: <IconStrava />, href: 'https://strava.com', label: 'Strava' },
]

const COLS = [
  {
    h: 'Boutique',
    l: [
      { label: 'Tous les bracelets', href: '/catalogue' },
      { label: 'Cordons', href: '/catalogue' },
      { label: 'Cartes cadeau', href: '#' },
      { label: 'Duo & bundles', href: '#' },
      { label: 'Stock atelier', href: '#' },
    ],
  },
  {
    h: 'Par sport',
    l: [
      { label: 'Football', href: '/catalogue' },
      { label: 'Running', href: '/catalogue' },
      { label: 'Padel', href: '/catalogue' },
      { label: 'Tennis', href: '/catalogue' },
      { label: 'Voir tout', href: '/catalogue' },
    ],
  },
  {
    h: 'Aide',
    l: [
      { label: 'Livraison', href: '#' },
      { label: 'Retours & échanges', href: '#' },
      { label: 'Guide des tailles', href: '#' },
      { label: 'Nous contacter', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  {
    h: 'Maison',
    l: [
      { label: 'Notre histoire', href: '#' },
      { label: 'Atelier Lyon', href: '#' },
      { label: 'Journal', href: '#' },
      { label: 'Affiliés', href: '#' },
      { label: 'Presse', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ padding: 'clamp(48px,6vw,80px) clamp(16px,4vw,48px) 40px', background: T.ink, borderTop: `1px solid ${T.line2}` }}>
      <div className="strap-footer-grid">
        <div>
          <Link href="/" className="strap-display" style={{ fontSize: 38, color: T.bone, letterSpacing: '-0.04em', textDecoration: 'none', display: 'inline-block' }}>
            STRAP<span style={{ color: T.accent }}>.</span>
          </Link>
          <p style={{ color: T.fog, fontSize: 14, lineHeight: 1.55, marginTop: 16, maxWidth: 300 }}>
            Bracelets du quotidien inspirés du sport. Gravés, montés, expédiés depuis notre atelier à Lyon.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40, height: 40, borderRadius: '50%', background: T.ink2,
                  border: `1px solid ${T.line}`, color: T.bone,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', transition: 'border-color .15s, color .15s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = T.accent
                  el.style.color = T.accent
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = T.line
                  el.style.color = T.bone
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {COLS.map(col => (
          <div key={col.h}>
            <div className="strap-mono" style={{ color: T.fog, marginBottom: 18 }}>{col.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.l.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="strap-link" style={{ fontSize: 14 }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        borderTop: `1px solid ${T.line2}`,
        marginTop: 60,
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <span className="strap-mono" style={{ color: T.fog2 }}>© STRAP. STUDIO 2026 — ATELIER FR · LYON 69007</span>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          {['CGV', 'Confidentialité', 'Mentions légales', 'Cookies'].map(l => (
            <a key={l} href="#" className="strap-mono" style={{ color: T.fog, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
