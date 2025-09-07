'use client';

import { useLenis } from 'lenis/react';
import { useCallback } from 'react';

export function useSmoothScroll() {
  const lenis = useLenis();

  const scrollTo = useCallback(
    (
      target: string | number | HTMLElement,
      options?: {
        offset?: number;
        duration?: number;
        easing?: (t: number) => number;
        immediate?: boolean;
        lock?: boolean;
        force?: boolean;
        onComplete?: () => void;
      },
    ) => {
      if (!lenis) return;

      const defaultOptions = {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        immediate: false,
        lock: false,
        force: false,
        ...options,
      };

      lenis.scrollTo(target, defaultOptions);
    },
    [lenis],
  );

  const scrollToTop = useCallback(
    (options?: { duration?: number; immediate?: boolean }) => {
      scrollTo(0, options);
    },
    [scrollTo],
  );

  const scrollToBottom = useCallback(
    (options?: { duration?: number; immediate?: boolean }) => {
      if (!lenis) return;
      scrollTo(document.body.scrollHeight, options);
    },
    [scrollTo, lenis],
  );

  const scrollToElement = useCallback(
    (
      selector: string,
      options?: {
        offset?: number;
        duration?: number;
        immediate?: boolean;
      },
    ) => {
      const element = document.querySelector(selector);
      if (element) {
        scrollTo(element as HTMLElement, options);
      }
    },
    [scrollTo],
  );

  const start = useCallback(() => {
    lenis?.start();
  }, [lenis]);

  const stop = useCallback(() => {
    lenis?.stop();
  }, [lenis]);

  const resize = useCallback(() => {
    lenis?.resize();
  }, [lenis]);

  return {
    scrollTo,
    scrollToTop,
    scrollToBottom,
    scrollToElement,
    start,
    stop,
    resize,
    lenis,
  };
}
