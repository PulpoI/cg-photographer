'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { ServicePackage } from '@/lib/services-data'
import toast from 'react-hot-toast'
import { getCartData, clearCorruptedCart } from '@/lib/cart-utils'

interface CartItem extends ServicePackage {
  serviceId: string
  serviceTitle: string
  subServiceTitle: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  clearCart: () => void
  clearCorruptedCart: () => void
  total: number
  isLoaded: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Cargar datos del carrito directamente sin migración
    try {
      const storedItems = localStorage.getItem('cart')
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems)
        if (Array.isArray(parsedItems)) {
          setItems(parsedItems)
        }
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + item.priceUSD, 0)
    setTotal(newTotal)
  }, [items])

  useEffect(() => {
    // Solo guardar en localStorage si hay items y ya está cargado
    if (items.length > 0 && isLoaded) {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }, [items, isLoaded])

  const addItem = (item: CartItem) => {
    const existingItem = items.find(
      (i) => i.serviceId === item.serviceId && i.name === item.name && i.subServiceTitle === item.subServiceTitle
    )
    
    if (existingItem) {
      toast.error('Este item ya ha sido agregado al carrito.')
      return
    }
    
    setItems((prevItems) => [...prevItems, item])
    toast.success('Item agregado al carrito.')
  }

  const removeItem = (itemId: string) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => `${item.serviceId}-${item.subServiceTitle}-${item.name}` !== itemId)
      return newItems
    })
    toast.success('Item eliminado del carrito.')
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem('cart')
    toast.success('Carrito vaciado.')
  }

  const clearCorruptedCartHandler = () => {
    clearCorruptedCart()
    setItems([])
    setTotal(0)
    toast.success('Carrito corrupto limpiado.')
  }

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      clearCart, 
      clearCorruptedCart: clearCorruptedCartHandler,
      total,
      isLoaded 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

