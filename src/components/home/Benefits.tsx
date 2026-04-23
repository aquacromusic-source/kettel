'use client'
import { T } from '../tokens'

export default function Benefits() {
  const items = [
    { k: '01', t: 'Style quotidien', d: 'Un bracelet sport sobre, mixte, pensé pour être porté 7j/7 — au bureau, à l\'entraînement, sous la manche d\'un pull.' },
    { k: '02', t: 'Inspiré par ton sport', d: 'Pendentif à ton sport — football, tennis, boxe, golf, rugby, kettlebell et plus encore. 15+ disciplines disponibles.' },
    { k: '03', t: 'Cordon interchangeable', d: 'Change de couleur en 5 secondes. 8+ teintes de cordons tressés disponibles. Fabriqués en France.' },
  ]
  return (
    <section style={{ padding: '100px 48px', borderBottom: `1px solid ${T.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        {items.map(it => (
          <div key={it.k} style={{ borderTop: `1px solid ${T.line}`, paddingTop: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
              <span className="strap-mono" style={{ color: T.accent }}>{it.k} — Pourquoi STRAP.</span>
              <span className="strap-mono" style={{ color: T.fog2 }}>/ 03</span>
            </div>
            <h3 className="strap-display" style={{ fontSize: 36, color: T.bone, margin: 0 }}>{it.t}</h3>
            <p style={{ fontSize: 15, color: T.fog, lineHeight: 1.55, marginTop: 16, maxWidth: 340 }}>{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
