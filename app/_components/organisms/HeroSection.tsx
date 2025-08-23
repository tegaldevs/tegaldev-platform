'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { LoadingButton } from '../molecules/LoadingButton';
import { ExternalLink, HandHeart, Mail, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timeoutHero = setTimeout(() => setHeroVisible(true), 100);
    return () => {
      clearTimeout(timeoutHero);
    };
  }, []);

  return (
    <div
      className={
        `max-w-6xl space-y-10 relative z-10 transition-all duration-1000 ease-out ` +
        (heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')
      }
    >
      <div className="space-y-12">
        {/* Logo Section with enhanced presentation */}
        <div className="flex flex-col items-center space-y-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <Image
              src="/Tegal.dev-AAA.png"
              alt="Tegaldev Logo"
              width={280}
              height={280}
              className="relative transition-all duration-500 hover:scale-105 drop-shadow-2xl"
            />
          </div>

          {/* Enhanced title */}
          <div className="space-y-4">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Enhanced description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
          The curated software engineer community based in{' '}
          <span className="text-blue-300 font-medium">
            Tegal, Central Java, Indonesia.{' '}
          </span>
          <span className="text-white font-semibold">Tegal Dev</span> is
          collaborating with various tech communities worldwide.{' '}
          <span className="text-purple-300">
            We aim to improve educational activities
          </span>{' '}
          and{' '}
          <span className="text-purple-300">
            foster innovation in technology.
          </span>
        </p>

        {/* Enhanced Hero Input Section */}
        <form
          className="mt-12 max-w-lg mx-auto flex flex-col gap-2 items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="hero-email" className="sr-only">
              Email address
            </Label>
            <Input
              id="hero-email"
              type="email"
              placeholder="Enter your email to subscribe"
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              required
            />
          </div>
          <LoadingButton
            isLoading={false}
            loadingText="Subscribing..."
            type="submit"
            className="w-full h-12 mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 rounded-xl text-lg font-semibold"
            icon={Mail}
          >
            Subscribe
          </LoadingButton>
          <p className="text-gray-300 text-sm mt-4 text-center leading-relaxed">
            🚀 Stay updated with the latest tech events, workshops, and
            opportunities
          </p>
        </form>
      </div>

      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mt-16">
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
            className="px-10 py-4 text-lg font-semibold border-2 border-white/30 hover:border-white/50 hover:bg-white/70 flex items-center gap-3 w-full sm:w-64 h-16 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
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
            className="px-10 py-4 text-lg font-semibold border-2 border-orange-400/50 text-orange-300 hover:text-orange-300 hover:border-orange-400 hover:bg-orange-100 flex items-center gap-3 w-full sm:w-64 h-16 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <HandHeart className="h-6 w-6" />
            Support Community
          </Button>
        </Link>
      </div>
    </div>
  );
}
