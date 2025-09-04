
import ServiceCard from '@/components/shared/service-card'
import { services } from '@/lib/services-data'
import { Church, PartyPopper, Baby, Ticket, Cake, Store } from 'lucide-react'

export default function ServicesGrid() {
  // const services = [
  //   {
  //     title: "Fotografía Comercial",
  //     description: "Servicios profesionales de fotografía para empresas y productos",
  //     icon: Camera,
  //     href: "/services/commercial"
  //   },
  //   {
  //     title: "Fotografía",
  //     description: "Sesiones fotográficas profesionales para todas las ocasiones",
  //     icon: Camera,
  //     href: "/services/photography"
  //   },
  //   {
  //     title: "Videografía",
  //     description: "Servicios de producción de video de alta calidad",
  //     icon: Video,
  //     href: "/services/videography"
  //   },
  //   {
  //     title: "Edición",
  //     description: "Edición profesional de fotos y videos",
  //     icon: Edit,
  //     href: "/services/editing"
  //   },
  //   {
  //     title: "Branding",
  //     description: "Servicios de marca y diseño visual",
  //     icon: Layers,
  //     href: "/services/branding"
  //   },
  //   {
  //     title: "Eventos",
  //     description: "Cobertura completa de eventos especiales",
  //     icon: Bell,
  //     href: "/services/events"
  //   }
  // ]

  return (
    <section className="py-20">
      <div className="container px-4">  
        <div className="mb-12 text-center">
          <span className="text-amber-600">Mis Servicios</span>
          <h2 className="mt-2 text-3xl font-bold">
            La vida a través de fotos
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(services).map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.id === 'bodas' ? Church : service.id === 'quinceaneras' ? PartyPopper : service.id === 'infantiles' ? Baby : service.id === 'eventos' ? Ticket : service.id === 'cumpleanos' ? Cake : service.id === 'corporativos' ? Store : Store}
              href={`/servicios/${service.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

