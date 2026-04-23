import { Suspense } from 'react'
import SuccessContent from './SuccessContent'

export default function SuccessPage() {
  return (
    <main style={{ background: '#0B0B0C', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <Suspense fallback={<p style={{ color: '#fff', fontFamily: 'monospace' }}>Chargement...</p>}>
        <SuccessContent />
      </Suspense>
    </main>
  )
}
