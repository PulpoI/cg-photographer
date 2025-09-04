'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Cart from '@/components/cart/cart'
import Image from 'next/image'
import { services } from '@/lib/services-data'
import CurrencySelector from './currency-selector'

// const services = [
//   // { name: 'Bodas', href: '/servicios/bodas' },
//   // { name: '15 Años', href: '/servicios/quinceaneras' },
//   { name: 'Infantiles', href: '/servicios/infantiles' },
//   // { name: 'Eventos', href: '/servicios/eventos' },
//   // { name: 'Cumpleaños', href: '/servicios/cumpleanos' },
//   // { name: 'Corporativos', href: '/servicios/corporativos' },
// ]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const NavItems = ({ mobile = false }) => (
    <>
      <Link href="/" className={cn(" hover:text-coral", mobile ? "text-2xl" : "text-sm")}>
        Inicio
      </Link>
      {/* <Link href="/sobre-mi" className={cn(" hover:text-coral", mobile ? "text-2xl" : "text-sm")}>
        Sobre Mí
      </Link> */}
      <div className="relative group">
        <Link href="/#servicios" className={cn(" hover:text-coral", mobile ? "text-2xl" : "text-sm")}>
          Servicios
        </Link>
        <div className={cn(
          "absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-zinc-900 ring-1 ring-text-stone-850 ring-opacity-5",
          "transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible",
          mobile ? "static mt-2 opacity-100 visible w-full" : ""
        )}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {Object.values(services).map((service) => (
              <div key={service.id} className="relative group/service">
                <Link
                  href={`/servicios/${service.id}`}
                  className="flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-zinc-800 hover:text-coral group-hover/service:bg-zinc-800 group-hover/service:text-coral"
                  role="menuitem"
                >
                  {service.title}
                  <ChevronDown className="h-3 w-3 rotate-[-90deg] opacity-70" />
                </Link>
                
                {/* Submenú de subservicios */}
                <div className={cn(
                  "absolute left-full top-0 w-56 rounded-md shadow-lg bg-zinc-800 ring-1 ring-zinc-700 ring-opacity-5",
                  "transition-all duration-300 opacity-0 invisible group-hover/service:opacity-100 group-hover/service:visible",
                  mobile ? "static left-0 mt-1 ml-4 opacity-100 visible w-full bg-zinc-800" : ""
                )}>
                  <div className="py-1">
                    {/* Indicador visual del servicio padre */}
                    <div className="px-4 py-1 text-xs font-semibold text-amber-600 border-b border-zinc-700 mb-1">
                      {service.title}
                    </div>
                    {service.subServices.map((subService) => {
                      const hashValue = encodeURIComponent(subService.title.toLowerCase().replace(/\s+/g, '-'))
                      return (
                        <Link
                          key={subService.title}
                          href={`/servicios/${service.id}#${hashValue}`}
                          className="block px-4 py-2 text-xs text-zinc-300 hover:bg-zinc-700 hover:text-coral transition-colors duration-200"
                          role="menuitem"
                          onClick={(e) => {
                            // Force hash change detection on same page
                            if (window.location.pathname === `/servicios/${service.id}`) {
                              e.preventDefault()
                              window.location.hash = hashValue
                              // Manually trigger hash change event
                              window.dispatchEvent(new HashChangeEvent('hashchange'))
                            }
                          }}
                        >
                          {subService.title}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Link href="/portfolio" className={cn(" hover:text-coral", mobile ? "text-2xl" : "text-sm")}>
        Portafolio
      </Link> */}
      <Link href="/#contacto" className={cn(" hover:text-coral", mobile ? "text-2xl" : "text-sm")}>
        Contacto
      </Link>
    </>
  )

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled || pathname !== "/" ? "bg-text-stone-850/70 bg-gradient-to-r from-cocoa-dark via-stone-muted to-stone-warm text-coral-light shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-white w-52">
          <Image src="/logo-color.png" alt="Logo" width={200} height={200} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavItems />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-text-stone-850 p-0">
              <nav className="flex flex-col items-center gap-8 p-6 pt-20">
                <NavItems mobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-4 w-52 justify-end" >
          <CurrencySelector />
          <Cart />
        </div>
      </div>
    </nav>
  )
}

