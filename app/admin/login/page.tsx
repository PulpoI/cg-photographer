'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/admin/dashboard')
      } else {
        setLoading(false)
      }
    }
    checkSession()
  }, [router, supabase.auth])

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setError(null)
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (error) throw error

      router.push('/admin/dashboard')
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.')
      console.error('Error de inicio de sesión:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-white">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg bg-zinc-900 p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-white">Iniciar sesión</h1>
        {error && <p className="mb-4 text-amber-600">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
              Correo electrónico
            </label>
            <Input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="mt-1 bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-400">
              Contraseña
            </label>
            <Input
              type="password"
              id="password"
              {...register('password', { required: true })}
              className="mt-1 bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
          >
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>
  )
}

