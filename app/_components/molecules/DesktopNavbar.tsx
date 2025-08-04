'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/app/_components/molecules/Navigation';
import { CartIcon } from '@/app/_components/molecules/CartIcon';
import { cn } from '@/app/_lib/utils';

interface DesktopNavbarProps {
  handleLogoClick: (e: React.MouseEvent) => void;
}

export function DesktopNavbar({ handleLogoClick }: DesktopNavbarProps) {
  return (
    <div className="hidden md:flex justify-between">
      <Link href="/" onClick={handleLogoClick}>
        <Image
          src="/Tegal.dev-AAA.png"
          alt="TegalDev Logo"
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
