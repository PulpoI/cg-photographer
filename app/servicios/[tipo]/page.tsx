import { notFound } from 'next/navigation'
import { services } from '@/lib/services-data'
import PageHero from '@/components/shared/page-hero'
import ServiceContent from '@/components/services/service-content'
import MainContent from '@/components/home/main-content'
import AboutTestimonials from '@/components/about/about-testimonials'
import Faqs from '@/components/shared/faqs'

interface ServicePageProps {
  params: {
    tipo: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.tipo]

  if (!service) {
    notFound()
  }

  return (
    <>
      <PageHero 
        title={service.title} 
        breadcrumb={`Servicios / ${service.title}`}
        serviceId={service.id}
      />
      <MainContent />
      <ServiceContent service={service} />
      <AboutTestimonials />
      <Faqs />
    </>
  )
}

