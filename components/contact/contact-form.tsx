import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Enviar un mensaje</h2>
        <p className="mt-2 text-zinc-400">
          Completa el formulario y me pondré en contacto contigo lo antes posible.
        </p>
      </div>
      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Input 
            placeholder="Nombre" 
            className="bg-zinc-800/50 border-zinc-700"
          />
          <Input 
            placeholder="Apellido" 
            className="bg-zinc-800/50 border-zinc-700"
          />
        </div>
        <Input 
          type="email" 
          placeholder="Email" 
          className="bg-zinc-800/50 border-zinc-700"
        />
        <Textarea 
          placeholder="Mensaje" 
          className="bg-zinc-800/50 border-zinc-700 min-h-[150px]"
        />
        <Button className="w-full bg-amber-600 hover:bg-amber-700">
          Enviar Mensaje
        </Button>
      </form>
    </div>
  )
}

