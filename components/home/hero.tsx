import { Button } from '@/components/ui/button'
import { Facebook, MessageCircle, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      
      {/* Content */}
      <div className="container relative px-4 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Camila Gonzalez
        </h1>
        <h2 className="text-2xl font-bold">Fotografía Profesional</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
        Cada foto cuenta una historia. 
        <br />
        Contactame y capturemos juntos tu momento único.
        </p>
        <Button className="mt-8 bg-amber-600 hover:bg-amber-700">
          Comenzar
        </Button>
        <div className="mt-12 flex justify-center space-x-6">
          {[
            [Facebook, '#facebook'],
            [Instagram, '#instagram'],
            [MessageCircle, '#whatsapp'],
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

