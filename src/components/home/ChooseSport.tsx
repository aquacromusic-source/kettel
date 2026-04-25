'use client'
import { useState } from 'react'
import Link from 'next/link'
import { T, SPORTS } from '../tokens'
import { SportIcon, IconPlus, IconArrow } from '../Icons'

const SPORT_LINKS: Record<string, string> = {
  football: '/products/bracelet-football-f8-plaque-or',
  basketball: '/products/bracelet-basketball-silver',
  tennis: '/products/bracelet-tennis-silver',
  running: '/products/bracelet-running-woman-silver',
  muscu: '/products/bracelet-kettlebell-silver',
  cyclisme: '/products/bracelet-velo-maillon-silver',
  boxe: '/products/bracelet-boxe-silver',
  ski: '/products/bracelet-kettlebell-rose-gold',
  padel: '/products/bracelet-ping-pong-argente',
  golf: '/products/bracelet-golf-silver',
  natation: '/products/bracelet-natation-argente',
}

export default function ChooseSport() {
  const [hovered, setHovered] = useState('football')
  return (
    <section id="sports" style={{ padding: '100px 48px', borderBottom: `1px solid ${T.line2}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
        <div>
          <span className="strap-eyebrow">§ 02 — Discipline</span>
          <h2 className="strap-display" style={{ fontSize: 64, color: T.bone, margin: '12px 0 0', maxWidth: 680 }}>
            Choisis ton sport. <span style={{ color: T.fog2 }}>On trouve le bracelet.</span>
          </h2>
        </div>
        <Link href="/catalogue" className="strap-link" style={{ fontSize: 13, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 8 }}>
          Voir tout <IconArrow size={14}/>
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 1, background: T.line, border: `1px solid ${T.line}` }}>
        {SPORTS.map(s => (
          <Link
            key={s.id}
            href={SPORT_LINKS[s.id] || '/catalogue'}
            onMouseEnter={() => setHovered(s.id)}
            style={{
              background: hovered === s.id ? T.ink2 : T.ink,
              padding: '32px 20px', textDecoration: 'none', color: T.bone,
              display: 'flex', flexDirection: 'column', gap: 16, minHeight: 180,
              position: 'relative', transition: 'background .2s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <SportIcon sport={s.id} size={28} color={hovered === s.id ? T.accent : T.bone}/>
              {s.pop && <span className="strap-mono" style={{ color: T.accent }}>TOP</span>}
            </div>
            <div style={{ marginTop: 'auto' }}>
              <div className="strap-mono" style={{ color: T.fog2 }}>{String(SPORTS.indexOf(s) + 1).padStart(2, '0')}</div>
              <div className="strap-display" style={{ fontSize: 20, marginTop: 4 }}>{s.name}</div>
            </div>
          </Link>
        ))}
        <div style={{
          background: T.accent, padding: '32px 20px', textDecoration: 'none', color: '#fff',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 180, cursor: 'default',
        }}>
          <IconPlus size={22}/>
          <div>
            <div className="strap-mono" style={{ opacity: 0.7 }}>BIENTÔT</div>
            <div className="strap-display" style={{ fontSize: 20, marginTop: 4 }}>+5 sports</div>
          </div>
        </div>
      </div>
    </section>
  )
}
