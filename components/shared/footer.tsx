import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cocoa-dark via-stone-muted to-stone-warm text-coral-light">
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
              {/* <li>
                <Link href="/sobre-mi" className=" hover:text-white">
                  Sobre Mí
                </Link>
              </li> */}
              <li>
                <Link href="/#servicios" className=" hover:text-white">
                  Servicios
                </Link>
              </li>
              {/* <li>
                <Link href="/portfolio" className=" hover:text-white">
                  Portafolio
                </Link>
              </li> */}
              <li>
                <Link href="/#contacto" className=" hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <p className="">Av. Arenales 131, 6</p>
            <p className="">Chacabuco, Buenos Aires, Argentina</p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://www.facebook.com/CamilaGonzalezPhotographer" target="_blank">
                <Facebook className="h-5 w-5  hover:text-white" />
              </Link>
              <Link href="https://www.instagram.com/camilagonzalezfotografia/" target="_blank">
              <Instagram className="h-5 w-5  hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-300 pt-8 text-center text-sm ">
          <p>© {new Date().getFullYear()} Camila Gonzalez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

