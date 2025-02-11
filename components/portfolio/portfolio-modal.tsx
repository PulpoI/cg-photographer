'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface Project {
  id: number
  title: string
  client: string
  category: string
  description: string
  images: string[]
}

interface PortfolioModalProps {
  project: Project | null
  onClose: () => void
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <Dialog open={!!project} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-5xl bg-text-stone-850 p-0">
        <div className="relative aspect-video">
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-text-stone-850/50"
            onClick={(e) => {
              e.stopPropagation()
              previousImage()
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-text-stone-850/50"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-4 bg-text-stone-850/50"
            onClick={() => onClose()}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="mt-2 text-amber-600">Cliente: {project.client}</p>
          <p className="mt-4 ">{project.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

