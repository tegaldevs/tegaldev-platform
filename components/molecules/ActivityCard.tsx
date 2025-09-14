'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ActivityCard({
  icon: Icon,
  title,
  description,
}: ActivityCardProps) {
  return (
    <div
      className={cn(
        `bg-white/10
        backdrop-blur-sm
        rounded-md
        p-5
        border
        border-white/20
        hover:bg-white/20
        transition-all
        duration-300
        hover:cursor-default
        flex
        flex-col
        items-center
        gap-5`,
      )}
    >
      <Icon className="text-white" />
      <div className="flex flex-col gap-3 text-center">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  );
}
