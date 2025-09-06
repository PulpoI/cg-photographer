import PageHero from '@/components/shared/page-hero'
import Faqs from '@/components/shared/faqs'
import Services from '@/components/shared/services'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-text-stone-850">
      <PageHero 
        title="Mis Servicios" 
        breadcrumb="Servicios"
      />
      <Services />
      <Faqs />
    </main>
  )
}

