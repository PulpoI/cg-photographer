import PageHero from '@/components/shared/page-hero'
import ContactForm from '@/components/contact/contact-form'
import ContactInfo from '@/components/contact/contact-info'
import ContactMap from '@/components/contact/contact-map'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero 
        title="Contacto" 
        breadcrumb="Contacto"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
    </main>
  )
}

