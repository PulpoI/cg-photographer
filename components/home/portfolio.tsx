import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Retrato Creativo",
      description: "Capturando la esencia de la personalidad a través de la fotografía de retrato creativa.",
      image: "/placeholder.svg"
    },
    {
      title: "La Instalación",
      description: "La fotografía documental se encuentra con el arte en esta serie de capturas de instalaciones.",
      image: "/placeholder.svg"
    },
    {
      title: "Boda Feliz",
      description: "Celebrando el amor y la alegría a través de la fotografía de bodas.",
      image: "/placeholder.svg"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Sé creativo y piensa fuera de la caja</h2>
        <p className="text-zinc-400">Explora nuestros últimos trabajos y esfuerzos creativos</p>
      </div>
      <div className="space-y-12">
        {portfolioItems.map((item, index) => (
          <div 
            key={item.title}
            className={`grid gap-8 ${index % 2 === 0 ? 'md:grid-cols-[2fr,3fr]' : 'md:grid-cols-[3fr,2fr]'}`}
          >
            <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-zinc-400">{item.description}</p>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Leer Más
              </Button>
            </div>
            <div className={`relative aspect-square w-full ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

