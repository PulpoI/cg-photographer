'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, useFieldArray } from 'react-hook-form'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { PlusCircle, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface Service {
  id?: string
  title: string
  shortDescription: string
  longDescription: string
  subServices: SubService[]
}

interface SubService {
  id?: string
  title: string
  packages: Package[]
}

interface Package {
  id?: string
  name: string
  price: number
  features: string[]
}

export default function ServiceForm({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { register, control, handleSubmit, setValue, watch } = useForm<Service>()
  const { fields: subServiceFields, append: appendSubService, remove: removeSubService } = useFieldArray({
    control,
    name: "subServices"
  })
  const supabase = createClientComponentClient()

  useEffect(() => {
    if (params.id !== 'new') {
      fetchService(params.id)
    }
  }, [params.id])

  const fetchService = async (id: string) => {
    setLoading(true)
    try {
      const { data: serviceData, error: serviceError } = await supabase
        .from('services')
        .select('*')
        .eq('id', id)
        .single()

      if (serviceError) throw serviceError

      const { data: subServicesData, error: subServicesError } = await supabase
        .from('subservices')
        .select('*')
        .eq('serviceId', id)

      if (subServicesError) throw subServicesError

      const subServicesWithPackages = await Promise.all(subServicesData.map(async (subService) => {
        const { data: packagesData, error: packagesError } = await supabase
          .from('packages')
          .select('*')
          .eq('subserviceId', subService.id)

        if (packagesError) throw packagesError

        return { ...subService, packages: packagesData }
      }))

      setValue('title', serviceData.title)
      setValue('shortDescription', serviceData.shortDescription)
      setValue('longDescription', serviceData.longDescription)
      setValue('subServices', subServicesWithPackages)
    } catch (error) {
      console.error('Error fetching service:', error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = async (data: Service) => {
    setLoading(true)
    try {
      let serviceId = params.id
      if (params.id === 'new') {
        const { data: newService, error: serviceError } = await supabase
          .from('services')
          .insert([{ 
            title: data.title, 
            shortDescription: data.shortDescription, 
            longDescription: data.longDescription 
          }])
          .select()
        if (serviceError) throw serviceError
        serviceId = newService[0].id
      } else {
        const { error: serviceError } = await supabase
          .from('services')
          .update({ 
            title: data.title, 
            shortDescription: data.shortDescription, 
            longDescription: data.longDescription 
          })
          .eq('id', serviceId)
        if (serviceError) throw serviceError
      }

      for (const subService of data.subServices) {
        let subServiceId = subService.id
        if (!subServiceId) {
          const { data: newSubService, error: subServiceError } = await supabase
            .from('subservices')
            .insert([{ title: subService.title, serviceId }])
            .select()
          if (subServiceError) throw subServiceError
          subServiceId = newSubService[0].id
        } else {
          const { error: subServiceError } = await supabase
            .from('subservices')
            .update({ title: subService.title })
            .eq('id', subServiceId)
          if (subServiceError) throw subServiceError
        }

        for (const pkg of subService.packages) {
          if (!pkg.id) {
            const { error: packageError } = await supabase
              .from('packages')
              .insert([{ 
                name: pkg.name, 
                price: pkg.price, 
                features: pkg.features, 
                subserviceId: subServiceId 
              }])
            if (packageError) throw packageError
          } else {
            const { error: packageError } = await supabase
              .from('packages')
              .update({ 
                name: pkg.name, 
                price: pkg.price, 
                features: pkg.features 
              })
              .eq('id', pkg.id)
            if (packageError) throw packageError
          }
        }
      }

      router.push('/admin/services')
    } catch (error) {
      console.error('Error saving service:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Cargando...</div>
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="mb-8 text-2xl font-bold">
        {params.id === 'new' ? 'Añadir Nuevo Servicio' : 'Editar Servicio'}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-zinc-400">
            Título
          </label>
          <Input
            id="title"
            {...register('title', { required: true })}
            className="mt-1 bg-zinc-800 border-zinc-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="shortDescription" className="block text-sm font-medium text-zinc-400">
            Descripción Corta
          </label>
          <Input
            id="shortDescription"
            {...register('shortDescription', { required: true })}
            className="mt-1 bg-zinc-800 border-zinc-700 text-white"
          />
        </div>
        <div>
          <label htmlFor="longDescription" className="block text-sm font-medium text-zinc-400">
            Descripción Larga
          </label>
          <Textarea
            id="longDescription"
            {...register('longDescription', { required: true })}
            rows={4}
            className="mt-1 bg-zinc-800 border-zinc-700 text-white"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Subservicios</h2>
          {subServiceFields.map((field, subServiceIndex) => (
            <div key={field.id} className="border border-zinc-700 p-4 mb-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-semibold">Subservicio {subServiceIndex + 1}</h3>
                <Button type="button" onClick={() => removeSubService(subServiceIndex)} className="bg-red-600 hover:bg-red-700">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
              <Input
                {...register(`subServices.${subServiceIndex}.title` as const, { required: true })}
                placeholder="Título del subservicio"
                className="mt-1 bg-zinc-800 border-zinc-700 text-white"
              />
              <h4 className="text-md font-semibold mt-4 mb-2">Paquetes</h4>
              <div className="space-y-4">
                {watch(`subServices.${subServiceIndex}.packages`)?.map((_, packageIndex) => (
                  <div key={packageIndex} className="border border-zinc-700 p-4 rounded">
                    <Input
                      {...register(`subServices.${subServiceIndex}.packages.${packageIndex}.name` as const, { required: true })}
                      placeholder="Nombre del paquete"
                      className="mt-1 bg-zinc-800 border-zinc-700 text-white"
                    />
                    <Input
                      type="number"
                      {...register(`subServices.${subServiceIndex}.packages.${packageIndex}.price` as const, { required: true, valueAsNumber: true })}
                      placeholder="Precio"
                      className="mt-2 bg-zinc-800 border-zinc-700 text-white"
                    />
                    <div className="mt-2">
                      {watch(`subServices.${subServiceIndex}.packages.${packageIndex}.features`)?.map((_, featureIndex) => (
                        <Input
                          key={featureIndex}
                          {...register(`subServices.${subServiceIndex}.packages.${packageIndex}.features.${featureIndex}` as const, { required: true })}
                          placeholder={`Característica ${featureIndex + 1}`}
                          className="mt-2 bg-zinc-800 border-zinc-700 text-white"
                        />
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={() => {
                        const features = watch(`subServices.${subServiceIndex}.packages.${packageIndex}.features`) || []
                        setValue(`subServices.${subServiceIndex}.packages.${packageIndex}.features`, [...features, ''])
                      }}
                      className="mt-2 bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      <PlusCircle className="h-5 w-5 mr-2" /> Añadir Característica
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                onClick={() => {
                  const packages = watch(`subServices.${subServiceIndex}.packages`) || []
                  setValue(`subServices.${subServiceIndex}.packages`, [
                    ...packages,
                    { name: '', price: 0, features: [''] }
                  ])
                }}
                className="mt-2 bg-amber-600 hover:bg-amber-700 text-white"
              >
                <PlusCircle className="h-5 w-5 mr-2" /> Añadir Paquete
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => appendSubService({ title: '', packages: [{ name: '', price: 0, features: [''] }] })}
            className="mt-2 bg-amber-600 hover:bg-amber-700 text-white"
          >
            <PlusCircle className="h-5 w-5 mr-2" /> Añadir Subservicio
          </Button>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="bg-amber-600 hover:bg-amber-700 text-white"
        >
          {loading ? 'Guardando...' : (params.id === 'new' ? 'Crear Servicio' : 'Actualizar Servicio')}
        </Button>
      </form>
    </div>
  )
}

