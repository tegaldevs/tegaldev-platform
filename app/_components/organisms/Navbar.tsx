'use client';

import { useSmoothScroll } from '@/app/_hooks/useSmoothScroll';
import { cn } from '@/app/_lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DesktopNavbar } from '../molecules/DesktopNavbar';
import { MobileNavbar } from '../molecules/MobileNavbar';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      scrollToTop({ duration: 1.2 });
    }
  };

  return (
    <nav
      className={cn(
        `max-w-4xl
        mx-auto
        fixed
        top-0
        left-0
        right-0
        p-6
        z-20
        transition-all
        duration-300`,
        isScrolled
          ? 'bg-black/40 backdrop-blur-md md:mt-4 rounded-md shadow-md'
          : 'bg-transparent',
      )}
    >
      <DesktopNavbar handleLogoClick={handleLogoClick} />
      <MobileNavbar handleLogoClick={handleLogoClick} />
    </nav>
  );
}
