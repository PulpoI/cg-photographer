import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import {
  Camera,
  Video,
  Edit,
  Church,
  PartyPopper,
  Baby,
  Ticket,
  Cake,
  Store,
} from "lucide-react";
import Link from "next/link";

// const services = [
//   {
//     title: "Bodas",
//     description: "Desde el pre-wedding hasta el día de la boda.",
//     icon: Church,
//     href: "/servicios/bodas"
//   },
//   {
//     title: "15 Años",
//     description: "Celebrando tu transición a la adultez, desde los preparativos hasta el baile final.",
//     icon: PartyPopper,
//     href: "/servicios/quinceaneras"
//   },
//   {
//     title: "Infantiles",
//     description: "Capturamos los momentos más especiales de tu infancia, desde los preparativos hasta el baile final.",
//     icon: Baby,
//     href: "/servicios/infantiles"
//   },
//   {
//     title: "Eventos",
//     description: "Capturamos los momentos más especiales de tu evento, desde los preparativos hasta el baile final.",
//     icon: Ticket,
//     href: "/servicios/eventos"
//   },
//   {
//     title: "Cumpleaños",
//     description: "Capturamos tus momentos más especiales, desde el pre-cumpleaños hasta el día de la fiesta.",
//     icon: Cake,
//     href: "/servicios/cumpleanos"
//   },

//   {
//     title: "Corporativos",
//     description: "Capturamos tus momentos más especiales, desde el pre-evento hasta el día de la fiesta.",
//     icon: Store,
//     href: "/servicios/corporativos"
//   },

// ]

export default function Services() {
  return (
    <section id="servicios" className="container mx-auto px-4 py-32">
      <div
        className="container mx-auto px-4 text-center z-10 relative"
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <h2 className="mb-6 text-3xl text-stone-900 font-bold  ">
          La vida a través de fotos
        </h2>
        <p className="mb-8 text-stone-900">Captura tus momentos</p>
        {/* <Button className="bg-amber-600 hover:bg-amber-700">
            <Link href="/servicios">Servicios</Link>
          </Button> */}
      </div>
      <div
        className="grid gap-10 lg:grid-cols-4 md:grid-cols-2"
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        {Object.values(services).map((service) => (
          <div key={service.title} className="space-y-4 flex flex-col items-center justify-center text-center">
            {service.id === "bodas" ? (
              <Church className="h-6 w-6 text-amber-600" />
            ) : service.id === "quinceaneras" ? (
              <PartyPopper className="h-6 w-6 text-amber-600" />
            ) : service.id === "infantiles" ? (
              <Baby className="h-6 w-6 text-amber-600" />
            ) : service.id === "bodas" ? (
              <Church className="h-6 w-6 text-amber-600" />
            ) : service.id === "eventos" ? (
              <Ticket className="h-6 w-6 text-amber-600" />
            ) : service.id === "cumpleanos" ? (
              <Cake className="h-6 w-6 text-amber-600" />
            ) : service.id === "corporativos" ? (
              <Store className="h-6 w-6 text-amber-600" />
            ) : null}
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="">{service.shortDescription}</p>
            <Button asChild variant="outline">
              <Link href={`/servicios/${service.id}`}>Saber más</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
