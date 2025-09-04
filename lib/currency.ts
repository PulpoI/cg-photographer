/**
 * Formatea un número como moneda argentina
 * Ejemplo: 10000 -> "$10.000"
 * @param amount - El monto a formatear
 * @returns String formateado como moneda argentina
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('ARS', '$')
}

/**
 * Versión alternativa más simple si la anterior no funciona como esperado
 * @param amount - El monto a formatear  
 * @returns String formateado como moneda argentina
 */
export function formatCurrencySimple(amount: number): string {
  return `$${amount.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`
}
