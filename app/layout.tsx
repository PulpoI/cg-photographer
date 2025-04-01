'use client'
import { useEffect } from 'react'
import { DM_Sans } from 'next/font/google'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import ScrollToTop from '@/components/shared/scroll-to-top'
import { CartProvider } from '@/contexts/cart-context'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { initLenis } from '@/lib/lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = initLenis()
    AOS.init({})
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <html lang="es">
      <body className={`${dmSans.className} min-h-screen bg-coral-light text-cocoa-dark`}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
              {children}
            <Footer />
            <ScrollToTop />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}

