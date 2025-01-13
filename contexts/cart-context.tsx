'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { ServicePackage } from '@/lib/services-data'
import toast from 'react-hot-toast'

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
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const storedItems = localStorage.getItem('cart')
    if (storedItems) {
      setItems(JSON.parse(storedItems))
    }
  }, [])

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + item.price, 0)
    setTotal(newTotal)
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.serviceId === item.serviceId && i.name === item.name && i.subServiceTitle === item.subServiceTitle
      )
      if (existingItem) {
        toast.error('Este item ya ha sido agregado al carrito.')
        return prevItems
      }
      toast.success('Item agregado al carrito.')
      return [...prevItems, item]
    })
  }

  const removeItem = (itemId: string) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => `${item.serviceId}-${item.subServiceTitle}-${item.name}` !== itemId)
      toast.success('Item eliminado del carrito.')
      return newItems
    })
  }

  const clearCart = () => {
    setItems([])
    toast.success('Carrito vaciado.')
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total }}>
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

