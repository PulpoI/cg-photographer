import { useCart } from '@/contexts/cart-context'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CartItemProps {
  item: {
    serviceId: string
    serviceTitle: string
    subServiceTitle: string
    name: string
    price: number
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCart()

  return (
    <div className="flex items-center justify-between">
      <div>
        {/* <h4 className="font-semibold text-foreground">{item.serviceTitle}</h4> */}
        <p className="text-sm text-foreground">{item.subServiceTitle} - {item.name}</p>
        <p className="text-amber-600">${item.price.toFixed(2)}</p>
      </div>
      <Button
        variant="default"
        size="icon"
        onClick={() => removeItem(`${item.serviceId}-${item.subServiceTitle}-${item.name}`)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

