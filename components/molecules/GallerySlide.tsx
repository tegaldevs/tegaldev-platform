'use client';

import { LucideIcon } from 'lucide-react';

interface GallerySlideProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  gradientFrom: string;
  gradientTo: string;
}

export function GallerySlide({
  icon: Icon,
  title,
  subtitle,
  gradientFrom,
  gradientTo,
}: GallerySlideProps) {
  return (
    <div
      className={`flex-shrink-0 w-80 h-60 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-md border border-white/20 flex items-center justify-center`}
    >
      <div className="text-center">
        <Icon className="h-12 w-12 text-white mx-auto mb-2" />
        <p className="text-white font-semibold">{title}</p>
        <p className="text-gray-300 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
