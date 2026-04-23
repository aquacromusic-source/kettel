'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { T, CORD_COLORS } from './tokens'
import { IconStar, IconHeart, IconArrow } from './Icons'
import type { Product } from '@/lib/products'

const PAGE_SIZE = 12

const SPORT_LABELS: Record<string, string> = {
  muscu: 'Fitness',
  football: 'Football',
  basketball: 'Basketball',
  tennis: 'Tennis',
  rugby: 'Rugby',
  golf: 'Golf',
  boxe: 'Boxe',
  cyclisme: 'Vélo',
  natation: 'Natation',
  running: 'Running',
  ski: 'Ski',
  handball: 'Handball',
}

const CATEGORY_LABELS: Record<string, string> = {
  signature: 'Signature',
  prestige: 'Prestige',
  massif: 'Argent massif',
  cordon: 'Cordon',
}

export default function CatalogueClient({ products }: { products: Product[] }) {
  const [sport, setSport] = useState<string>('all')
  const [category, setCategory] = useState<string>('all')
  const [page, setPage] = useState(1)

  const sports = useMemo(() => {
    const seen = new Set<string>()
    products.forEach(p => seen.add(p.sport))
    return Array.from(seen).sort()
  }, [products])

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (sport !== 'all' && p.sport !== sport) return false
      if (category !== 'all' && p.category !== category) return false
      return true
    })
  }, [products, sport, category])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleFilter(key: 'sport' | 'category', value: string) {
    if (key === 'sport') setSport(value)
    else setCategory(value)
    setPage(1)
  }

  return (
    <div style={{ padding: 'clamp(32px,4vw,60px) clamp(16px,4vw,48px)' }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <span className="strap-eyebrow">§ Catalogue</span>
        <h1 className="strap-display strap-section-title" style={{ color: T.bone, margin: '12px 0 8px' }}>
          Tous les bracelets.
        </h1>
        <p style={{ color: T.fog, fontSize: 15 }}>{filtered.length} produits</p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
        <button
          onClick={() => handleFilter('sport', 'all')}
          className={sport === 'all' ? 'strap-btn-primary' : 'strap-btn-ghost'}
          style={{ padding: '8px 16px', fontSize: 12, borderRadius: 2 }}
        >Tous</button>
        {sports.map(s => (
          <button
            key={s}
            onClick={() => handleFilter('sport', s)}
            className={sport === s ? 'strap-btn-primary' : 'strap-btn-ghost'}
            style={{ padding: '8px 16px', fontSize: 12, borderRadius: 2 }}
          >{SPORT_LABELS[s] || s}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
        <button
          onClick={() => handleFilter('category', 'all')}
          className={category === 'all' ? 'strap-btn-primary' : 'strap-btn-ghost'}
          style={{ padding: '6px 14px', fontSize: 11, borderRadius: 2 }}
        >Toutes finitions</button>
        {(['signature', 'prestige', 'massif'] as const).map(c => (
          <button
            key={c}
            onClick={() => handleFilter('category', c)}
            className={category === c ? 'strap-btn-primary' : 'strap-btn-ghost'}
            style={{ padding: '6px 14px', fontSize: 11, borderRadius: 2 }}
          >{CATEGORY_LABELS[c]}</button>
        ))}
      </div>

      {/* Grid */}
      <div className="strap-product-grid">
        {paginated.map(p => (
          <article key={p.id} style={{
            background: T.ink2, border: `1px solid ${T.line2}`,
            borderRadius: 4, overflow: 'hidden', position: 'relative',
          }}>
            <div style={{ position: 'relative', aspectRatio: '1', background: T.ink, overflow: 'hidden' }}>
              {p.thumbImage ? (
                <Image
                  src={p.thumbImage}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="strap-placeholder" style={{ width: '100%', height: '100%' }}>
                  STRAP.
                </div>
              )}
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
                  <div className="strap-display strap-product-name" style={{ fontSize: 16, color: T.bone }}>{p.title}</div>
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
                {CORD_COLORS.slice(0, Math.min(5, p.cordColors.length)).map(c => (
                  <span key={c.id} style={{ width: 12, height: 12, borderRadius: '50%', background: c.hex, border: `1px solid ${T.line}` }}/>
                ))}
                {p.cordColors.length > 5 && (
                  <span className="strap-mono" style={{ color: T.fog, marginLeft: 4, fontSize: 9 }}>+{p.cordColors.length - 5}</span>
                )}
              </div>
              <Link href={`/products/${p.handle}`} className="strap-btn-primary" style={{ width: '100%', padding: '12px 0', fontSize: 13, marginTop: 14, borderRadius: 2, gap: 8 }}>
                Personnaliser <IconArrow size={13}/>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 48, flexWrap: 'wrap' }}>
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="strap-btn-ghost"
            style={{ padding: '10px 20px', fontSize: 13, borderRadius: 2, opacity: page === 1 ? 0.4 : 1 }}
          >← Précédent</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={n === page ? 'strap-btn-primary' : 'strap-btn-ghost'}
              style={{ padding: '10px 16px', fontSize: 13, borderRadius: 2, minWidth: 44 }}
            >{n}</button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="strap-btn-ghost"
            style={{ padding: '10px 20px', fontSize: 13, borderRadius: 2, opacity: page === totalPages ? 0.4 : 1 }}
          >Suivant →</button>
        </div>
      )}
    </div>
  )
}
