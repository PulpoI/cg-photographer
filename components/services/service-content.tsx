'use client'

import { type Service } from '@/lib/services-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'

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
            <p className="text-lg text-zinc-400">
              {service.shortDescription}
            </p>
            <p className="text-zinc-400">
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
                              <span className="text-sm text-zinc-400">{feature}</span>
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
        </div>
      </div>
    </section>
  )
}

