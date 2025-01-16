import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface RequestQuoteFormProps {
  onClose: () => void
}

export default function RequestQuoteForm({ onClose }: RequestQuoteFormProps) {
  const { items, total, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data and cart items to your backend
    console.log('Form Data:', formData)
    console.log('Cart Items:', items)
    console.log('Total:', total)
    
    // Clear the cart and close the form
    clearCart()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-text-stone-850 bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-zinc-900 p-6">
        <h2 className="mb-4 text-2xl font-bold">Solicitar Presupuesto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Mensaje adicional"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
              Enviar Solicitud
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

