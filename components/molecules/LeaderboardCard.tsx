'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Medal, Award, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeaderboardCardProps {
  rank: number;
  name: string;
  username: string;
  experiencePoints: number;
  avatar?: string;
  className?: string;
}

export function LeaderboardCard({
  rank,
  name,
  username,
  experiencePoints,
  avatar,
  className,
}: LeaderboardCardProps) {
  const getRankIcon = () => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <Trophy className="h-5 w-5 text-blue-500" />;
    }
  };

  const getRankGradient = () => {
    switch (rank) {
      case 1:
        return 'from-yellow-500 to-orange-500';
      case 2:
        return 'from-gray-400 to-gray-600';
      case 3:
        return 'from-amber-600 to-yellow-600';
      default:
        return 'from-blue-500 to-indigo-500';
    }
  };



  return (
    <div
      className={cn(
        'bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105',
        className
      )}
    >
      <div className="flex items-center space-x-4">
        {/* Rank */}
        <div className="flex-shrink-0">
          <div
            className={cn(
              'w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center',
              getRankGradient()
            )}
          >
            {rank <= 3 ? (
              getRankIcon()
            ) : (
              <span className="text-white font-bold text-lg">#{rank}</span>
            )}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={48}
                height={48}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-white font-semibold text-lg">
                {name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <Link href={`/profile/${username}`} className="block hover:opacity-80 transition-opacity">
            <h3 className="text-lg font-semibold text-white truncate hover:text-blue-300 transition-colors cursor-pointer">
              {name}
            </h3>
            <p className="text-sm text-gray-300 truncate hover:text-blue-200 transition-colors cursor-pointer">@{username}</p>
          </Link>
        </div>

        {/* Experience Points */}
        <div className="text-right">
          <div className="text-2xl font-bold text-white">
            {experiencePoints.toLocaleString()}
          </div>
          <div className="text-sm text-gray-300">EXP</div>
        </div>
      </div>
    </div>
  );
}