'use client'

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    // Reemplaza este número con el número de WhatsApp real de Camila
    const phoneNumber = "+5492352505048" // Formato: código de país + número sin espacios ni símbolos
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre tus servicios de fotografía.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 left-8 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 border-none p-0"
      size="icon"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  )
}
