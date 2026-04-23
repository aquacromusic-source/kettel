'use client'
import { useState } from 'react'
import Link from 'next/link'
import { T } from '../tokens'
import { IconArrow } from '../Icons'
import BraceletPreview from '../BraceletPreview'

export default function HomeHero() {
  const [text, setText] = useState('ALWAYS ON')

  return (
    <section className="strap-hero-section">
      <div className="strap-hero-grid">
        {/* Text column */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <span style={{ width: 28, height: 1, background: T.accent }}/>
            <span className="strap-mono" style={{ color: T.accent }}>COLLECTION 04 — ÉDITION SPORT QUOTIDIEN</span>
          </div>
          <h1 className="strap-display strap-hero-title" style={{ color: T.bone, margin: 0 }}>
            Porte ton sport.<br/>
            <span style={{ color: T.fog2 }}>Chaque</span> <em style={{ fontStyle: 'italic', fontWeight: 400 }}>jour.</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: T.fog, maxWidth: 460, marginTop: 28 }}>
            Un bracelet sport pensé pour se porter du terrain au bureau. Pendentif à ton sport, cordon interchangeable, résistant à l&apos;eau.
          </p>

          <div className="strap-hero-ctas">
            <Link href="/products/bracelet-kettlebell-rose-gold" className="strap-btn-primary strap-hero-cta-primary" style={{ fontSize: 15, gap: 10, borderRadius: 2, display: 'inline-flex', alignItems: 'center' }}>
              Personnaliser mon bracelet <IconArrow/>
            </Link>
            <Link href="/#collection" className="strap-btn-ghost strap-hero-cta-ghost" style={{ fontSize: 15, borderRadius: 2 }}>
              Voir la collection
            </Link>
          </div>

          <div className="strap-hero-stats">
            {[
              { k: '48h', v: 'Gravure & expédition' },
              { k: '30 j.', v: 'Retours offerts' },
              { k: '4.9/5', v: '+8 200 avis' },
            ].map(s => (
              <div key={s.k}>
                <div className="strap-display" style={{ fontSize: 26, color: T.bone }}>{s.k}</div>
                <div className="strap-mono" style={{ color: T.fog, marginTop: 4 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ position: 'relative', aspectRatio: '1/1', background: T.ink2, borderRadius: 4, overflow: 'hidden', border: `1px solid ${T.line2}` }}>
          {/* Vraie photo produit en fond */}
          <img
            src="/images/products/shopify/bracelet-kettlebell-rose-gold-2.jpg"
            alt="Bracelet Kettlebell Rose Gold"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              opacity: 0.9,
            }}
          />
          {/* Overlay dégradé */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, transparent 40%, ${T.ink}dd 100%)`,
          }}/>

          <div style={{
            position: 'absolute', bottom: 18, left: 18, right: 18,
            background: 'rgba(11,11,12,0.82)', backdropFilter: 'blur(10px)',
            border: `1px solid ${T.line}`, borderRadius: 2, padding: 14,
          }}>
            <div className="strap-mono" style={{ color: T.fog, marginBottom: 6 }}>APERÇU GRAVURE EN DIRECT</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                value={text}
                onChange={e => setText(e.target.value.slice(0, 30))}
                placeholder="Tape ton texte…"
                style={{
                  flex: 1, background: T.ink3, border: `1px solid ${T.line}`,
                  color: T.bone, padding: '10px 12px', fontSize: 13, fontFamily: T.body, borderRadius: 2, outline: 'none',
                }}
              />
              <div className="strap-mono" style={{ color: text.length > 25 ? T.accent : T.fog, minWidth: 40, textAlign: 'right' }}>
                {text.length}/30
              </div>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 18, right: 18, display: 'flex', gap: 6, flexDirection: 'column' }}>
            {['360°', 'AR', 'ZOOM'].map(t => (
              <span key={t} className="strap-chip" style={{ background: 'rgba(11,11,12,0.7)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
