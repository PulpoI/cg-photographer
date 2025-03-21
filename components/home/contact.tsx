import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-cocoa-dark via-stone-muted to-stone-warm py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold text-coral-light">Ponte en Contacto</h2>
        <div className="grid gap-12 md:grid-cols-[1fr,2fr]">
          <div className="space-y-8 text-coral-light">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Dirección</h3>
                <p className="">123 Calle Fotografía</p>
                <p className="">Ciudad, Estado 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Teléfono</h3>
                <p className="">+1 (234) 567-8900</p>
                <p className="">+1 (234) 567-8901</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="">info@fotografia.com</p>
                <p className="">soporte@fotografia.com</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Input 
                placeholder="Nombre" 
                className="bg-coral-light border-zinc-700"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-coral-light border-zinc-700"
              />
            </div>
            <Input 
              placeholder="Asunto" 
              className="bg-coral-light border-zinc-700"
            />
            <Textarea 
              placeholder="Tu mensaje" 
              className="bg-coral-light border-zinc-700"
            />
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

