import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-zinc-900/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-3xl font-bold">Get In Touch</h2>
        <div className="grid gap-12 md:grid-cols-[1fr,2fr]">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-zinc-400">123 Photo Street</p>
                <p className="text-zinc-400">City, State 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-zinc-400">+1 (234) 567-8900</p>
                <p className="text-zinc-400">+1 (234) 567-8901</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-zinc-400">info@photography.com</p>
                <p className="text-zinc-400">support@photography.com</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Input 
                placeholder="Name" 
                className="bg-zinc-800 border-zinc-700"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-zinc-800 border-zinc-700"
              />
            </div>
            <Input 
              placeholder="Subject" 
              className="bg-zinc-800 border-zinc-700"
            />
            <Textarea 
              placeholder="Your message" 
              className="bg-zinc-800 border-zinc-700"
            />
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

