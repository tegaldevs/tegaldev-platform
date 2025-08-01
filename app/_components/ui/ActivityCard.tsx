'use client';

import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

export function ActivityCard({
  icon: Icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}: ActivityCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-md p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div
        className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} p-2.5 rounded-md w-fit mx-auto mb-3`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-200 text-sm text-center">{description}</p>
    </div>
  );
}
