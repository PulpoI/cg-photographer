"use client";

import { Button } from "@/components/ui/button";
import {
  Facebook,
  MessageCircle,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import GSAPCarousel from "../shared/gsap-carousel";
import ParallaxCarousel from "../shared/parallax-carousel";
import ZoomFadeCarousel from "../shared/zoom-fade-carousel";
import Gallery from "../shared/gallery-ring-drag";
import GalleryRing from "../shared/gallery-ring";

import heroBg from "@/assets/_DSC9901.jpg";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Rellax from "rellax";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Hero() {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroBgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new Rellax(heroBgRef.current, {
      breakpoints:[768, 1280, 1536]
      
    });
    new Rellax(heroTextRef.current, {
      breakpoints:[768, 1280, 1536],
      speed: -11,
    });
    gsap.to(heroBgContainerRef.current, {
      filter: "blur(30px)",
      opacity: 0,
      scrollTrigger: {
        trigger: heroBgRef.current,
        start: "15%",
        end: "50%",
        scrub: true,
      }
      
    });

    
    return () => {

      ScrollTrigger.getAll().forEach(t => t.kill());

    };


  }, []);


  

  return (
    <section className="relative flex min-h-screen lg:h-[150vh] h-[100vh] justify-center overflow-hidden">
      <div className="absolute inset-0 top-[-10%]" ref={heroBgContainerRef}>
        {/* <GalleryRing /> */}
        <Image
          src={heroBg}
          ref={heroBgRef}
          alt="Hero Background"
          fill
          className="!h-auto"
          data-rellax-desktop-speed="25"
          data-rellax-tablet-speed="5"
          data-rellax-mobile-speed="2"
        />
      </div>
      {/* Content */}
      <div className="container relative px-4 text-center h-[100vh] flex flex-col justify-center items-center" 
        ref={heroTextRef}
        data-rellax-desktop-speed="-11"
        data-rellax-tablet-speed="-15"
        data-rellax-mobile-speed="-2"
        >
        <h1 className="font-bromello mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Camila Gonzalez
        </h1>
        <h2 className="text-2xl font-bold">Fotografía Profesional</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-700">
          Cada foto cuenta una historia.
          <br />
          Contactame y capturemos juntos tu momento único.
        </p>
        <Button className="mt-8 bg-amber-600 hover:bg-amber-700">
          Comenzar
        </Button>
        {/* <div className="mt-12 flex justify-center space-x-6">
          {[
            [Facebook, "#facebook"],
            [Instagram, "#instagram"],
            [MessageCircle, "#whatsapp"],
          ].map(([Icon, href]) => (
            <a
              key={href}
              href={href}
              className=" transition-colors hover:text-white"
            >
              <Icon className="h-6 w-6" />
              <span className="sr-only">{href.slice(1)}</span>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
}
