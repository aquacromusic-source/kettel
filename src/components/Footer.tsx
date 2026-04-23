'use client'
import { T } from './tokens'

export default function Footer() {
  return (
    <footer style={{ padding: '80px 48px 40px', background: T.ink }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: 48 }}>
        <div>
          <div className="strap-display" style={{ fontSize: 42, color: T.bone, letterSpacing: '-0.04em' }}>
            STRAP<span style={{ color: T.accent }}>.</span>
          </div>
          <p style={{ color: T.fog, fontSize: 14, lineHeight: 1.55, marginTop: 16, maxWidth: 320 }}>
            Bracelets du quotidien inspirés du sport. Gravés, montés, expédiés depuis notre atelier à Lyon.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            {['IG', 'TT', 'YT', 'ST'].map(s => (
              <a key={s} href="#" style={{ width: 36, height: 36, borderRadius: '50%', background: T.ink2, border: `1px solid ${T.line}`, color: T.bone, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontFamily: T.mono, fontSize: 10 }}>{s}</a>
            ))}
          </div>
        </div>
        {[
          { h: 'Boutique', l: ['Tous les bracelets', 'Cordons', 'Cartes cadeau', 'Duo & bundles', 'Stock atelier'] },
          { h: 'Par sport', l: ['Football', 'Running', 'Padel', 'Tennis', 'Voir tout'] },
          { h: 'Aide', l: ['Livraison', 'Retours & échanges', 'Guide des tailles', 'Nous contacter', 'FAQ'] },
          { h: 'Maison', l: ['Notre histoire', 'Atelier Lyon', 'Journal', 'Affiliés', 'Presse'] },
        ].map(col => (
          <div key={col.h}>
            <div className="strap-mono" style={{ color: T.fog, marginBottom: 18 }}>{col.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.l.map(i => <li key={i}><a href="#" className="strap-link" style={{ fontSize: 14 }}>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        borderTop: `1px solid ${T.line2}`,
        marginTop: 60,
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span className="strap-mono" style={{ color: T.fog2 }}>© STRAP. STUDIO 2026 — ATELIER FR · LYON 69007</span>
        <div style={{ display: 'flex', gap: 18 }}>
          {['CGV', 'Confidentialité', 'Mentions légales', 'Cookies'].map(l => (
            <a key={l} href="#" className="strap-mono" style={{ color: T.fog }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
