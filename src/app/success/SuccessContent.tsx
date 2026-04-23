'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div style={{ textAlign: 'center', maxWidth: 600 }}>
      <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
      <h1 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 40, color: '#F5F2EE', marginBottom: 16 }}>
        Commande confirmée !
      </h1>
      <p style={{ color: '#7A7068', fontSize: 18, marginBottom: 8 }}>
        Paiement reçu. Ton bracelet est en préparation 🎉
      </p>
      {sessionId && (
        <p style={{ color: '#4A4038', fontFamily: 'monospace', fontSize: 12, marginBottom: 40 }}>
          Réf : {sessionId.slice(0, 24)}...
        </p>
      )}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/catalogue" style={{ padding: '16px 28px', background: '#C8A96E', color: '#0B0B0C', fontWeight: 600, borderRadius: 2, textDecoration: 'none', fontSize: 15 }}>
          Continuer mes achats
        </Link>
        <Link href="/" style={{ padding: '16px 24px', border: '1px solid #2A2520', color: '#F5F2EE', borderRadius: 2, textDecoration: 'none', fontSize: 15 }}>
          Accueil
        </Link>
      </div>
    </div>
  )
}
