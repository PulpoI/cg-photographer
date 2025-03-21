import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-text-stone-850">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className='flex flex-col items-center justify-center text-center'>
            <Link href="/" className="text-2xl font-bold">
              <Image src="/logo-color.png" alt="Logo" width={250} height={250} />
            </Link>
            <p className="">
              Servicios profesionales de fotografía para todos tus momentos especiales.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className="mb-4 text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2 flex flex-col items-center">
              <li>
                <Link href="/" className=" hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className=" hover:text-white">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className=" hover:text-white">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <p className="">123 Calle Principal</p>
            <p className="">Ciudad, Estado 12345</p>
            <div className="mt-4 flex space-x-4">
              <Facebook className="h-5 w-5  hover:text-white" />
              <Instagram className="h-5 w-5  hover:text-white" />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm ">
          <p>© 2024 Estudio Fotográfico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

