import { Camera, Video, Edit } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Services() {
  const services = [
    {
      title: "Photography",
      description: "Professional photo shoots for all occasions",
      icon: Camera
    },
    {
      title: "Videography",
      description: "High quality video production services",
      icon: Video
    },
    {
      title: "Editing",
      description: "Professional photo and video editing",
      icon: Edit
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="bg-zinc-900/50 border-zinc-800">
            <CardHeader>
              <service.icon className="h-6 w-6 text-amber-600" />
              <CardTitle className="mt-4">{service.title}</CardTitle>
              <CardDescription className="text-zinc-400">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

