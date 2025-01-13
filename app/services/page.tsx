import PageHero from '@/components/shared/page-hero'
import ServicesGrid from '@/components/services/services-grid'
import ServicesFaqs from '@/components/services/services-faqs'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero 
        title="Mis Servicios" 
        breadcrumb="Servicios"
      />
      <ServicesGrid />
      <ServicesFaqs />
    </main>
  )
}

