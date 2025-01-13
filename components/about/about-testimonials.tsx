'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutTestimonials() {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condi mentum sit amet libero. Praesent vitae. Donec ullam corper enim pellentesque est tempus ornare. Integer ac arcu imperdiet. Aenean lacinia sem eros, quis posuere justo aliquam at.",
      author: "Krueger Smith",
      role: "UI/UX Expert",
      image: "/placeholder.svg"
    },
    {
      quote: "Praesent vitae donec ullam corper enim pellentesque est tempus ornare. Integer ac arcu imperdiet. Aenean lacinia sem eros, quis posuere justo aliquam at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Jane Cooper",
      role: "Art Director",
      image: "/placeholder.svg"
    },
    {
      quote: "Integer ac arcu imperdiet. Aenean lacinia sem eros, quis posuere justo aliquam at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condi mentum sit amet libero.",
      author: "Alex Morgan",
      role: "Photographer",
      image: "/placeholder.svg"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  const previous = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  return (
    <section className="bg-black py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <span className="text-amber-600">Testimonials</span>
          <h2 className="mt-2 text-3xl font-bold">
            Nothing tells story like
            <br />
            our photos
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative aspect-square">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="relative space-y-6">
                <div className="text-6xl text-amber-600">"</div>
                <p className="text-lg text-zinc-400">
                  {testimonials[currentIndex].quote}
                </p>
                <div>
                  <div className="font-bold">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-amber-600">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={previous}
                    className="border-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    className="border-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

