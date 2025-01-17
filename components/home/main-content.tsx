import Image from 'next/image'

export default function MainContent() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-20 md:grid-cols-2 md:items-center">
      <div className="relative aspect-square w-full">
        <Image
          src="/placeholder.svg"
          alt="Muestra de fotografía"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent" />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Hola! soy Camila,</h2>
        <div className="space-y-4">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span>
              <p>
                una fotógrafa profesional con más de 10 años de experiencia en la industria. Me especializo en la fotografía de eventos, retratos y productos.
              </p>
            </span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            
          </div>
        </div>
      </div>
    </section>
  )
}

