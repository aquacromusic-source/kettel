'use client'
import { T } from '../tokens'
import { IconStar, IconCheck } from '../Icons'

const reviews = [
  { n: 'Marine L.', s: 'Running', r: 5, t: "Je le porte tous les jours sous ma montre connectée. Au boulot personne ne voit que c'est un bracelet sport. C'est exactement ce que je cherchais.", d: 'il y a 3 jours' },
  { n: 'Karim B.', s: 'Football', r: 5, t: "Offert à mon frère pour ses 30 ans. Il l'a pas enlevé depuis. L'emballage est vraiment soigné et le pendentif ballon est nickel.", d: 'il y a 1 semaine' },
  { n: 'Camille V.', s: 'Golf', r: 5, t: "Le cordon kaki est magnifique avec la finition platine. Vraiment premium pour le prix. J'en ai commandé un deuxième en or rose.", d: 'il y a 2 semaines' },
]

export default function SocialProof() {
  return (
    <section style={{ padding: '100px 48px', borderBottom: `1px solid ${T.line2}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 60, alignItems: 'flex-start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <span className="strap-eyebrow">§ 05 — Preuve sociale</span>
          <h2 className="strap-display" style={{ fontSize: 56, color: T.bone, margin: '12px 0 24px' }}>
            8 200 sportifs. Un seul bracelet.
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20 }}>
            <div className="strap-display" style={{ fontSize: 68, color: T.accent }}>4.9</div>
            <div>
              <div style={{ display: 'flex', color: T.accent, gap: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={18}/>)}
              </div>
              <div className="strap-mono" style={{ color: T.fog, marginTop: 4 }}>8 214 AVIS VÉRIFIÉS</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
            {[
              { k: '97%', v: 'Recommandent' },
              { k: '94%', v: 'Offrent à un proche' },
              { k: '48h', v: 'Gravure + expédition' },
            ].map(s => (
              <div key={s.k} style={{ flex: 1, paddingTop: 14, borderTop: `1px solid ${T.line}` }}>
                <div className="strap-display" style={{ fontSize: 22, color: T.bone }}>{s.k}</div>
                <div className="strap-mono" style={{ color: T.fog, marginTop: 4 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: T.ink2, border: `1px solid ${T.line2}`, borderRadius: 4, padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%', background: T.ink3,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: T.display, fontWeight: 600, color: T.bone, fontSize: 14,
                  }}>{r.n.split(' ')[0][0]}{r.n.split(' ')[1][0]}</div>
                  <div>
                    <div style={{ color: T.bone, fontFamily: T.display, fontWeight: 500 }}>{r.n}</div>
                    <div className="strap-mono" style={{ color: T.fog }}>{r.s} · {r.d}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', color: T.accent, gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={13}/>)}
                </div>
              </div>
              <p style={{ color: T.bone, fontSize: 15, lineHeight: 1.55, margin: 0 }}>&ldquo;{r.t}&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
                <IconCheck size={13}/>
                <span className="strap-mono" style={{ color: T.fog }}>ACHAT VÉRIFIÉ</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
