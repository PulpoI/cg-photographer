import { useState, useEffect } from 'react';

export type Currency = 'USD' | 'ARS';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  name: string;
  exchangeRate: number; // Tasa de cambio respecto al USD
}

// Valor por defecto del dólar (se actualizará dinámicamente)
let USD_TO_ARS_RATE = 1300;

// Función para actualizar el precio del dólar dinámicamente
export async function updateExchangeRate(): Promise<number> {
  try {
    const response = await fetch('/api/exchange-rate');
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        USD_TO_ARS_RATE = data.data.usdToArs;
        return USD_TO_ARS_RATE;
      }
    }
  } catch (error) {
    console.warn('Error al actualizar el precio del dólar:', error);
  }
  return USD_TO_ARS_RATE;
}

// Función para obtener el precio actual del dólar
export function getCurrentExchangeRate(): number {
  return USD_TO_ARS_RATE;
}

export const CURRENCIES: Record<Currency, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: 'US$',
    name: 'Dólar Estadounidense',
    exchangeRate: 1
  },
  ARS: {
    code: 'ARS',
    symbol: '$',
    name: 'Peso Argentino',
    exchangeRate: USD_TO_ARS_RATE
  }
};

// Función para convertir precios
export function convertPrice(priceUSD: number, targetCurrency: Currency): number {
  if (targetCurrency === 'USD') {
    return priceUSD;
  }
  
  return Math.round(priceUSD * USD_TO_ARS_RATE);
}

// Función para formatear precios
export function formatPrice(price: number, currency: Currency): string {
  const config = CURRENCIES[currency];
  
  if (currency === 'ARS') {
    return `${config.symbol} ${price.toLocaleString('es-AR')}`;
  }
  
  return `${config.symbol} ${price.toLocaleString('en-US')}`;
}

// Función para obtener precio formateado desde USD
export function getFormattedPrice(priceUSD: number, currency: Currency): string {
  const convertedPrice = convertPrice(priceUSD, currency);
  return formatPrice(convertedPrice, currency);
}

// Hook para manejar la moneda seleccionada
export function useCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('ARS'); // ARS por defecto
  const [exchangeRate, setExchangeRate] = useState<number>(USD_TO_ARS_RATE);

  // Cargar moneda desde localStorage al inicializar
  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency') as Currency;
    if (savedCurrency && CURRENCIES[savedCurrency]) {
      setSelectedCurrency(savedCurrency);
    }
  }, []);

  // Actualizar el precio del dólar al cargar el componente
  useEffect(() => {
    updateExchangeRate().then((rate) => {
      setExchangeRate(rate);
    });
  }, []);

  // Guardar moneda en localStorage cuando cambie
  const changeCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem('selectedCurrency', currency);
  };

  // Función para refrescar el precio del dólar
  const refreshExchangeRate = async () => {
    const newRate = await updateExchangeRate();
    setExchangeRate(newRate);
    return newRate;
  };

  return {
    selectedCurrency,
    changeCurrency,
    currencies: Object.values(CURRENCIES),
    exchangeRate,
    refreshExchangeRate
  };
}
