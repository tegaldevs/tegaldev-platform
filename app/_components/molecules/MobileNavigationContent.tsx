import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { SheetHeader, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';
import { LogOut, ShoppingBag, User, Users } from 'lucide-react';
import Image from 'next/image';
import { activitiesLinks, contentLinks } from '@/app/_lib/navigation-data';
import Link from 'next/link';
import { MobileNavigationSection } from './MobileNavigationSection';

interface MobileNavigationContentProps {
  onClose: () => void;
}

export function MobileNavigationContent({
  onClose,
}: MobileNavigationContentProps) {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  return (
    <>
      <SheetHeader>
        <SheetTitle>
          <Link href="/">
            <Image
              src="/Tegal.dev-AAA.png"
              alt="TegalDev Logo"
              width={48}
              height={48}
            />
          </Link>
        </SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-3 px-4">
        <MobileNavigationSection
          title="Activities"
          items={activitiesLinks}
          onClose={onClose}
        />
        <MobileNavigationSection
          title="Content"
          items={contentLinks}
          onClose={onClose}
        />

        {/* Store */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Shop
          </h3>
          <Link href="/merchandise" onClick={onClose}>
            <Button
              variant="ghost"
              className={`w-full justify-start py-3 ${
                pathname === '/merchandise'
                  ? 'text-white bg-white/20 border-l-2 border-purple-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <div className="flex flex-col items-start">
                <span>Store</span>
                <span className="text-xs text-gray-400">
                  Merchandise & gear
                </span>
              </div>
            </Button>
          </Link>
        </div>

        <div className="border-t border-white/20 pt-6 mt-3">
          {session ? (
            <>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/Tegal.dev-AAA.png"
                  alt="TegalDev Logo"
                  width={20}
                  height={20}
                  className="rounded-md"
                />
                <span className="text-sm font-medium text-gray-300">
                  Welcome, {session.user.name || session.user.username}!
                </span>
              </div>
              <Button
                onClick={() => {
                  signOut();
                  onClose();
                }}
                variant="outline"
                className="w-full justify-start py-3 border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </>
          ) : status === 'loading' ? (
            <>
              <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </>
          ) : (
            <>
              <Link href="/auth/login" onClick={onClose}>
                <Button
                  variant="outline"
                  className="w-full justify-start mb-3 py-3 border-white/20 hover:bg-white/70 text-black"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Button>
              </Link>
              <Link href="/auth/register" onClick={onClose}>
                <Button className="w-full justify-start py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  <Users className="h-4 w-4" />
                  <span>Join Community</span>
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
