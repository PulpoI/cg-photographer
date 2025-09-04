'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faqs() {
  const faqs = [
    {
      question: "¿Cómo puedo colaborar con ustedes?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condimentum sit amet libero. Praesent vitae nibh at neque pretium porta. Donec sollicitudin sollicitudin bibendum."
    },
    {
      question: "¿Puedo obtener una lista de precios de sus servicios?",
      answer: "Nuestros precios varían según las necesidades específicas de cada proyecto. Contáctanos para recibir un presupuesto personalizado."
    },
    {
      question: "¿Qué áreas geográficas cubren?",
      answer: "Trabajamos en toda la ciudad y alrededores. Para eventos fuera de la zona, por favor consultar disponibilidad."
    },
    {
      question: "¿Cuál es el tiempo de entrega promedio?",
      answer: "El tiempo de entrega varía según el tipo y tamaño del proyecto. Generalmente, las sesiones fotográficas básicas se entregan en 1-2 semanas."
    }
  ]

  return (
    <section className=" py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <span className="text-amber-600">FAQs</span>
          <h2 className="mt-2 text-3xl font-bold">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

