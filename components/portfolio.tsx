import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Creative Portrait",
      description: "Capturing the essence of personality through creative portrait photography. Each image tells a unique story.",
      image: "/placeholder.svg"
    },
    {
      title: "The Installation",
      description: "Documentary photography meets art in this series of installation captures. Exploring the intersection of space and form.",
      image: "/placeholder.svg"
    },
    {
      title: "Happy Wedding",
      description: "Celebrating love and joy through wedding photography. Every moment is precious, every shot is timeless.",
      image: "/placeholder.svg"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Be creative and think outside the box</h2>
        <p className="text-zinc-400">Explore our latest works and creative endeavors</p>
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
                Read More
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

