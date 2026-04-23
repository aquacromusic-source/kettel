'use client'
import Link from 'next/link'
import { T } from './tokens'
import { IconSearch, IconHeart, IconCart } from './Icons'
import { useCart } from '@/context/CartContext'

export default function NavBar() {
  const { items } = useCart()
  const count = items.reduce((s, i) => s + i.qty, 0)

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(11,11,12,0.82)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${T.line}`,
      padding: '22px 48px',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
    }}>
      <Link href="/" className="strap-display" style={{ fontSize: 22, color: T.bone, textDecoration: 'none', letterSpacing: '-0.04em' }}>
        STRAP<span style={{ color: T.accent }}>.</span>
      </Link>
      <nav style={{ display: 'flex', gap: 28, flex: 1 }}>
        {[
          { label: 'Bracelets', href: '/products/le-terrain' },
          { label: 'Par sport', href: '/#sports' },
          { label: 'Personnaliser', href: '/products/le-terrain' },
          { label: 'Idées cadeau', href: '/#gift' },
          { label: 'Journal', href: '/#' },
        ].map(l => (
          <Link key={l.label} href={l.href} className="strap-link" style={{ fontSize: 14, fontWeight: 500 }}>{l.label}</Link>
        ))}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: T.bone }}>
        <IconSearch/>
        <span className="strap-mono" style={{ color: T.fog }}>FR · €</span>
        <IconHeart/>
        <Link href="/cart" style={{ position: 'relative', color: T.bone, display: 'flex' }}>
          <IconCart/>
          {count > 0 && (
            <span style={{
              position: 'absolute',
              top: -6,
              right: -8,
              background: T.accent,
              color: '#fff',
              fontSize: 10,
              fontFamily: T.mono,
              fontWeight: 600,
              borderRadius: 8,
              padding: '1px 5px',
              minWidth: 16,
              textAlign: 'center',
            }}>{count}</span>
          )}
        </Link>
      </div>
    </header>
  )
}
