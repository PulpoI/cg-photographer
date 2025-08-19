'use client'

import { type Service } from '@/lib/services-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import AboutTestimonials from '../about/about-testimonials'
import ServicesFaqs from './services-faqs'

interface ServiceContentProps {
  service: Service
}

export default function ServiceContent({ service }: ServiceContentProps) {
  const { addItem } = useCart()

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl space-y-12">
          <div className="space-y-4">
            <p className="text-lg ">
              {service.shortDescription}
            </p>
            <p className="">
              {service.longDescription}
            </p>
          </div>

          <Tabs defaultValue={service.subServices[0]?.title} className="space-y-6">
            <TabsList className="w-full justify-start bg-zinc-900">
              {service.subServices.map((subService) => (
                <TabsTrigger
                  key={subService.title}
                  value={subService.title}
                  className="data-[state=active]:bg-amber-600"
                >
                  {subService.title}
                </TabsTrigger>
              ))}
            </TabsList>
        

            {service.subServices.map((subService) => (
              
              <TabsContent key={subService.title} value={subService.title}>
              <div className="space-y-4">
                <p className="text-md text-center">
                  {subService.shortDescription}
                </p>
                <p className='text-xl font-bold text-center'>
                  Características de {subService.title}
                </p>
                <p className="text-md">
                  {subService.longDescription}
                </p>
                <div className="space-y-4">
                  {subService.characteristics.map((characteristic) => (
                    <div key={characteristic.title}>
                      <h3 className="text-lg font-bold">{characteristic.title}</h3>
                      <p className="text-sm">{characteristic.description}</p>
                    </div>
                  ))}
                </div>

              </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {subService.packages.map((pkg) => (
                    <Card key={pkg.name} className="bg-zinc-900 border-zinc-800">
                      <CardHeader>
                        <CardTitle>{pkg.name}</CardTitle>
                        <CardDescription>
                          <span className="text-2xl font-bold text-amber-600">
                            ${pkg.price}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-amber-600" />
                              <span className="text-sm text-white">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full bg-amber-600 hover:bg-amber-700"
                          onClick={() => addItem({
                            serviceId: service.id,
                            serviceTitle: service.title,
                            subServiceTitle: subService.title,
                            ...pkg
                          })}
                        >
                          Agregar al Carrito
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <AboutTestimonials />
          <ServicesFaqs />
        </div>
      </div>
    </section>
  )
}

