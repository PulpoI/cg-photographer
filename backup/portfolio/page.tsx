import PageHero from '@/components/shared/page-hero'
import PortfolioGrid from '@/components/portfolio/portfolio-grid'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-text-stone-850 text-white">
      <PageHero 
        title="Mi Portafolio" 
        breadcrumb="Portafolio"
      />
      <PortfolioGrid />
    </main>
  )
}

