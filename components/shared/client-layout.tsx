'use client'

import { useEffect } from 'react'
import { initLenis } from '@/lib/lenis'
import { useScrollToHash } from '@/hooks/use-scroll-to-hash'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // Initialize scroll to hash functionality
  useScrollToHash()

  useEffect(() => {
    const lenis = initLenis()
    AOS.init({})
    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
