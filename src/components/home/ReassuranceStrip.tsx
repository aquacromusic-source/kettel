'use client'
import { T } from '../tokens'
import { IconCheck } from '../Icons'

export default function ReassuranceStrip() {
  const items = [
    { t: 'Livraison offerte dès 59€', d: 'Colissimo · 2–3 jours' },
    { t: 'Pendentif plaqué garanti', d: 'Argent, Or, Rose Gold · 10 microns' },
    { t: 'Retours 30 jours', d: 'Gratuits · sans condition' },
    { t: 'Paiement sécurisé', d: '3x sans frais · CB, PayPal' },
  ]
  return (
    <section style={{ padding: '14px 48px', borderBottom: `1px solid ${T.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
        {items.map(it => (
          <div key={it.t} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.ink2, border: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.accent, flexShrink: 0 }}>
              <IconCheck/>
            </div>
            <div>
              <div style={{ color: T.bone, fontFamily: T.display, fontWeight: 500, fontSize: 14 }}>{it.t}</div>
              <div className="strap-mono" style={{ color: T.fog, marginTop: 2 }}>{it.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
