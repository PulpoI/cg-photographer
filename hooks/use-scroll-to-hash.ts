'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash

    if (hash) {
      // Remove the # from the hash
      const elementId = hash.substring(1)
      
      // Wait for the page to fully load and then scroll
      const scrollToElement = () => {
        const element = document.getElementById(elementId)
        
        if (element) {
          // Calculate the offset for the fixed navbar (approximately 80px)
          const navbarOffset = 80
          const elementPosition = element.offsetTop - navbarOffset
          
          // Try to use Lenis if available, otherwise fallback to native scroll
          const lenis = (window as any).lenis
          
          if (lenis && typeof lenis.scrollTo === 'function') {
            // Use Lenis for smooth scrolling
            lenis.scrollTo(elementPosition, {
              duration: 1.2,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            })
          } else {
            // Fallback to native smooth scroll
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }
        }
      }

      // Use a timeout to ensure the page is fully rendered and Lenis is initialized
      const timeoutId = setTimeout(scrollToElement, 300)
      
      return () => clearTimeout(timeoutId)
    }
  }, [pathname])

  // Function to manually scroll to an element by ID
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    
    if (element) {
      const navbarOffset = 80
      const elementPosition = element.offsetTop - navbarOffset
      
      // Try to use Lenis if available, otherwise fallback to native scroll
      const lenis = (window as any).lenis
      
      if (lenis && typeof lenis.scrollTo === 'function') {
        // Use Lenis for smooth scrolling
        lenis.scrollTo(elementPosition, {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
      } else {
        // Fallback to native smooth scroll
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return { scrollToElement }
}
