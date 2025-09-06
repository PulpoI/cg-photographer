'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error fetching session:', error)
        setLoading(false)
        return
      }

      if (session) {
        setUser(session.user)
      } else {
        router.push('/admin/login')
      }
      setLoading(false)
    }
    getUser()
  }, [router, supabase.auth])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  if (loading) return <div className="min-h-screen bg-text-stone-850 text-white flex items-center justify-center">Cargando...</div>

  if (!user) return null

  return (
    <div className="min-h-screen bg-text-stone-850 text-white p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard de Administración</h1>
        <Button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Cerrar sesión
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-zinc-900 p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Gestionar Servicios</h2>
          <p className="mb-4">Añade, edita o elimina los servicios ofrecidos.</p>
          <Button
            onClick={() => router.push('/admin/services')}
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            Ir a Servicios
          </Button>
        </div>
        {/* Aquí puedes añadir más tarjetas para otras secciones del dashboard */}
      </div>
    </div>
  )
}

