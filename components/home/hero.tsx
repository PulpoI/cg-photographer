"use client";

import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-home.webp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Rellax from "rellax";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function Hero() {
  const bgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rellaxInitialized, setRellaxInitialized] = useState(false);
  const bgRellaxRef = useRef<any>(null);
  const textRellaxRef = useRef<any>(null);
  const pathname = usePathname();

  // Cleanup function to destroy Rellax instances
  const cleanupRellax = () => {
    if (bgRellaxRef.current) {
      bgRellaxRef.current.destroy();
      bgRellaxRef.current = null;
    }
    
    if (textRellaxRef.current) {
      textRellaxRef.current.destroy();
      textRellaxRef.current = null;
    }
    
    setRellaxInitialized(false);
  };
  
  // Initialize Rellax
  const initRellax = () => {
    if (rellaxInitialized) {
      cleanupRellax();
    }
    
    if (bgRef.current) {
      bgRef.current.setAttribute('data-rellax-desktop-speed', '15');
      bgRef.current.setAttribute('data-rellax-tablet-speed', '5');
      bgRef.current.setAttribute('data-rellax-mobile-speed', '2');
      
      bgRellaxRef.current = new Rellax(bgRef.current, {
        breakpoints: [768, 1024, 1280],
      });
    }
    
    if (textRef.current) {
      textRef.current.setAttribute('data-rellax-desktop-speed', '-8');
      textRef.current.setAttribute('data-rellax-tablet-speed', '-8');
      textRef.current.setAttribute('data-rellax-mobile-speed', '-2');
      
      textRellaxRef.current = new Rellax(textRef.current, {
        breakpoints: [768, 1024, 1280],
      });
    }
    
    setRellaxInitialized(true);
  };

  // Main effect for Rellax initialization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      
      // Initialize Rellax with a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        initRellax();
      }, 100);
      
      // Apply GSAP animation
      if (containerRef.current && bgRef.current) {
        const gsapInstance = gsap.to(bgRef.current, {
          filter: "blur(30px)",
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "18%",
            end: "70%",
            scrub: true,
          },
        });
      }
      
      // Cleanup
      return () => {
        clearTimeout(timer);
        cleanupRellax();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, [pathname]); // Re-run when pathname changes

  // Handle window resize to reset Rellax
  useEffect(() => {
    const handleResize = () => {
      if (rellaxInitialized) {
        // Add a small delay to ensure DOM is updated
        setTimeout(() => {
          initRellax();
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [rellaxInitialized]);

  return (
    <section 
      className="containerHero relative flex min-h-screen lg:h-[150vh] h-[100vh] justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 top-[-10%]">
        {/* <GalleryRing /> */}
        <Image
          ref={bgRef}
          src={heroBg}
          alt="Hero Background"
          fill
          className="!h-auto"
          priority
        />
      </div>
      {/* Content */}
      <div
        ref={textRef}
        className="container relative px-4 text-center h-[100vh] flex flex-col justify-center items-center"
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
