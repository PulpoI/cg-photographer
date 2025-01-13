import { notFound } from 'next/navigation'
import { services } from '@/lib/services-data'
import PageHero from '@/components/shared/page-hero'
import ServiceContent from '@/components/services/service-content'

interface ServicePageProps {
  params: {
    type: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.type]

  if (!service) {
    notFound()
  }

  return (
    <>
      <PageHero 
        title={service.title} 
        breadcrumb={service.title}
      />
      <ServiceContent service={service} />
    </>
  )
}

