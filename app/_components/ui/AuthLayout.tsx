'use client';

import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthNavigation } from '@/app/_components/auth/AuthNavigation';
import { Footer } from '@/app/_components/ui/Footer';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      {/* Fixed Navigation */}
      <nav
        className={`max-w-5xl mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/20 backdrop-blur-md mx-4 mt-4 rounded-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/Tegal.dev-AAA.png"
                  alt="TegalDev Logo"
                  width={96}
                  height={96}
                  className="transition-all duration-300 cursor-pointer"
                />
              </Link>
            </div>
            <AuthNavigation />
          </div>
        </div>
      </nav>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex items-center justify-center min-h-[calc(100vh-6rem)]">
          <div className="w-full max-w-md mx-auto space-y-8">
            {/* Community Header */}
            <div className="text-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <p className="text-gray-200 mt-2">{subtitle}</p>
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
