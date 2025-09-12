import { DM_Sans } from 'next/font/google'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import ScrollToTop from '@/components/shared/scroll-to-top'
import WhatsAppFloat from '@/components/shared/whatsapp-float'
import { CartProvider } from '@/contexts/cart-context'
import { CurrencyProvider } from '@/contexts/currency-context'
import { Toaster } from 'react-hot-toast'
import ClientLayout from '@/components/shared/client-layout'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="min-h-screen bg-coral-light text-cocoa-dark font-sans">
        <CartProvider>
          <CurrencyProvider>
            <ClientLayout>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                {children}
                <Footer />
                <ScrollToTop />
                <WhatsAppFloat />
              </div>
              <Toaster />
            </ClientLayout>
          </CurrencyProvider>
        </CartProvider>
      </body>
    </html>
  )
}

