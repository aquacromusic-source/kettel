'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { T } from './tokens'
import { IconSearch, IconHeart, IconCart } from './Icons'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { label: 'Bracelets', href: '/catalogue' },
  { label: 'Par sport', href: '/#sports' },
  { label: 'Personnaliser', href: '/products/bracelet-kettlebell-rose-gold' },
  { label: 'Idées cadeau', href: '/#gift' },
  { label: 'Journal', href: '/#' },
]

export default function NavBar() {
  const { items } = useCart()
  const count = items.reduce((s, i) => s + i.qty, 0)
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="strap-nav-header">
        {/* Logo */}
        <Link href="/" className="strap-display strap-nav-logo" style={{ fontSize: 22, color: T.bone, textDecoration: 'none', letterSpacing: '-0.04em' }}>
          STRAP<span style={{ color: T.accent }}>.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="strap-nav-links">
          {NAV_LINKS.map(l => (
            <Link key={l.label} href={l.href} className="strap-link" style={{ fontSize: 14, fontWeight: 500 }}>{l.label}</Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="strap-nav-actions" style={{ color: T.bone }}>
          <IconSearch/>
          <span className="strap-mono" style={{ color: T.fog }}>FR · €</span>
          <IconHeart/>
          <Link href="/cart" style={{ position: 'relative', color: T.bone, display: 'flex' }}>
            <IconCart/>
            {count > 0 && (
              <span style={{
                position: 'absolute', top: -6, right: -8,
                background: T.accent, color: '#fff', fontSize: 10,
                fontFamily: T.mono, fontWeight: 600, borderRadius: 8,
                padding: '1px 5px', minWidth: 16, textAlign: 'center',
              }}>{count}</span>
            )}
          </Link>
        </div>

        {/* Mobile right: cart + hamburger */}
        <div className="strap-nav-mobile-actions" style={{ color: T.bone }}>
          <Link href="/cart" style={{ position: 'relative', color: T.bone, display: 'flex' }}>
            <IconCart/>
            {count > 0 && (
              <span style={{
                position: 'absolute', top: -6, right: -8,
                background: T.accent, color: '#fff', fontSize: 10,
                fontFamily: T.mono, fontWeight: 600, borderRadius: 8,
                padding: '1px 5px', minWidth: 16, textAlign: 'center',
              }}>{count}</span>
            )}
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'transparent', border: 'none', color: T.bone,
              cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column',
              gap: 5, alignItems: 'center', justifyContent: 'center',
            }}
          >
            <span style={{
              display: 'block', width: 22, height: 2, background: menuOpen ? 'transparent' : T.bone,
              transition: 'all .2s', position: 'relative',
            }}/>
            <span style={{
              display: 'block', width: 22, height: 2, background: T.bone,
              transition: 'all .2s',
              transform: menuOpen ? 'rotate(45deg) translate(0px, -7px)' : 'none',
            }}/>
            <span style={{
              display: 'block', width: 22, height: 2, background: T.bone,
              transition: 'all .2s',
              transform: menuOpen ? 'rotate(-45deg) translate(0px, 7px)' : 'none',
              marginTop: menuOpen ? 0 : undefined,
            }}/>
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 39,
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
        }}/>
      )}

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 50,
          width: 280, maxWidth: '85vw',
          background: T.ink2, borderLeft: `1px solid ${T.line}`,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .3s cubic-bezier(.4,0,.2,1)',
          display: 'flex', flexDirection: 'column',
          padding: '80px 32px 40px',
          gap: 8,
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer"
          style={{
            position: 'absolute', top: 20, right: 20,
            background: 'transparent', border: 'none', color: T.bone,
            cursor: 'pointer', fontSize: 24, lineHeight: 1,
          }}
        >×</button>

        <Link href="/" className="strap-display" onClick={() => setMenuOpen(false)} style={{
          fontSize: 20, color: T.bone, textDecoration: 'none',
          letterSpacing: '-0.04em', marginBottom: 24,
        }}>
          STRAP<span style={{ color: T.accent }}>.</span>
        </Link>

        {NAV_LINKS.map(l => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="strap-link"
            style={{
              fontSize: 18, fontWeight: 500, padding: '12px 0',
              borderBottom: `1px solid ${T.line2}`,
            }}
          >{l.label}</Link>
        ))}

        <div style={{ marginTop: 32, display: 'flex', gap: 20, color: T.bone }}>
          <IconSearch/>
          <IconHeart/>
        </div>
        <div className="strap-mono" style={{ color: T.fog, marginTop: 8 }}>FR · €</div>
      </div>
    </>
  )
}
