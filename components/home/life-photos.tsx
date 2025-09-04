import { Button } from "@/components/ui/button";
import Link from "next/link";
import EmblaCarousel from "../shared/carousel-embla";
import { EmblaOptionsType } from "embla-carousel";

export default function LifePhotos() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <section className="relative h-screen flex items-end pb-10">
        {/* <div className="container mx-auto px-4 text-center z-10 relative pointer-events-none select-none filter backdrop-blur-sm bg-white/30">
          <h2 className="mb-6 text-3xl text-stone-900 font-bold  ">La vida a través de fotos</h2>
          <p className="mb-8 text-stone-900">Captura tus momentos</p>
          <Button className="bg-amber-600 hover:bg-amber-700">
            <Link href="/servicios">Servicios</Link>
          </Button>
        </div> */}
        <div
          className="absolute top-0 left-0 right-0 z-0 h-100 flex h-full"
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>
    </>
  );
}
