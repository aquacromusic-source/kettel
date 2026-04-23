'use client'
import { useState } from 'react'
import Link from 'next/link'
import { T, CORD_COLORS } from '../tokens'
import { IconArrow } from '../Icons'
import BraceletPreview from '../BraceletPreview'

export default function PersonaliseTeaser() {
  const [text, setText] = useState('VICTOR')
  const [mode, setMode] = useState<'name'|'initials'|'logo'>('name')
  const [cord, setCord] = useState(CORD_COLORS[7]) // Orange STRAP.

  const steps = [
    { n: 1, t: 'Choisis ton sport', d: 'Football, running, padel…' },
    { n: 2, t: 'Personnalise ta gravure', d: 'Prénom, initiales ou logo' },
    { n: 3, t: 'Accorde le cordon', d: '8+ coloris, interchangeable' },
  ]
  return (
    <section style={{
      padding: '120px 48px',
      background: `linear-gradient(180deg, ${T.ink} 0%, ${T.ink2} 100%)`,
      borderBottom: `1px solid ${T.line2}`,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'center' }}>
        <div>
          <span className="strap-eyebrow">§ 03 — Configurateur</span>
          <h2 className="strap-display" style={{ fontSize: 68, color: T.bone, margin: '12px 0 32px' }}>
            Personnalise.<br/>
            <span style={{ color: T.accent, fontStyle: 'italic', fontWeight: 400 }}>En 3 étapes.</span>
          </h2>
          <p style={{ fontSize: 17, color: T.fog, lineHeight: 1.55, maxWidth: 460, marginBottom: 40 }}>
            Aperçu temps réel. Ce que tu vois à l&apos;écran, tu l&apos;auras au poignet.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {steps.map(st => (
              <div key={st.n} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr auto', alignItems: 'center', gap: 20,
                padding: '22px 0', borderTop: `1px solid ${T.line2}`,
              }}>
                <span className="strap-display" style={{ fontSize: 32, color: T.fog2 }}>0{st.n}</span>
                <div>
                  <div className="strap-display" style={{ fontSize: 20, color: T.bone }}>{st.t}</div>
                  <div style={{ color: T.fog, fontSize: 13, marginTop: 3 }}>{st.d}</div>
                </div>
                <IconArrow/>
              </div>
            ))}
          </div>
          <Link href="/products/le-terrain-football" className="strap-btn-primary" style={{ padding: '18px 28px', fontSize: 15, marginTop: 40, display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 2 }}>
            Commencer ma perso. <IconArrow/>
          </Link>
        </div>

        <div style={{ background: T.ink, border: `1px solid ${T.line}`, borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: `1px solid ${T.line2}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="strap-mono" style={{ color: T.fog }}>APERÇU EN DIRECT</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {(['name', 'initials', 'logo'] as const).map(m => (
                <button key={m} onClick={() => setMode(m)} style={{
                  background: mode === m ? T.accent : 'transparent',
                  color: mode === m ? '#fff' : T.fog,
                  border: `1px solid ${mode === m ? T.accent : T.line}`,
                  padding: '5px 10px', fontSize: 10, fontFamily: T.mono, letterSpacing: '.1em', textTransform: 'uppercase',
                  cursor: 'pointer', borderRadius: 2,
                }}>{m === 'name' ? 'Prénom' : m === 'initials' ? 'Initiales' : 'Logo'}</button>
              ))}
            </div>
          </div>
          <BraceletPreview text={text} mode={mode} cordColor={cord} sport="football" width={600} height={260}/>
          <div style={{ padding: 20, borderTop: `1px solid ${T.line2}` }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <input
                value={text}
                onChange={e => setText(e.target.value.slice(0, 30))}
                placeholder={mode === 'initials' ? 'AB' : 'Tape ton prénom…'}
                style={{
                  flex: 1, background: T.ink3, border: `1px solid ${T.line}`,
                  color: T.bone, padding: '14px 16px', fontSize: 14, fontFamily: T.body, borderRadius: 2, outline: 'none',
                }}
              />
              <div style={{ padding: '0 14px', display: 'flex', alignItems: 'center', border: `1px solid ${T.line}`, borderRadius: 2 }}>
                <span className="strap-mono" style={{ color: text.length > 25 ? T.accent : T.fog }}>{text.length}/30</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 14, alignItems: 'center' }}>
              <span className="strap-mono" style={{ color: T.fog }}>CORDON</span>
              <div style={{ display: 'flex', gap: 6 }}>
                {CORD_COLORS.slice(0, 6).map(c => (
                  <button key={c.id} onClick={() => setCord(c)} title={c.name} style={{
                    width: 22, height: 22, borderRadius: '50%', background: c.hex, cursor: 'pointer', border: 'none',
                    outline: cord.id === c.id ? `2px solid ${T.bone}` : 'none',
                    outlineOffset: 2,
                  }}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
