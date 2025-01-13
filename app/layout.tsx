import { Inter } from 'next/font/google'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import ScrollToTop from '@/components/shared/scroll-to-top'
import { CartProvider } from '@/contexts/cart-context'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}

