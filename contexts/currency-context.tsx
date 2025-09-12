"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Currency, CURRENCIES, updateExchangeRate } from '@/lib/currency';

interface CurrencyContextType {
  selectedCurrency: Currency;
  changeCurrency: (currency: Currency) => void;
  currencies: typeof CURRENCIES;
  exchangeRate: number;
  refreshExchangeRate: () => Promise<number>;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('ARS'); // ARS por defecto
  const [exchangeRate, setExchangeRate] = useState<number>(1300); // Valor por defecto

  // Cargar moneda desde localStorage al inicializar
  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency') as Currency;
    if (savedCurrency && CURRENCIES[savedCurrency]) {
      setSelectedCurrency(savedCurrency);
    }
  }, []);

  // Actualizar el precio del dólar al cargar el contexto
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

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        changeCurrency,
        currencies: CURRENCIES,
        exchangeRate,
        refreshExchangeRate
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
