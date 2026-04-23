import Link from 'next/link'

export default function CancelPage() {
  return (
    <main style={{ background: '#0B0B0C', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 600 }}>
        <div style={{ fontSize: 64, marginBottom: 20 }}>❌</div>
        <h1 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 40, color: '#F5F2EE', marginBottom: 16 }}>
          Paiement annulé
        </h1>
        <p style={{ color: '#7A7068', fontSize: 18, marginBottom: 40 }}>
          Ton panier est toujours là. Tu peux reprendre ta commande quand tu veux.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/cart" style={{ padding: '16px 28px', background: '#C8A96E', color: '#0B0B0C', fontWeight: 600, borderRadius: 2, textDecoration: 'none', fontSize: 15 }}>
            Retourner au panier
          </Link>
          <Link href="/catalogue" style={{ padding: '16px 24px', border: '1px solid #2A2520', color: '#F5F2EE', borderRadius: 2, textDecoration: 'none', fontSize: 15 }}>
            Continuer mes achats
          </Link>
        </div>
      </div>
    </main>
  )
}
