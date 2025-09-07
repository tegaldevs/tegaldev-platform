'use client';

import Image from 'next/image';

interface HeroLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function HeroLogo({ 
  src, 
  alt, 
  width = 280, 
  height = 280 
}: HeroLogoProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative transition-all duration-500 hover:scale-105 drop-shadow-2xl"
      />
    </div>
  );
}