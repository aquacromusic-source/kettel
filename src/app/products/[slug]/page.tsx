import { PRODUCTS, getProductByHandle, isServiceProduct } from '@/lib/products'
import { notFound } from 'next/navigation'
import AnnouncementBar from '@/components/AnnouncementBar'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProductPageClient from '@/components/product/ProductPageClient'

export async function generateStaticParams() {
  return PRODUCTS.filter(p => !isServiceProduct(p)).map(p => ({ slug: p.handle }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProductByHandle(params.slug)
  if (!p) return { title: 'Produit introuvable' }
  return {
    title: `${p.title} — ${p.subtitle} | STRAP.`,
    description: p.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductByHandle(params.slug)
  if (!product) notFound()

  return (
    <main style={{ background: '#0B0B0C', minHeight: '100vh' }}>
      <AnnouncementBar />
      <NavBar />
      <ProductPageClient product={product} />
      <Footer />
    </main>
  )
}
