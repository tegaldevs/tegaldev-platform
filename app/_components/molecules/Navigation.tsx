'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Button } from '@/app/_components/ui/button';
import {
  Users,
  LogOut,
  User,
  Calendar,
  BookOpen,
  Mic,
  Youtube,
  Menu,
  X,
  Trophy,
  Briefcase,
  ShoppingBag,
} from 'lucide-react';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet';
import { useState } from 'react';
import DesktopNavigation from './DesktopNavigation';

export function Navigation() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activitiesLinks = [
    {
      href: '/events',
      label: 'Events',
      icon: Calendar,
      description: 'Workshops, meetups & conferences',
    },
    {
      href: '/challenges',
      label: 'Challenges',
      icon: Trophy,
      description: 'Coding competitions & hackathons',
    },
    {
      href: '/jobs',
      label: 'Jobs',
      icon: Briefcase,
      description: 'Career opportunities & positions',
    },
  ];

  const contentLinks = [
    {
      href: '/blogs',
      label: 'Blogs',
      icon: BookOpen,
      description: 'Articles & tutorials',
    },
    {
      href: '/podcasts',
      label: 'Podcasts',
      icon: Mic,
      description: 'Audio conversations',
    },
    {
      href: '/videos',
      label: 'Videos',
      icon: Youtube,
      description: 'Video tutorials & content',
    },
  ];

  return (
    <div className="flex items-center space-x-4">
      <DesktopNavigation
        activitiesLinks={activitiesLinks}
        contentLinks={contentLinks}
      />

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full bg-black/95 backdrop-blur-md border-white/20 px-6"
          >
            <SheetHeader>
              <div className="flex items-center justify-between">
                <SheetTitle className="text-white flex items-center space-x-2">
                  <Image
                    src="/Tegal.dev-AAA.png"
                    alt="TegalDev Logo"
                    width={96}
                    height={96}
                    className="rounded-md"
                  />
                </SheetTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10 p-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </SheetHeader>
            <div className="mt-8 space-y-3 px-2">
              {/* Activities Section */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">
                  Activities
                </h3>
                {activitiesLinks.map(
                  ({ href, label, icon: Icon, description }) => {
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start space-x-3 px-4 py-3 ${
                            isActive
                              ? 'text-white bg-white/20 border-l-2 border-purple-400'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <div className="flex flex-col items-start">
                            <span>{label}</span>
                            <span className="text-xs text-gray-400">
                              {description}
                            </span>
                          </div>
                        </Button>
                      </Link>
                    );
                  },
                )}
              </div>

              {/* Content Section */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">
                  Content
                </h3>
                {contentLinks.map(
                  ({ href, label, icon: Icon, description }) => {
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start space-x-3 px-4 py-3 ${
                            isActive
                              ? 'text-white bg-white/20 border-l-2 border-purple-400'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <div className="flex flex-col items-start">
                            <span>{label}</span>
                            <span className="text-xs text-gray-400">
                              {description}
                            </span>
                          </div>
                        </Button>
                      </Link>
                    );
                  },
                )}
              </div>

              {/* Store */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">
                  Shop
                </h3>
                <Link href="/merchandise" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start space-x-3 px-4 py-3 ${
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

              <div className="border-t border-white/20 pt-6 mt-6">
                {session ? (
                  <>
                    <div className="flex items-center space-x-2 mb-4 px-4">
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
                        setIsOpen(false);
                      }}
                      variant="outline"
                      className="w-full justify-start space-x-3 px-4 py-3 border-white/20 text-white hover:bg-white/10"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </Button>
                  </>
                ) : status === 'loading' ? (
                  <>
                    {/* Mobile Sign In Button Skeleton */}
                    <div className="w-full flex items-center space-x-3 mb-3 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded">
                      <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      <div className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>

                    {/* Mobile Join Community Button Skeleton */}
                    <div className="w-full flex items-center space-x-3 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded">
                      <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full justify-start space-x-3 mb-3 px-4 py-3 border-white/20 hover:bg-white/70"
                      >
                        <User className="h-4 w-4" />
                        <span>Sign In</span>
                      </Button>
                    </Link>
                    <Link
                      href="/auth/register"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button className="w-full justify-start space-x-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        <Users className="h-4 w-4" />
                        <span>Join Community</span>
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center space-x-2">
        {session ? (
          <>
            <div className="flex items-center space-x-2 mr-1">
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
              onClick={() => signOut()}
              variant="outline"
              size="sm"
              className="flex items-center space-x-1 px-3 border-white/20 text-white hover:bg-white/10"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Sign Out</span>
            </Button>
          </>
        ) : status === 'loading' ? (
          <>
            {/* Sign In Button Skeleton */}
            <div className="flex items-center space-x-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            {/* Join Community Button Skeleton */}
            <div className="flex items-center space-x-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-1 px-3 border-white/20 hover:bg-white/70"
              >
                <User className="h-4 w-4" />
                <span className="text-sm">Sign In</span>
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 flex items-center space-x-1"
              >
                <Users className="h-4 w-4" />
                <span className="text-sm">Join Community</span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
