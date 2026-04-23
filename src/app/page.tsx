import AnnouncementBar from '@/components/AnnouncementBar'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import HomeHero from '@/components/home/HomeHero'
import ReassuranceStrip from '@/components/home/ReassuranceStrip'
import Benefits from '@/components/home/Benefits'
import ChooseSport from '@/components/home/ChooseSport'
import PersonaliseTeaser from '@/components/home/PersonaliseTeaser'
import BestSellers from '@/components/home/BestSellers'
import SocialProof from '@/components/home/SocialProof'
import GiftSection from '@/components/home/GiftSection'
import FAQ from '@/components/home/FAQ'
import { getBestSellers } from '@/lib/products'

export default function HomePage() {
  const featured = getBestSellers()
  return (
    <main style={{ background: '#0B0B0C', minHeight: '100vh' }}>
      <AnnouncementBar />
      <NavBar />
      <HomeHero />
      <ReassuranceStrip />
      <Benefits />
      <ChooseSport />
      <PersonaliseTeaser />
      <BestSellers products={featured} />
      <SocialProof />
      <GiftSection />
      <FAQ />
      <Footer />
    </main>
  )
}
