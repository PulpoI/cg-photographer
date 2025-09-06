import { useCart } from '@/contexts/cart-context'
import { X, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PriceDisplay from '@/components/shared/price-display'
import Link from 'next/link'

interface CartItemProps {
  item: {
    serviceId: string
    serviceTitle: string
    subServiceTitle: string
    name: string
    priceUSD: number
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCart()

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-cocoa-dark">
            {item.subServiceTitle} - {item.name}
          </h4>
          <Link 
            href={`/servicios/${item.serviceId}#${encodeURIComponent(item.subServiceTitle.toLowerCase().replace(/\s+/g, '-'))}`}
            className="text-amber-600 hover:text-amber-700"
            title="Ver servicio"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          {item.serviceTitle}
        </p>
        <div className="text-lg font-bold text-amber-600">
          <PriceDisplay priceUSD={item.priceUSD} />
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeItem(`${item.serviceId}-${item.subServiceTitle}-${item.name}`)}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

