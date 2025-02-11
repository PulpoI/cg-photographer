'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Trash2, Edit, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Service {
  id: string
  title: string
  shortDescription: string
  subServices: {
    id: string
    title: string
    packages: {
      id: string
      name: string
      price: number
      features: string[]
    }[]
  }[]
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    setLoading(true)
    try {
      const { data: servicesData, error: servicesError } = await supabase
        .from('services')
        .select('*')

      if (servicesError) throw servicesError

      const servicesWithDetails = await Promise.all(servicesData.map(async (service) => {
        const { data: subServicesData, error: subServicesError } = await supabase
          .from('subservices')
          .select('id, title')
          .eq('serviceId', service.id)

        if (subServicesError) throw subServicesError

        const subServicesWithPackages = await Promise.all(subServicesData.map(async (subService) => {
          const { data: packagesData, error: packagesError } = await supabase
            .from('packages')
            .select('id, name, price, features')
            .eq('subserviceId', subService.id)

          if (packagesError) throw packagesError

          return {
            ...subService,
            packages: packagesData
          }
        }))

        return {
          ...service,
          subServices: subServicesWithPackages
        }
      }))

      setServices(servicesWithDetails)
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteService = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este servicio? Esta acción no se puede deshacer.')) {
      setLoading(true)
      try {
        const { error } = await supabase
          .from('services')
          .delete()
          .eq('id', id)

        if (error) throw error

        setServices(services.filter(service => service.id !== id))
      } catch (error) {
        console.error('Error deleting service:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  if (loading) {
    return <div className="min-h-screen bg-text-stone-850 text-white flex items-center justify-center">Cargando...</div>
  }

  return (
    <div className="min-h-screen bg-text-stone-850 text-white p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestionar Servicios</h1>
        <Button
          onClick={() => router.push('/admin/services/new')}
          className="bg-amber-600 hover:bg-amber-700 text-white inline-flex items-center"
        >
          <Plus className="mr-2 h-5 w-5" />
          Añadir Nuevo Servicio
        </Button>
      </div>
      <div className="space-y-6">
        {services.map((service) => (
          <div key={service.id} className="rounded-lg bg-zinc-900 p-6 shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="">{service.shortDescription}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => router.push(`/admin/services/${service.id}`)}
                  className="bg-amber-600 hover:bg-amber-700 p-2"
                >
                  <Edit className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => deleteService(service.id)}
                  className="bg-red-600 hover:bg-red-700 p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Subservicios:</h3>
              <ul className="list-disc list-inside space-y-2">
                {service.subServices.map((subService) => (
                  <li key={subService.id}>
                    {subService.title}
                    <ul className="list-circle list-inside ml-4 mt-1">
                      {subService.packages.map((pkg) => (
                        <li key={pkg.id} className="text-sm ">
                          {pkg.name} - ${pkg.price}
                          <ul className="list-disc list-inside ml-4">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="text-xs">{feature}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

