'use client';

import { ReactLenis } from 'lenis/react';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
        syncTouch: false,
        syncTouchLerp: 0.075,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
