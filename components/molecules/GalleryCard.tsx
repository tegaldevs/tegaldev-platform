'use client';

import { ExternalLink, Calendar, Mic, Users2, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

type IconType = 'calendar' | 'mic' | 'users2' | 'wrench';

interface GalleryCardProps {
  iconType: IconType;
  title: string;
  description: string;
  href: string;
  gradientFrom: string;
  gradientTo: string;
  hoverColor: string;
  linkColor: string;
  className?: string;
}

const iconMap = {
  calendar: Calendar,
  mic: Mic,
  users2: Users2,
  wrench: Wrench,
};

export function GalleryCard({
  iconType,
  title,
  description,
  href,
  gradientFrom,
  gradientTo,
  hoverColor,
  linkColor,
  className,
}: GalleryCardProps) {
  const Icon = iconMap[iconType];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full',
        className
      )}
    >
      <div className={cn(
        'p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300',
        `bg-gradient-to-r ${gradientFrom} ${gradientTo}`
      )}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className={cn(
        'text-xl font-semibold text-white mb-2 text-center transition-colors',
        `group-hover:${hoverColor}`
      )}>
        {title}
      </h3>
      <p className="text-gray-300 text-sm text-center mb-3 flex-grow">
        {description}
      </p>
      <div className={cn(
        'flex items-center justify-center text-sm font-medium mt-auto',
        linkColor
      )}>
        <ExternalLink className="h-4 w-4 mr-1" />
        View Photos
      </div>
    </a>
  );
}