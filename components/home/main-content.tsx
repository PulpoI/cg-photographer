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
        <h2 className="text-3xl font-bold">Capturando recuerdos a través de imágenes</h2>
        <div className="space-y-4">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span>Fotografía</span>
            <span>80%</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span>Retoque</span>
            <span>90%</span>
          </div>
        </div>
      </div>
    </section>
  )
}

