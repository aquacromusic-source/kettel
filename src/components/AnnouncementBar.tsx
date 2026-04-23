'use client'
import { T } from './tokens'

const items = [
  { text: 'LIVRAISON OFFERTE DÈS 59€', accent: false },
  { text: '·', accent: false, dim: true },
  { text: 'GRAVURE INCLUSE — RENDU 48H', accent: false },
  { text: '·', accent: false, dim: true },
  { text: 'RETOURS 30 JOURS', accent: false },
  { text: '·', accent: false, dim: true },
  { text: '—20% SUR LE DUO AVEC CODE BINÔME', accent: true },
  { text: '·', accent: false, dim: true },
]

export default function AnnouncementBar() {
  return (
    <div style={{
      background: T.ink,
      borderBottom: `1px solid ${T.line2}`,
      padding: '9px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Two identical sets side by side — animation slides from right to left */}
      <div style={{
        display: 'flex',
        gap: 0,
        whiteSpace: 'nowrap',
        animation: 'strap-marquee 36s linear infinite',
        width: 'max-content',
        willChange: 'transform',
      }}>
        {[0, 1].map((k) => (
          <span key={k} style={{ display: 'inline-flex', gap: 48, paddingRight: 48 }}>
            {items.map((item, i) => (
              <span
                key={i}
                className="strap-mono"
                style={{ color: item.accent ? T.accent : item.dim ? T.fog2 : T.fog }}
              >
                {item.text}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
