import { Button } from '@/components/ui/button'
import { Camera, Video, Edit, Church, PartyPopper, Baby } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: "Bodas",
    description: "Capturamos tus momentos más especiales, desde el pre-wedding hasta el día de la boda.",
    icon: Church,
    href: "/servicios/bodas"
  },
  {
    title: "15 Años",
    description: "Capturamos tus momentos más especiales, desde el pre-wedding hasta el día de la boda.",
    icon: PartyPopper,
    href: "/servicios/quinceaneras"
  },
  {
    title: "Infantiles",
    description: "Capturamos tus momentos más especiales, desde el pre-wedding hasta el día de la boda.",
    icon: Baby,
    href: "/servicios/infantiles"
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

