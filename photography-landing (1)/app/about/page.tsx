import AboutHero from '@/components/about/about-hero'
import AboutCapturing from '@/components/about/about-capturing'
import AboutSkills from '@/components/about/about-skills'
import AboutLinks from '@/components/about/about-links'
import AboutTestimonials from '@/components/about/about-testimonials'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AboutHero />
      <AboutCapturing />
      <AboutSkills />
      <AboutLinks />
      <AboutTestimonials />
    </main>
  )
}

