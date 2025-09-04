import { useState, useEffect } from 'react';
import { EXCHANGE_RATES } from './exchange-rates';

export type Currency = 'USD' | 'ARS';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  name: string;
  exchangeRate: number; // Tasa de cambio respecto al USD
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
    exchangeRate: EXCHANGE_RATES.USD_TO_ARS
  }
};

// Valor del dólar (se puede actualizar fácilmente)
export const USD_TO_ARS_RATE = EXCHANGE_RATES.USD_TO_ARS;

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

  // Cargar moneda desde localStorage al inicializar
  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency') as Currency;
    if (savedCurrency && CURRENCIES[savedCurrency]) {
      setSelectedCurrency(savedCurrency);
    }
  }, []);

  // Guardar moneda en localStorage cuando cambie
  const changeCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    localStorage.setItem('selectedCurrency', currency);
  };

  return {
    selectedCurrency,
    changeCurrency,
    currencies: Object.values(CURRENCIES)
  };
}
