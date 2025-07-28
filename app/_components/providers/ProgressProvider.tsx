'use client';

import { ProgressProvider as BProgressProvider } from '@bprogress/next/app';

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  return (
    <BProgressProvider
      height="3px"
      color="#8b5cf6"
      options={{
        showSpinner: false,
        trickleSpeed: 200,
        minimum: 0.08,
        easing: 'ease',
        speed: 500,
      }}
    >
      {children}
    </BProgressProvider>
  );
}
