'use client'
import { useState } from 'react'
import { T } from '../tokens'
import { IconPlus, IconArrow } from '../Icons'

const qs = [
  { q: 'Combien de temps pour expédier ?', a: 'Votre bracelet est préparé et expédié sous 48h ouvrées depuis notre atelier. Livraison standard en France sous 2–3 jours. Livraison express disponible au checkout.' },
  { q: 'Le bracelet résiste-t-il à l\'eau ?', a: 'Oui. Le cordon polyester tressé et les pendentifs plaqués résistent à l\'eau, à la transpiration et aux chocs du quotidien. Évitez une immersion prolongée en chlore.' },
  { q: 'Puis-je changer de cordon ?', a: 'Absolument — c\'est l\'un de nos avantages. Tous les bracelets se déclipsent en 5 secondes. Des cordons supplémentaires sont disponibles à partir de 12€.' },
  { q: 'Quelle taille choisir ?', a: 'Nos bracelets sont réglables de 15 à 21 cm de tour de poignet (voire 22 cm sur certains modèles). Convient à la très grande majorité des poignets adultes.' },
  { q: 'Comment fonctionne le retour ?', a: '30 jours pour changer d\'avis, retours offerts en France. Les bracelets retournés doivent être en état neuf, sans gravure personnalisée.' },
  { q: 'La gravure est-elle incluse ?', a: 'La personnalisation (choix du pendentif sport) est incluse dans le prix. La gravure d\'un texte sur la plaque est disponible en option.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section style={{ padding: '100px 48px', borderBottom: `1px solid ${T.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'flex-start' }}>
        <div>
          <span className="strap-eyebrow">§ 07 — Questions</span>
          <h2 className="strap-display" style={{ fontSize: 56, color: T.bone, margin: '12px 0 24px' }}>
            Tout ce que tu veux savoir.
          </h2>
          <p style={{ color: T.fog, fontSize: 15, lineHeight: 1.55 }}>
            Besoin d&apos;autre chose ? Notre équipe répond en moins de 4h ouvrées.
          </p>
          <button className="strap-btn-ghost" style={{ padding: '14px 22px', marginTop: 24, borderRadius: 2, display: 'inline-flex', gap: 10 }}>
            Écrire au support <IconArrow size={14}/>
          </button>
        </div>
        <div>
          {qs.map((it, i) => (
            <div key={i} style={{ borderTop: `1px solid ${T.line}` }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
                color: T.bone, padding: '24px 0', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', fontFamily: T.display, fontSize: 20, fontWeight: 500, textAlign: 'left',
              }}>
                <span>{it.q}</span>
                <span style={{ color: T.accent, transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .2s', flexShrink: 0 }}>
                  <IconPlus size={18}/>
                </span>
              </button>
              {open === i && (
                <p style={{ color: T.fog, fontSize: 15, lineHeight: 1.6, margin: 0, paddingBottom: 24, maxWidth: 620 }}>{it.a}</p>
              )}
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${T.line}` }}/>
        </div>
      </div>
    </section>
  )
}
