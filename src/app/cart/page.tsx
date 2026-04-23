import AnnouncementBar from '@/components/AnnouncementBar'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CartPageClient from '@/components/cart/CartPageClient'

export default function CartPage() {
  return (
    <main style={{ background: '#0B0B0C', minHeight: '100vh' }}>
      <AnnouncementBar />
      <NavBar />
      <CartPageClient />
      <Footer />
    </main>
  )
}
