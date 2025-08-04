'use client';

import { ReactNode } from 'react';
import { Navbar } from '@/app/_components/organisms/Navbar';
import { Footer } from '@/app/_components/ui/Footer';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

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
