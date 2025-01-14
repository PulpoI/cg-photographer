import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  // Redirigir /admin a /admin/dashboard
  if (req.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url))
  }

  // Lista de rutas públicas que no requieren autenticación
  const publicRoutes = ['/admin/login']
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname)

  // Si es una ruta pública y el usuario está autenticado, redirigir al dashboard
  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url))
  }

  // Si no es una ruta pública y el usuario no está autenticado, redirigir al login
  if (!isPublicRoute && !session && req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*']
}

