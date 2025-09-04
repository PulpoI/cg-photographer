'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Camera, ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Icono de cámara decorativo */}
        <div className="flex justify-center">
          <div className="relative">
            <Camera className="h-24 w-24 text-amber-600" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
              !
            </div>
          </div>
        </div>

        {/* Mensaje principal */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-zinc-800">404</h1>
          <h2 className="text-2xl font-bold text-zinc-700">
            Página no encontrada
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            Lo siento, la página que buscas aún está en proceso de revelado.
            <br />
            <span className="text-sm text-zinc-500 mt-2 block">
              Esta sección estará disponible pronto.
            </span>
          </p>
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Ir a Inicio
            </Button>
          </Link>
          
          <Link href="/servicios">
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 w-full sm:w-auto">
              <Camera className="h-4 w-4 mr-2" />
              Ver Servicios
            </Button>
          </Link>
        </div>

        {/* Mensaje adicional */}
        <div className="pt-6 border-t border-zinc-200">
          <p className="text-sm text-zinc-500">
            ¿No encuentras lo que buscas?{" "}
            <Link 
              href="/#contact" 
              className="text-amber-600 hover:text-amber-700 font-medium underline"
            >
              Contáctanos
            </Link>
          </p>
        </div>
      </div>

      {/* Decoración de fondo sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full opacity-20"></div>
      </div>
    </div>
  )
}
