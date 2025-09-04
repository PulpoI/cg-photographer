'use client'
import { useEffect } from 'react'
import { DM_Sans } from 'next/font/google'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import ScrollToTop from '@/components/shared/scroll-to-top'
import WhatsAppFloat from '@/components/shared/whatsapp-float'
import { CartProvider } from '@/contexts/cart-context'
import { CurrencyProvider } from '@/contexts/currency-context'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { initLenis } from '@/lib/lenis'
import { useScrollToHash } from '@/hooks/use-scroll-to-hash'
import AOS from 'aos'
import 'aos/dist/aos.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Initialize scroll to hash functionality
  useScrollToHash()

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
          <CurrencyProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
                {children}
              <Footer />
              <ScrollToTop />
              <WhatsAppFloat />
            </div>
            <Toaster />
          </CurrencyProvider>
        </CartProvider>
      </body>
    </html>
  )
}

