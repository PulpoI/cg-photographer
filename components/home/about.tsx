import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
            <p className=" mb-6">
              Somos un equipo apasionado de fotógrafos y videógrafos dedicados a capturar los momentos más especiales de tu vida. Con años de experiencia y un ojo para el detalle, transformamos tus recuerdos en obras de arte.
            </p>
            <Button asChild>
              <Link href="/sobre-mi">Conoce más</Link>
            </Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Sobre nosotros"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

