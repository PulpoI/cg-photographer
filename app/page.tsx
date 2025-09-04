import Hero from '@/components/home/hero'
import Stats from '@/components/home/stats'
import MainContent from '@/components/home/main-content'
import Services from '@/components/shared/services'
import Portfolio from '@/components/home/portfolio'
import Contact from '@/components/home/contact'
import LifePhotos from '@/components/home/life-photos'

export default function Home() {
  return (
    <main>
      <Hero />
      <MainContent />
      <Stats />
      <Services />
      {/* <LifePhotos /> */}
      {/* <Portfolio /> */}
      <Contact />
    </main>
  )
}

