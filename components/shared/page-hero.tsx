"use client"
import Image from "next/image"
import pageHeroBg from "@/assets/0236.jpg"
import bodas from "@/assets/services/bodas.webp"
import infantiles from "@/assets/services/infantiles.webp"
import quinceaneras from "@/assets/services/quinceaneras.webp"
import cumpleanos from "@/assets/services/cumpleanos.webp"
import corporativos from "@/assets/services/corporativos.jpg"
import { useEffect } from "react"
import Rellax from "rellax"

interface PageHeroProps {
  title: string
  breadcrumb: string
  serviceId?: string
}

export default function PageHero({ title, breadcrumb, serviceId }: PageHeroProps) {
  const breadcrumbItems = breadcrumb.split(' / ')
  
  // Map of service IDs to their corresponding images
  const serviceImages: Record<string, any> = {
    bodas,
    infantiles,
    quinceaneras,
    cumpleanos,
    corporativos,
  }
  
  // Function to get the appropriate hero image
  const getHeroImage = () => {
    if (serviceId && serviceImages[serviceId]) {
      return serviceImages[serviceId]
    }
    return pageHeroBg
  }

  const heroImage = getHeroImage()
  
  useEffect(() => {
    var rellax = new Rellax('.rellax-text');
    var rellaxBg = new Rellax('.rellax-bg');
  }, [])
  
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-900/50 pt-16 overflow-hidden z-0">
      <Image src={heroImage} alt={`${title} Hero Background`} fill className="object-cover z-0 !top-20 rellax-bg !h-[170vh]" data-rellax-desktop-speed="17" data-rellax-tablet-speed="5" data-rellax-mobile-speed="2"/>
      <div className="rellax-text container text-center z-10 bg-black/30 backdrop-blur-sm px-10 py-5 rounded-[300px] w-fit" data-rellax-desktop-speed="-3" data-rellax-tablet-speed="-3" data-rellax-mobile-speed="-2">
        <div className="text-coral-light">
          <div className="flex justify-center space-x-2 text-lg ">
            <span>Inicio</span>
            {breadcrumbItems.map((item, index) => (
              <span key={item} className="!m-0"> 
                <span className="mx-2">/</span>
                <span className={index === breadcrumbItems.length - 1 ? "text-amber-600" : ""}>{item}</span>
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-coral-light md:text-6xl">{title}</h1>
        </div>
      </div>
    </section>
  )
}

