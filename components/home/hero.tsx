import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
      
      {/* Content */}
      <div className="container relative px-4 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          El poder de capturar el mundo
          <br />
          en una sola imagen
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Crea hermosos recuerdos a través de fotografía y video profesional
        </p>
        <Button className="mt-8 bg-amber-600 hover:bg-amber-700">
          Comenzar
        </Button>
        <div className="mt-12 flex justify-center space-x-6">
          {[
            [Facebook, '#facebook'],
            [Twitter, '#twitter'],
            [Instagram, '#instagram'],
            [Youtube, '#youtube'],
            [Linkedin, '#linkedin']
          ].map(([Icon, href]) => (
            <a
              key={href}
              href={href}
              className="text-zinc-400 transition-colors hover:text-white"
            >
              <Icon className="h-6 w-6" />
              <span className="sr-only">{href.slice(1)}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

