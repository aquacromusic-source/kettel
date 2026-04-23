'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { T, CORD_COLORS, FINISHES, GRAV_FONTS, SPORTS } from '../tokens'
import { IconStar, IconCart, IconArrow, IconCheck } from '../Icons'
import { SportIcon } from '../Icons'
import BraceletPreview from '../BraceletPreview'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/lib/products'

export default function ProductPageClient({ product }: { product: Product }) {
  const [step, setStep] = useState(1)
  const [sport, setSport] = useState(product.sport || 'football')
  const [mode, setMode] = useState<'name'|'initials'|'logo'>('name')
  const [text, setText] = useState('')
  const [cord, setCord] = useState(CORD_COLORS[7]) // Orange STRAP. par défaut — visible
  const [finish, setFinish] = useState(FINISHES[0])
  const [font, setFont] = useState(GRAV_FONTS[0])
  const [extras, setExtras] = useState({ gift: false, message: false, extraCord: false })
  const [activeImg, setActiveImg] = useState(0)
  const { addItem } = useCart()

  const extrasPrice = (extras.gift ? 4 : 0) + (extras.message ? 3 : 0) + (extras.extraCord ? 9 : 0)
  const total = product.price + extrasPrice

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: `${product.title} — ${product.subtitle}`,
      sport,
      engravingText: text,
      engravingMode: mode,
      cordColor: cord.name,
      finish: finish.name,
      price: total,
      image: product.thumbImage,
    })
  }

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ padding: 'clamp(12px,3vw,20px) clamp(16px,4vw,48px)', borderBottom: `1px solid ${T.line2}`, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {['Accueil', 'Bracelets', product.subtitle.split(' · ')[0], product.title].map((c, i, arr) => (
          <span key={c} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {i < arr.length - 1 ? (
              <Link href={i === 0 ? '/' : '#'} className="strap-mono" style={{ color: T.fog, textDecoration: 'none' }}>{c}</Link>
            ) : (
              <span className="strap-mono" style={{ color: T.bone }}>{c}</span>
            )}
            {i < arr.length - 1 && <span className="strap-mono" style={{ color: T.fog2 }}>/</span>}
          </span>
        ))}
      </div>

      {/* Main grid */}
      <div className="strap-product-page-grid" style={{ padding: 'clamp(16px,4vw,40px) clamp(16px,4vw,48px) clamp(40px,6vw,80px)' }}>
        {/* Left: sticky preview */}
        <div className="strap-product-preview-sticky">
          <div style={{ background: T.ink2, border: `1px solid ${T.line2}`, borderRadius: 4, overflow: 'hidden', aspectRatio: '1' }}>
            <div style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.line2}` }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['Live', '360°', 'AR'].map((t, i) => (
                  <span key={t} className="strap-chip" style={{ background: i === 0 ? T.accent : 'transparent', color: i === 0 ? '#fff' : T.fog, borderColor: i === 0 ? T.accent : T.line }}>{t}</span>
                ))}
              </div>
              <span className="strap-mono" style={{ color: T.fog }}>{product.title.toUpperCase()}</span>
            </div>
            <div style={{ position: 'relative', height: 'calc(100% - 50px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {activeImg === 0 ? (
                <BraceletPreview text={text || product.title} mode={mode} sport={sport} cordColor={cord} finish={finish} font={font} width={500} height={380}/>
              ) : (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src={product.images[activeImg - 1] || product.heroImage}
                    alt={product.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <button onClick={() => setActiveImg(0)} style={{
              flex: 1, aspectRatio: '1', border: `1px solid ${activeImg === 0 ? T.accent : T.line}`,
              background: T.ink2, borderRadius: 2, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: T.mono, fontSize: 9, color: T.fog, textTransform: 'uppercase',
            }}>Live</button>
            {product.images.slice(0, 3).map((img, i) => (
              <button key={i} onClick={() => setActiveImg(i + 1)} style={{
                flex: 1, aspectRatio: '1', border: `1px solid ${activeImg === i + 1 ? T.accent : T.line}`,
                background: T.ink2, borderRadius: 2, overflow: 'hidden', cursor: 'pointer', position: 'relative',
              }}>
                <Image src={img} alt="" fill style={{ objectFit: 'cover' }}/>
              </button>
            ))}
          </div>
        </div>

        {/* Right: config */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="strap-mono" style={{ color: T.accent }}>SPORT · {product.subtitle.split(' · ')[0].toUpperCase()}</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: T.fog2 }}/>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: T.accent }}>
              {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={11}/>)}
              <span className="strap-mono" style={{ color: T.fog, marginLeft: 4 }}>4.9 · 1 284 avis</span>
            </div>
          </div>
          <h1 className="strap-display" style={{ fontSize: 52, color: T.bone, margin: 0 }}>{product.title}.</h1>
          <div className="strap-mono" style={{ color: T.fog2, marginTop: 6 }}>{product.subtitle}</div>
          <p style={{ color: T.fog, fontSize: 15, lineHeight: 1.55, marginTop: 14 }}>{product.description}</p>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 20 }}>
            <span className="strap-display" style={{ fontSize: 40, color: T.bone }}>{total}€</span>
            {product.comparePrice && (
              <>
                <span style={{ color: T.fog, textDecoration: 'line-through', fontSize: 16 }}>{product.comparePrice}€</span>
                <span className="strap-mono" style={{ color: T.accent }}>—{Math.round((1 - product.price / product.comparePrice) * 100)}%</span>
              </>
            )}
          </div>
          <div className="strap-mono" style={{ color: T.fog, marginTop: 6 }}>OU 3× {(total / 3).toFixed(2).replace('.', ',')}€ SANS FRAIS</div>

          {/* Stepper tabs */}
          <div style={{ marginTop: 36, border: `1px solid ${T.line}`, borderRadius: 4 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: `1px solid ${T.line}` }}>
              {['Sport', 'Gravure', 'Style'].map((s, i) => (
                <button key={s} onClick={() => setStep(i + 1)} style={{
                  background: step === i + 1 ? T.ink2 : 'transparent', color: T.bone,
                  border: 'none', cursor: 'pointer', padding: '16px 20px', textAlign: 'left',
                  borderRight: i < 2 ? `1px solid ${T.line}` : 'none',
                  borderBottom: step === i + 1 ? `2px solid ${T.accent}` : '2px solid transparent',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%',
                    border: `1px solid ${step > i + 1 ? T.accent : step === i + 1 ? T.bone : T.line}`,
                    background: step > i + 1 ? T.accent : 'transparent',
                    color: step > i + 1 ? '#fff' : T.bone,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: T.mono, fontSize: 11, fontWeight: 600, flexShrink: 0,
                  }}>{step > i + 1 ? <IconCheck size={12}/> : `0${i + 1}`}</div>
                  <div>
                    <div className="strap-mono" style={{ color: T.fog }}>ÉTAPE {i + 1}</div>
                    <div style={{ fontFamily: T.display, fontWeight: 500, fontSize: 15 }}>{s}</div>
                  </div>
                </button>
              ))}
            </div>
            <div style={{ padding: 24 }}>
              {step === 1 && <Step1 sport={sport} setSport={setSport}/>}
              {step === 2 && <Step2 text={text} setText={setText} mode={mode} setMode={setMode} font={font} setFont={setFont}/>}
              {step === 3 && <Step3 cord={cord} setCord={setCord} finish={finish} setFinish={setFinish}/>}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28, paddingTop: 20, borderTop: `1px solid ${T.line2}` }}>
                <button className="strap-btn-ghost" disabled={step === 1} onClick={() => setStep(s => Math.max(1, s - 1))} style={{ padding: '12px 18px', fontSize: 13, borderRadius: 2, opacity: step === 1 ? 0.4 : 1 }}>
                  ← Précédent
                </button>
                {step < 3 ? (
                  <button className="strap-btn-primary" onClick={() => setStep(s => s + 1)} style={{ padding: '12px 22px', fontSize: 13, borderRadius: 2, gap: 8 }}>
                    Suivant <IconArrow size={13}/>
                  </button>
                ) : (
                  <span className="strap-mono" style={{ color: T.accent, alignSelf: 'center' }}>✓ PRÊT POUR LE PANIER</span>
                )}
              </div>
            </div>
          </div>

          {/* Upsells */}
          <div style={{ marginTop: 28 }}>
            <div className="strap-mono" style={{ color: T.fog, marginBottom: 14 }}>§ COMPLÈTE TON BRACELET</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { key: 'gift' as const, t: 'Écrin cadeau premium', d: 'Boîte aimantée noire, carte de motivation', p: 4 },
                { key: 'message' as const, t: 'Carte message personnalisée', d: '80 caractères, soignée par notre équipe', p: 3 },
                { key: 'extraCord' as const, t: 'Cordon supplémentaire (—50%)', d: '2e cordon à moitié prix — change en 5s', p: 9 },
              ].map(u => (
                <label key={u.key} style={{
                  display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
                  border: `1px solid ${extras[u.key] ? T.accent : T.line}`,
                  background: extras[u.key] ? 'rgba(255,74,28,0.06)' : T.ink2,
                  borderRadius: 2, cursor: 'pointer',
                }}>
                  <input type="checkbox" checked={extras[u.key]} onChange={e => setExtras(p => ({ ...p, [u.key]: e.target.checked }))} style={{ accentColor: T.accent, width: 18, height: 18 }}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: T.bone, fontFamily: T.display, fontWeight: 500, fontSize: 14 }}>{u.t}</div>
                    <div className="strap-mono" style={{ color: T.fog, marginTop: 3 }}>{u.d}</div>
                  </div>
                  <div className="strap-display" style={{ fontSize: 16, color: T.bone }}>+{u.p}€</div>
                </label>
              ))}
            </div>
          </div>

          {/* Summary + CTA */}
          <div style={{ marginTop: 28, padding: 22, background: T.ink2, border: `1px solid ${T.line}`, borderRadius: 4 }}>
            <div className="strap-mono" style={{ color: T.fog, marginBottom: 14 }}>RÉSUMÉ DE TA PERSO.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13 }}>
              {[
                ['Sport', SPORTS.find(s => s.id === sport)?.name || sport],
                ['Gravure', mode === 'logo' ? `Logo ${sport}` : `${mode === 'initials' ? 'Initiales' : 'Prénom'} · "${text || '—'}"`],
                ['Police', font.name],
                ['Cordon', cord.name],
                ['Finition', finish.name],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: T.fog }}>{k}</span>
                  <span style={{ color: T.bone }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 14, marginTop: 14, borderTop: `1px solid ${T.line2}` }}>
              <span className="strap-display" style={{ fontSize: 15, color: T.bone }}>Total</span>
              <span className="strap-display" style={{ fontSize: 22, color: T.bone }}>{total}€</span>
            </div>
            <button className="strap-btn-primary" onClick={handleAddToCart} style={{
              width: '100%', padding: '18px 0', fontSize: 15, marginTop: 16, borderRadius: 2, gap: 10,
            }}>
              <IconCart size={17}/> Ajouter au panier — {total}€
            </button>
            <div style={{ display: 'flex', gap: 14, marginTop: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Paiement sécurisé', 'Retours 30j', 'Livraison offerte dès 59€', 'Écrin inclus'].map(r => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 6, color: T.fog }}>
                  <IconCheck size={11}/> <span className="strap-mono">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div style={{ marginTop: 32 }}>
            <div className="strap-mono" style={{ color: T.fog, marginBottom: 14 }}>§ CARACTÉRISTIQUES</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
              {product.specs.map(s => (
                <div key={s.key} style={{ padding: '14px 0', borderBottom: `1px solid ${T.line2}` }}>
                  <div className="strap-mono" style={{ color: T.fog, marginBottom: 4 }}>{s.key}</div>
                  <div style={{ color: T.bone, fontSize: 14, fontFamily: T.display, fontWeight: 500 }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gift band */}
      <section className="strap-gift-band" style={{ background: T.accent }}>
        <div>
          <span className="strap-mono" style={{ color: 'rgba(255,255,255,0.8)' }}>PRÊT À OFFRIR</span>
          <h2 className="strap-display strap-gift-title" style={{ color: '#fff', margin: '8px 0 0' }}>Une idée cadeau qu&apos;on n&apos;oublie pas.</h2>
        </div>
        <button className="strap-gift-btn" style={{ background: '#fff', color: T.ink, border: 'none', fontFamily: T.display, fontWeight: 600, fontSize: 15, cursor: 'pointer', borderRadius: 2, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          Ajouter l&apos;écrin cadeau <IconArrow/>
        </button>
      </section>
    </>
  )
}

// Step 1 — Sport
function Step1({ sport, setSport }: { sport: string, setSport: (s: string) => void }) {
  return (
    <div>
      <div className="strap-display" style={{ fontSize: 22, color: T.bone, marginBottom: 6 }}>Quel est ton terrain ?</div>
      <p style={{ color: T.fog, fontSize: 13, marginBottom: 18 }}>Le sport qui sera représenté sur ton bracelet.</p>
      <div className="strap-sport-grid">
        {SPORTS.map(s => (
          <button key={s.id} onClick={() => setSport(s.id)} style={{
            background: sport === s.id ? T.accent : T.ink,
            color: sport === s.id ? '#fff' : T.bone,
            border: `1px solid ${sport === s.id ? T.accent : T.line}`,
            padding: '16px 8px', cursor: 'pointer', borderRadius: 2,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          }}>
            <SportIcon sport={s.id} size={22} color="currentColor"/>
            <span style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase' }}>{s.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// Step 2 — Gravure
function Step2({ text, setText, mode, setMode, font, setFont }: {
  text: string, setText: (t: string) => void,
  mode: 'name'|'initials'|'logo', setMode: (m: 'name'|'initials'|'logo') => void,
  font: typeof GRAV_FONTS[0], setFont: (f: typeof GRAV_FONTS[0]) => void,
}) {
  return (
    <div>
      <div className="strap-display" style={{ fontSize: 22, color: T.bone, marginBottom: 6 }}>Personnalise ta gravure.</div>
      <p style={{ color: T.fog, fontSize: 13, marginBottom: 18 }}>Prénom, initiales ou logo. 30 caractères max.</p>
      <div style={{ display: 'flex', gap: 4, marginBottom: 16, background: T.ink, padding: 4, border: `1px solid ${T.line}`, borderRadius: 2 }}>
        {([['name', 'Prénom'], ['initials', 'Initiales'], ['logo', 'Logo']] as [string, string][]).map(([id, l]) => (
          <button key={id} onClick={() => setMode(id as 'name'|'initials'|'logo')} style={{
            flex: 1, background: mode === id ? T.accent : 'transparent',
            color: mode === id ? '#fff' : T.bone, border: 'none', cursor: 'pointer',
            padding: '12px 0', fontSize: 12, fontFamily: T.mono, letterSpacing: '.1em', textTransform: 'uppercase',
          }}>{l}</button>
        ))}
      </div>
      {mode !== 'logo' && (
        <>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            <input value={text} onChange={e => setText(e.target.value.slice(0, 30))}
              placeholder={mode === 'initials' ? 'Ex. AB' : 'Ex. Victor'}
              style={{ flex: 1, background: T.ink, border: `1px solid ${T.line}`, color: T.bone, padding: '14px 16px', fontSize: 15, fontFamily: T.body, borderRadius: 2, outline: 'none' }}
            />
            <div style={{ padding: '0 14px', display: 'flex', alignItems: 'center', border: `1px solid ${T.line}`, borderRadius: 2 }}>
              <span className="strap-mono" style={{ color: text.length > 25 ? T.accent : T.fog }}>{text.length}/30</span>
            </div>
          </div>
          <div className="strap-mono" style={{ color: T.fog, marginBottom: 10 }}>POLICE DE GRAVURE</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {GRAV_FONTS.map(f => (
              <button key={f.id} onClick={() => setFont(f)} style={{
                background: font.id === f.id ? T.ink : T.ink2, color: T.bone,
                border: `1px solid ${font.id === f.id ? T.accent : T.line}`,
                padding: '14px 8px', cursor: 'pointer', borderRadius: 2,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              }}>
                <span style={{ fontFamily: f.css, fontSize: 20, fontWeight: f.weight }}>Aa</span>
                <span className="strap-mono" style={{ color: T.fog }}>{f.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
      {mode === 'logo' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {SPORTS.slice(0, 8).map(s => (
            <button key={s.id} style={{
              aspectRatio: '1', background: T.ink, border: `1px solid ${T.line}`,
              cursor: 'pointer', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.bone,
            }}>
              <SportIcon sport={s.id} size={24} color="currentColor"/>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Step 3 — Style
function Step3({ cord, setCord, finish, setFinish }: {
  cord: typeof CORD_COLORS[0], setCord: (c: typeof CORD_COLORS[0]) => void,
  finish: typeof FINISHES[0], setFinish: (f: typeof FINISHES[0]) => void,
}) {
  return (
    <div>
      <div className="strap-display" style={{ fontSize: 22, color: T.bone, marginBottom: 6 }}>Accorde ton style.</div>
      <p style={{ color: T.fog, fontSize: 13, marginBottom: 18 }}>Finition de la plaque et couleur du cordon.</p>
      <div className="strap-mono" style={{ color: T.fog, marginBottom: 10 }}>FINITION DE LA PLAQUE</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 20 }}>
        {FINISHES.map(f => (
          <button key={f.id} onClick={() => setFinish(f)} style={{
            background: T.ink2, border: `1px solid ${finish.id === f.id ? T.accent : T.line}`,
            padding: 10, cursor: 'pointer', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: f.swatch, border: `1px solid ${T.line}`, flexShrink: 0 }}/>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: T.bone, fontFamily: T.display, fontSize: 12, fontWeight: 500 }}>{f.name}</div>
              {finish.id === f.id && <div className="strap-mono" style={{ color: T.accent, marginTop: 2 }}>✓ SÉLECTION</div>}
            </div>
          </button>
        ))}
      </div>
      <div className="strap-mono" style={{ color: T.fog, marginBottom: 10 }}>COULEUR DU CORDON · 8 TEINTES</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {CORD_COLORS.map(c => (
          <button key={c.id} onClick={() => setCord(c)} style={{
            background: T.ink2, border: `1px solid ${cord.id === c.id ? T.accent : T.line}`,
            padding: 10, cursor: 'pointer', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: c.hex, border: `1px solid ${T.line}`, flexShrink: 0 }}/>
            <span style={{ color: T.bone, fontFamily: T.display, fontSize: 11, fontWeight: 500, textAlign: 'left' }}>{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
