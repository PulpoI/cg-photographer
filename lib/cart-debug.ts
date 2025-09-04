// Debug utilities para el carrito

export function debugCart() {
  console.log('=== CART DEBUG ===')
  
  const storedItems = localStorage.getItem('cart')
  console.log('Raw localStorage:', storedItems)
  
  if (storedItems) {
    try {
      const parsed = JSON.parse(storedItems)
      console.log('Parsed data:', parsed)
      console.log('Is array:', Array.isArray(parsed))
      console.log('Length:', parsed?.length)
      
      if (Array.isArray(parsed)) {
        parsed.forEach((item, index) => {
          console.log(`Item ${index}:`, {
            hasPriceUSD: 'priceUSD' in item,
            priceUSD: item.priceUSD,
            hasPrice: 'price' in item,
            price: item.price,
            serviceId: item.serviceId,
            name: item.name
          })
        })
      }
    } catch (error) {
      console.error('Parse error:', error)
    }
  }
  
  console.log('=== END DEBUG ===')
}

export function clearCartDebug() {
  console.log('Clearing cart for debug...')
  localStorage.removeItem('cart')
  console.log('Cart cleared')
}

export function setCartDebug() {
  const testData = [{
    "serviceId": "infantiles",
    "serviceTitle": "Infantiles", 
    "subServiceTitle": "Sesion de Fotos",
    "name": "Clásico",
    "priceUSD": 50,
    "features": ["1 hora de sesión en estudio o exterior", "Hasta 80 fotos editadas", "Entrega digital", "Estilo temático, fine-art o minimalista"]
  }]
  
  localStorage.setItem('cart', JSON.stringify(testData))
  console.log('Test cart data set:', testData)
}
