'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?:
    | 'fade-up'
    | 'fade-in'
    | 'slide-left'
    | 'slide-right'
    | 'scale-up';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: React.ElementType;
  id?: string;
}

const ScrollAnimatedSection = forwardRef<
  HTMLElement,
  ScrollAnimatedSectionProps
>(
  (
    {
      children,
      className,
      animationType = 'fade-up',
      delay = 0,
      threshold = 0.1,
      triggerOnce = true,
      as: Component = 'div',
      id,
    },
    forwardedRef,
  ) => {
    const { ref, isVisible } = useScrollAnimation({
      threshold,
      delay,
      triggerOnce,
    });

    const getAnimationClasses = () => {
      const baseClasses = 'transition-all duration-700 ease-out';

      if (!isVisible)
        switch (animationType) {
          case 'fade-up':
            return `${baseClasses} opacity-0 translate-y-8`;
          case 'fade-in':
            return `${baseClasses} opacity-0`;
          case 'slide-left':
            return `${baseClasses} opacity-0 -translate-x-8`;
          case 'slide-right':
            return `${baseClasses} opacity-0 translate-x-8`;
          case 'scale-up':
            return `${baseClasses} opacity-0 scale-95`;
          default:
            return `${baseClasses} opacity-0 translate-y-8`;
        }

      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    };

    return (
      <Component
        id={id}
        ref={(node: HTMLElement | null) => {
          if (ref) {
            (ref as React.MutableRefObject<HTMLElement | null>).current = node;
          }
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            (
              forwardedRef as React.MutableRefObject<HTMLElement | null>
            ).current = node;
          }
        }}
        className={cn(getAnimationClasses(), className)}
      >
        {children}
      </Component>
    );
  },
);

ScrollAnimatedSection.displayName = 'ScrollAnimatedSection';

export { ScrollAnimatedSection };
