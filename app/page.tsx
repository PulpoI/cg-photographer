import Hero from '@/components/home/hero'
import Stats from '@/components/home/stats'
import MainContent from '@/components/home/main-content'
import Services from '@/components/home/services'
import Portfolio from '@/components/home/portfolio'
import Contact from '@/components/home/contact'
import LifePhotos from '@/components/home/life-photos'
import GalleryRing from '@/components/shared/gallery-ring'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <MainContent />
      <LifePhotos />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  )
}

