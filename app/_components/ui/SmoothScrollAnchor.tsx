'use client';

import { useSmoothScroll } from '@/app/_hooks/useSmoothScroll';
import { ReactNode, MouseEvent } from 'react';

interface SmoothScrollAnchorProps {
  href: string;
  children: ReactNode;
  className?: string;
  offset?: number;
  duration?: number;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function SmoothScrollAnchor({
  href,
  children,
  className,
  offset = -100, // Default offset for fixed headers
  duration = 1.2,
  onClick,
  ...props
}: SmoothScrollAnchorProps) {
  const { scrollToElement } = useSmoothScroll();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Check if it's an internal anchor link
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToElement(href, { offset, duration });
    }

    // Call custom onClick if provided
    onClick?.(e);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
