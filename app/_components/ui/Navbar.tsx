'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AuthNavigation } from '@/app/_components/auth/AuthNavigation';
import { CartIcon } from '@/app/_components/ui/CartIcon';
import { useSmoothScroll } from '@/app/_hooks/useSmoothScroll';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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
      className={`max-w-4xl mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-md mx-4 md:mt-4 rounded-md shadow-lg'
          : 'bg-transparent'
      }`}
      style={{ transform: 'none' }} // Ensure no transform interference
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center py-6">
          <div className="flex items-center space-x-2">
            <Link href="/" onClick={handleLogoClick}>
              <Image
                src="/Tegal.dev-AAA.png"
                alt="TegalDev Logo"
                width={96}
                height={96}
                className="transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 hover:opacity-80"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <AuthNavigation />
            <CartIcon />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-center py-6">
          <div className="flex items-center">
            <AuthNavigation />
          </div>
          <div className="flex items-center">
            <Link href="/" onClick={handleLogoClick}>
              <Image
                src="/Tegal.dev-AAA.png"
                alt="TegalDev Logo"
                width={64}
                height={64}
                className="transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 hover:opacity-80"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
