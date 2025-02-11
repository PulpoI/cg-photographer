'use client'

import { useState } from 'react'
import PortfolioCard from './portfolio-card'
import PortfolioModal from './portfolio-modal'

const projects = [
  {
    id: 1,
    title: "Retrato Creativo",
    client: "Anna Lumenn",
    category: "Fotografía, Retrato, Creativo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condimentum sit amet libero.",
    images: Array(6).fill("/placeholder.svg")
  },
  {
    id: 2,
    title: "La Imaginación",
    client: "Steve Markan",
    category: "Fotografía, Creativo, Concepto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condimentum sit amet libero.",
    images: Array(6).fill("/placeholder.svg")
  },
  {
    id: 3,
    title: "Boda Feliz",
    client: "Jacob & Jane Foster",
    category: "Fotografía, Retrato, Evento",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condimentum sit amet libero.",
    images: Array(6).fill("/placeholder.svg")
  },
  {
    id: 4,
    title: "Producto de Belleza",
    client: "Producto Skincare",
    category: "Fotografía, Branding, Producto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condimentum sit amet libero.",
    images: Array(6).fill("/placeholder.svg")
  }
]

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">
            Sé creativo y piensa
            <br />
            fuera de la caja
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

