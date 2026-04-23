'use client'
import Link from 'next/link'
import Image from 'next/image'
import { T } from '../tokens'
import { IconArrow } from '../Icons'

export default function GiftSection() {
  return (
    <section id="gift" style={{
      padding: '120px 48px',
      background: `linear-gradient(135deg, ${T.accent} 0%, ${T.accentDeep} 100%)`,
      position: 'relative', overflow: 'hidden', borderBottom: `1px solid ${T.line2}`,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <span className="strap-mono" style={{ color: '#fff', opacity: 0.8 }}>§ 06 — IDÉE CADEAU</span>
          <h2 className="strap-display" style={{ fontSize: 84, color: '#fff', margin: '12px 0 24px', lineHeight: 0.95 }}>
            Prêt à offrir.<br/>
            <em style={{ fontStyle: 'italic', fontWeight: 400, opacity: 0.85 }}>Prêt à marquer.</em>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, maxWidth: 480 }}>
            Bracelet personnalisé + écrin aimantée + carte de motivation. Tout est inclus. Livré en 48h.
          </p>
          <div style={{ display: 'flex', gap: 36, marginTop: 40 }}>
            {[
              { t: 'Écrin cadeau', p: 'Inclus' },
              { t: 'Carte perso.', p: '+3€' },
              { t: 'Livraison offerte', p: 'dès 59€' },
            ].map(o => (
              <div key={o.t} style={{ color: '#fff', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: 14, flex: 1 }}>
                <div className="strap-mono" style={{ opacity: 0.7 }}>{o.p}</div>
                <div style={{ fontFamily: T.display, fontSize: 18, fontWeight: 500, marginTop: 3 }}>{o.t}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            <Link href="/products/le-terrain-football" style={{
              background: '#fff', color: T.ink, padding: '18px 28px', fontSize: 15,
              textDecoration: 'none', fontFamily: T.display, fontWeight: 600, borderRadius: 2,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>Composer un cadeau <IconArrow/></Link>
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '1/1.1', borderRadius: 4, overflow: 'hidden', background: 'rgba(0,0,0,0.15)' }}>
          <Image
            src="/images/products/packaging-2.png"
            alt="Packaging cadeau STRAP."
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
          <div style={{
            position: 'absolute', bottom: 18, left: 18, right: 18,
            background: 'rgba(11,11,12,0.88)', backdropFilter: 'blur(12px)', borderRadius: 2,
            padding: 18, color: T.bone,
          }}>
            <div className="strap-mono" style={{ color: T.accent, marginBottom: 4 }}>OFFRE EN COURS</div>
            <div className="strap-display" style={{ fontSize: 20 }}>Écrin cadeau offert à partir de 49€</div>
            <div style={{ fontSize: 13, color: T.fog, marginTop: 4 }}>Automatique au panier</div>
          </div>
        </div>
      </div>
    </section>
  )
}
