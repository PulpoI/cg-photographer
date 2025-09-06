'use client'

import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CartItem from './cart-item'
import PriceDisplay from '@/components/shared/price-display'

export default function Cart() {
  const { items, total, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.serviceTitle]) {
      acc[item.serviceTitle] = []
    }
    acc[item.serviceTitle].push(item)
    return acc
  }, {} as Record<string, typeof items>)

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="default" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-xs text-white">
                {items.length}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-md sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Carrito de Servicios</SheetTitle>
            <SheetDescription>
              Revisa los servicios seleccionados y solicita un presupuesto.
            </SheetDescription>
          </SheetHeader>
          {items.length === 0 ? (
            <div className="mt-6 text-center py-8">
              <div className="text-gray-500 mb-4">
                <ShoppingCart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-lg font-medium">Carrito Vacío</p>
                <p className="text-sm">Agrega servicios para solicitar un presupuesto</p>
              </div>
              <Link href="/#servicios">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-6 space-y-6">
                {Object.entries(groupedItems).map(([serviceTitle, serviceItems]) => (
                  <div key={serviceTitle} className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">{serviceTitle}</h3>
                    {serviceItems.map((item) => (
                      <CartItem key={`${item.serviceId}-${item.subServiceTitle}-${item.name}`} item={item} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between border-t border-zinc-700 pt-4">
                <span className="text-lg font-semibold text-foreground">Total:</span>
                <span className="text-lg font-semibold text-foreground"><PriceDisplay priceUSD={total} /></span>
              </div>
              <div className="mt-6 space-y-4">
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Solicitar Presupuesto
                  </Button>
                </Link>
                <Button
                  className="w-full text-red-600 bg-transparent border border-red-600 hover:bg-red-600 hover:text-white"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}

