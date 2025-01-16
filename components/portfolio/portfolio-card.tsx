'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Project {
  id: number
  title: string
  client: string
  category: string
  description: string
  images: string[]
}

interface PortfolioCardProps {
  project: Project
  onSelect: () => void
}

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioCard({ project, onSelect }: PortfolioCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])
  const springConfig = { damping: 15, stiffness: 150 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = cardRef.current

    gsap.fromTo(
      element,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = (mouseX / width - 0.5) * 2
    const yPct = (mouseY / height - 0.5) * 2
    x.set(xPct * 100)
    y.set(yPct * 100)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[400px] cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`absolute inset-0 backface-hidden ${
            isFlipped ? "invisible" : "visible"
          }`}
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-text-stone-850/80 to-transparent p-6 flex flex-col justify-end">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-zinc-400">{project.category}</p>
          </div>
        </div>
        <div
          className={`absolute inset-0 backface-hidden bg-zinc-900 p-6 [transform:rotateY(180deg)] ${
            isFlipped ? "visible" : "invisible"
          }`}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm text-amber-600">Cliente: {project.client}</p>
              <p className="mt-4 text-zinc-400">{project.description}</p>
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                onSelect()
              }}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Ver Galería
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

