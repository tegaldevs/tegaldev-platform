'use client';

import Link from 'next/link';
import { Navigation } from './Navigation';
import Image from 'next/image';
import { cn } from '@/app/_lib/utils';
import { CartIcon } from './CartIcon';

interface MobileNavbarProps {
  handleLogoClick: (e: React.MouseEvent) => void;
}

export function MobileNavbar({ handleLogoClick }: MobileNavbarProps) {
  return (
    <div className="flex md:hidden justify-between items-center">
      <Navigation />
      <Link href="/" onClick={handleLogoClick}>
        <Image
          src="/Tegal.dev-AAA.png"
          alt="TegalDev Logo"
          width={64}
          height={64}
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
      <CartIcon />
    </div>
  );
}
