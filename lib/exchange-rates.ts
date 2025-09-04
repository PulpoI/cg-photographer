// Configuración centralizada de tasas de cambio
// Actualiza este valor cuando cambie el dólar

export const EXCHANGE_RATES = {
  USD_TO_ARS: 1300,
  // Agregar más monedas aquí cuando sea necesario
  // USD_TO_EUR: 0.85,
  // USD_TO_BRL: 5.2,
} as const;

// Función para actualizar la tasa de cambio
export function updateExchangeRate(currency: keyof typeof EXCHANGE_RATES, newRate: number) {
  // En un entorno real, esto podría guardarse en una base de datos
  // Por ahora, solo actualizamos la constante
  console.log(`Actualizando tasa de cambio: ${currency} = ${newRate}`);
  
  // Para desarrollo, puedes cambiar el valor directamente en este archivo
  // En producción, esto debería venir de una API o base de datos
}

// Función para obtener la tasa de cambio actual
export function getExchangeRate(currency: keyof typeof EXCHANGE_RATES): number {
  return EXCHANGE_RATES[currency];
}

// Función para convertir USD a otra moneda
export function convertUSDToCurrency(amountUSD: number, targetCurrency: 'ARS'): number {
  switch (targetCurrency) {
    case 'ARS':
      return Math.round(amountUSD * EXCHANGE_RATES.USD_TO_ARS);
    default:
      return amountUSD;
  }
}
