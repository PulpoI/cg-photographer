// Utilidades para manejar el carrito y localStorage

export interface CartItemLegacy {
  serviceId: string
  serviceTitle: string
  subServiceTitle: string
  name: string
  price: number // Estructura antigua
  features: string[]
}

export interface CartItemNew {
  serviceId: string
  serviceTitle: string
  subServiceTitle: string
  name: string
  priceUSD: number // Nueva estructura
  features: string[]
}

// Función para migrar datos del carrito de la estructura antigua a la nueva
export function migrateCartData(items: any[]): CartItemNew[] {
  return items.map((item: any) => {
    // Si el item tiene 'price' en lugar de 'priceUSD', migrar
    if (item.price !== undefined && item.priceUSD === undefined) {
      return {
        ...item,
        priceUSD: item.price,
        // Remover el campo 'price' antiguo
        price: undefined
      }
    }
    return item
  }).filter((item: any) => {
    // Solo filtrar si no tiene priceUSD válido
    return item.priceUSD !== undefined && typeof item.priceUSD === 'number'
  })
}

// Función para limpiar localStorage corrupto
export function clearCorruptedCart() {
  localStorage.removeItem('cart')
  console.log('Carrito corrupto limpiado del localStorage')
}

// Función para verificar si el carrito está corrupto
export function isCartCorrupted(): boolean {
  try {
    const storedItems = localStorage.getItem('cart')
    if (!storedItems) return false
    
    const parsedItems = JSON.parse(storedItems)
    if (!Array.isArray(parsedItems)) return true
    
    // Verificar que todos los items tengan la estructura correcta
    return parsedItems.some((item: any) => {
      return !item.priceUSD || typeof item.priceUSD !== 'number'
    })
  } catch (error) {
    return true
  }
}

// Función para obtener datos del carrito con migración automática
export function getCartData(): CartItemNew[] {
  try {
    const storedItems = localStorage.getItem('cart')
    if (!storedItems) {
      console.log('No cart data found in localStorage')
      return []
    }
    
    const parsedItems = JSON.parse(storedItems)
    console.log('Parsed cart items:', parsedItems)
    
    if (!Array.isArray(parsedItems)) {
      console.log('Cart data is not an array, clearing...')
      clearCorruptedCart()
      return []
    }
    
    const migratedItems = migrateCartData(parsedItems)
    console.log('Migrated cart items:', migratedItems)
    
    // Si hubo migración, actualizar localStorage
    if (migratedItems.length !== parsedItems.length) {
      console.log('Migration detected, updating localStorage')
      localStorage.setItem('cart', JSON.stringify(migratedItems))
    }
    
    return migratedItems
  } catch (error) {
    console.error('Error parsing cart data:', error)
    clearCorruptedCart()
    return []
  }
}
