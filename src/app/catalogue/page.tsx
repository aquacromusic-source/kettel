import NavBar from '@/components/NavBar'
import AnnouncementBar from '@/components/AnnouncementBar'
import Footer from '@/components/Footer'
import CatalogueClient from '@/components/CatalogueClient'
import { PRODUCTS } from '@/lib/products'

export default function CataloguePage() {
  return (
    <main style={{ background: '#0B0B0C', minHeight: '100vh' }}>
      <AnnouncementBar />
      <NavBar />
      <CatalogueClient products={PRODUCTS} />
      <Footer />
    </main>
  )
}
