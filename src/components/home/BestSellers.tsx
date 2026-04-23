'use client'
import Link from 'next/link'
import Image from 'next/image'
import { T, CORD_COLORS } from '../tokens'
import { IconStar, IconHeart, IconArrow, IconChevron } from '../Icons'
import type { Product } from '@/lib/products'

export default function BestSellers({ products }: { products: Product[] }) {
  return (
    <section id="collection" style={{ padding: '100px 48px', borderBottom: `1px solid ${T.line2}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
        <div>
          <span className="strap-eyebrow">§ 04 — Les plus portés</span>
          <h2 className="strap-display" style={{ fontSize: 64, color: T.bone, margin: '12px 0 0' }}>
            Les best-sellers.
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button className="strap-btn-ghost" style={{ width: 44, height: 44, borderRadius: '50%' }}><IconChevron dir="left"/></button>
          <button className="strap-btn-ghost" style={{ width: 44, height: 44, borderRadius: '50%' }}><IconChevron dir="right"/></button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {products.map(p => (
          <article key={p.id} style={{
            background: T.ink2, border: `1px solid ${T.line2}`,
            borderRadius: 4, overflow: 'hidden', position: 'relative',
          }}>
            <div style={{ position: 'relative', aspectRatio: '1', background: T.ink, overflow: 'hidden' }}>
              <Image
                src={p.thumbImage}
                alt={p.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {p.badge && (
                <span style={{
                  position: 'absolute', top: 12, left: 12, background: T.accent, color: '#fff',
                  padding: '4px 8px', fontFamily: T.mono, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase',
                  zIndex: 1,
                }}>{p.badge}</span>
              )}
              <button style={{
                position: 'absolute', top: 10, right: 10, width: 36, height: 36,
                background: 'rgba(11,11,12,0.7)', backdropFilter: 'blur(8px)',
                border: `1px solid ${T.line}`, borderRadius: '50%', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.bone,
                zIndex: 1,
              }}><IconHeart size={15}/></button>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                <div>
                  <div className="strap-display" style={{ fontSize: 16, color: T.bone }}>{p.title}</div>
                  <div className="strap-mono" style={{ color: T.fog2, marginTop: 2, fontSize: 10 }}>{p.subtitle}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6, color: T.accent }}>
                    {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={11}/>)}
                    <span className="strap-mono" style={{ color: T.fog, marginLeft: 4 }}>4.9</span>
                  </div>
                </div>
                <div>
                  <div className="strap-display" style={{ fontSize: 18, color: T.bone }}>{p.price}€</div>
                  {p.comparePrice && (
                    <div style={{ color: T.fog, textDecoration: 'line-through', fontSize: 12, textAlign: 'right' }}>{p.comparePrice}€</div>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 5, marginTop: 12, alignItems: 'center' }}>
                {CORD_COLORS.slice(0, 5).map(c => (
                  <span key={c.id} style={{ width: 12, height: 12, borderRadius: '50%', background: c.hex, border: `1px solid ${T.line}` }}/>
                ))}
                <span className="strap-mono" style={{ color: T.fog, marginLeft: 4, fontSize: 9 }}>+3</span>
              </div>
              <Link href={`/products/${p.handle}`} className="strap-btn-primary" style={{ width: '100%', padding: '12px 0', fontSize: 13, marginTop: 14, borderRadius: 2, gap: 8 }}>
                Personnaliser <IconArrow size={13}/>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
