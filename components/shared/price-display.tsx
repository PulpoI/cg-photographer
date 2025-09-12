"use client";

import { useCurrency } from "@/contexts/currency-context";
import { convertPrice, formatPrice } from "@/lib/currency";
import { useState, useEffect } from "react";

interface PriceDisplayProps {
  priceUSD: number;
  className?: string;
}

export default function PriceDisplay({ priceUSD, className = "" }: PriceDisplayProps) {
  const { selectedCurrency, exchangeRate } = useCurrency();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Durante el renderizado del servidor, mostrar un placeholder
  if (!isClient) {
    return (
      <span className={className}>
        {/* Placeholder que coincida aproximadamente con el tamaño */}
        <span className="opacity-0">$ 0</span>
      </span>
    );
  }
  
  // Usar el precio del dólar dinámico para la conversión
  const convertedPrice = selectedCurrency === 'USD' 
    ? priceUSD 
    : Math.round(priceUSD * exchangeRate);
  
  return (
    <span className={className}>
      {formatPrice(convertedPrice, selectedCurrency)}
    </span>
  );
}
