import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'STRAP. — Bracelets sport personnalisés',
  description: 'Bracelets du quotidien inspirés du sport. Gravés, montés, expédiés depuis notre atelier à Lyon. Football, running, padel, tennis — 11 disciplines.',
  keywords: 'bracelet sport, bracelet personnalisé, gravure bracelet, cadeau sport, bracelet football, bracelet running',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <GoogleAnalytics />
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
