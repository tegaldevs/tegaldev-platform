'use client';

import { Button } from '../ui/button';
import { ExternalLink, HandHeart, Users } from 'lucide-react';
import Link from 'next/link';

interface HeroActionButtonsProps {
  className?: string;
}

export function HeroActionButtons({ className = '' }: HeroActionButtonsProps) {
  return (
    <div className={`flex flex-col lg:flex-row gap-6 justify-center items-center mt-16 ${className}`}>
      <Link href="/auth/register" className="w-full sm:w-auto">
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold flex items-center gap-3 w-full sm:w-64 h-16 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <Users className="h-6 w-6" />
          Join Community
        </Button>
      </Link>
      
      <Link
        href="https://linktr.ee/tegaldev"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <Button
          variant="outline"
          size="lg"
          className="px-10 py-4 text-lg font-semibold border-2 border-green-400/50 bg-green-100/10 text-green-300 hover:text-green-200 hover:border-green-400 hover:bg-green-100/20 flex items-center gap-3 w-full sm:w-64 h-16 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
        >
          <ExternalLink className="h-6 w-6" />
          Connect Community
        </Button>
      </Link>
      
      <Link
        href="https://saweria.co/tegaldev"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <Button
          variant="outline"
          size="lg"
          className="px-10 py-4 text-lg font-semibold border-2 border-red-400/50 bg-red-100/10 text-red-300 hover:text-red-200 hover:border-red-400 hover:bg-red-100/20 flex items-center gap-3 w-full sm:w-64 h-16 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
        >
          <HandHeart className="h-6 w-6 text-red-400" />
          Support Community
        </Button>
      </Link>
    </div>
  );
}