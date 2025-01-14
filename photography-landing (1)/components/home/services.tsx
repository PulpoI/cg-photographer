import { Button } from '@/components/ui/button'
import { Camera, Video, Edit } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: "Fotografía",
    description: "Sesiones fotográficas profesionales para todas las ocasiones",
    icon: Camera,
    href: "/services/photography"
  },
  {
    title: "Videografía",
    description: "Servicios de producción de video de alta calidad",
    icon: Video,
    href: "/services/videography"
  },
  {
    title: "Edición",
    description: "Edición profesional de fotos y videos",
    icon: Edit,
    href: "/services/editing"
  }
]

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="space-y-4">
            <service.icon className="h-6 w-6 text-amber-600" />
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-zinc-400">{service.description}</p>
            <Button asChild variant="outline">
              <Link href={service.href}>Saber más</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

