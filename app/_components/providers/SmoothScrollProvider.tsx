'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        // Smooth scrolling configuration
        lerp: 0.1, // Linear interpolation factor (0-1, lower = smoother but slower)
        duration: 1.2, // Scroll duration in seconds
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
        touchMultiplier: 2, // Touch sensitivity
        infinite: false, // Disable infinite scrolling
        autoResize: true, // Auto resize on window resize
        syncTouch: false, // Sync touch events
        syncTouchLerp: 0.075, // Touch lerp factor
        wheelMultiplier: 1, // Wheel sensitivity
      }}
    >
      {children}
    </ReactLenis>
  )
}