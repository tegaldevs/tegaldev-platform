'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { CartIcon } from './CartIcon';

interface DesktopNavbarProps {
  handleLogoClick: (e: React.MouseEvent) => void;
}

export function DesktopNavbar({ handleLogoClick }: DesktopNavbarProps) {
  return (
    <div className="hidden md:flex justify-between">
      <Link href="/" onClick={handleLogoClick}>
        <Image
          src="/Tegal.dev-AAA.png"
          alt="Tegal Dev Logo"
          width={96}
          height={96}
          className={cn(
            `cursor-pointer
            hover:scale-110
            active:scale-95
            hover:opacity-80
            transition-all
            duration-300`,
          )}
        />
      </Link>
      <div className="flex items-center gap-5">
        <Navigation />
        <CartIcon />
      </div>
    </div>
  );
}
