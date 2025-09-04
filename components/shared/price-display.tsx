"use client";

import { useCurrency } from "@/contexts/currency-context";
import { getFormattedPrice } from "@/lib/currency";

interface PriceDisplayProps {
  priceUSD: number;
  className?: string;
}

export default function PriceDisplay({ priceUSD, className = "" }: PriceDisplayProps) {
  const { selectedCurrency } = useCurrency();
  
  return (
    <span className={className}>
      {getFormattedPrice(priceUSD, selectedCurrency)}
    </span>
  );
}
