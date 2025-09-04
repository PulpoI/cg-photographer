'use client'
import statsBg from "@/assets/_DSC3853.webp";
import Image from "next/image";
import { useEffect } from "react";
import Rellax from "rellax";

export default function Stats() {
  const stats = [
    { label: "Años de Experiencia", value: "10+" },
    { label: "Coberturas de Eventos", value: "300+" },
    { label: "Books Realizados", value: "200+" }
  ]

  useEffect(() => {
    var rellax = new Rellax('.rellax', {
      breakpoints: [768, 1024, 1280],
    });
  }, [])

  return (
    <section className="containerStats overflow-hidden relative h-screen bg-gradient-to-r from-cocoa-dark via-stone-muted to-stone-warm flex items-center justify-center">
      <div className="h-full w-full absolute top-0 left-0 opacity-30">
        <Image src={statsBg} alt="statsBg" className="rellax w-100 h-100" data-rellax-desktop-speed="12" data-rellax-tablet-speed="7" data-rellax-mobile-speed="3"/>
      </div>
      <div className="containerStatsText mx-auto grid grid-cols-2 gap-4 px-4 py-24 md:grid-cols-3  w-full relative z-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center" data-aos="fade-up">
            <div className="text-coral-light font-bold text-5xl">{stat.value}</div>
            <div className="text-xl text-coral-light">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

