import { Button } from "@/components/ui/button";
import Link from "next/link";
import EmblaCarousel from "../shared/carousel-embla";
import { EmblaOptionsType } from "embla-carousel";

export default function LifePhotos() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <section className="bg-gradient-to-r from-cocoa-dark via-stone-muted to-stone-warm py-24 relative">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h2 className="mb-6 text-3xl text-coral-light font-bold">La vida a través de fotos</h2>
          <p className="mb-8 text-coral-light">Captura tus momentos</p>
          <Button className="bg-amber-600 hover:bg-amber-700">
            <Link href="/servicios">Servicios</Link>
          </Button>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 z-0">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div> */}
      </section>
    </>
  );
}
