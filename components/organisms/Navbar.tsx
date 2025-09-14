'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { cn } from '@/lib/utils';
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
        `fixed
        left-0
        right-0
        p-5
        z-20
        transition-all
        duration-300`,
        isScrolled
          ? `bg-black/40 backdrop-blur-md`
          : '',
      )}
    >
      <DesktopNavbar handleLogoClick={handleLogoClick} />
      <MobileNavbar handleLogoClick={handleLogoClick} />
    </nav>
  );
}
