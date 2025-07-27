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
  ShoppingCart,
} from 'lucide-react';
import Image from 'next/image';

export function AuthNavigation() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === 'loading') {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    );
  }

  const navigationLinks = [
    { href: '/events', label: 'Events', icon: Calendar },
    { href: '/blogs', label: 'Blog', icon: BookOpen },
    { href: '/podcasts', label: 'Podcast', icon: Mic },
    { href: '/videos', label: 'Videos', icon: Youtube },
    { href: '/merchandise', label: 'Store', icon: ShoppingCart },
  ];

  if (session) {
    return (
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center space-x-1 relative ${
                    isActive
                      ? 'text-white bg-white/20 border-b-2 border-purple-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{label}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* User Info & Sign Out */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
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
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-6">
      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6">
        {navigationLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href}>
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center space-x-1 relative ${
                  isActive
                    ? 'text-white bg-white/20 border-b-2 border-purple-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{label}</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-2">
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
      </div>
    </div>
  );
}
