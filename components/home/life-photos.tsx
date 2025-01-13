import { Button } from '@/components/ui/button'

export default function LifePhotos() {
  return (
    <section className="bg-zinc-900/50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold">La vida a través de fotos</h2>
        <p className="mb-8 text-zinc-400">
          Captura tus momentos preciosos con fotografía profesional
        </p>
        <Button className="bg-amber-600 hover:bg-amber-700">
          Saber Más
        </Button>
      </div>
    </section>
  )
}

