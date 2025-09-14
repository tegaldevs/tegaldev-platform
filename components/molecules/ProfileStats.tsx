'use client';

import {
  Calendar,
  Eye,
  FileText,
  Mic,
  TrendingUp,
  Trophy,
  Users,
  Video,
} from 'lucide-react';

import { type UserStats } from '@/data/profile';

interface ProfileStatsProps {
  stats: UserStats;
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const activityStats = [
    {
      icon: FileText,
      label: 'Blog Posts',
      value: stats.blogPosts,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-300',
    },
    {
      icon: Video,
      label: 'Videos',
      value: stats.videos,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-500/20',
      iconColor: 'text-red-300',
    },
    {
      icon: Mic,
      label: 'Podcasts',
      value: stats.podcasts,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-300',
    },
    {
      icon: Calendar,
      label: 'Events Attended',
      value: stats.eventsAttended,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-300',
    },
    {
      icon: Trophy,
      label: 'Challenges Completed',
      value: stats.challengesCompleted,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500/20',
      iconColor: 'text-orange-300',
    },
    {
      icon: TrendingUp,
      label: 'Total Contributions',
      value: stats.totalContributions,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-500/20',
      iconColor: 'text-indigo-300',
    },
  ];

  const summaryStats = [
    {
      value: stats.totalViews,
      label: 'Total Views',
      icon: Eye,
    },
    {
      value: stats.totalLikes,
      label: 'Total Likes',
    },
    {
      value: stats.followers,
      label: 'Followers',
      icon: Users,
    },
    {
      value: stats.following,
      label: 'Following',
    },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 pointer-events-none"></div>
      <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Activity Overview</h2>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <TrendingUp className="h-4 w-4" />
          <span>Last 12 months</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activityStats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${index}`}
              className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${item.bgColor}`}>
                      <Icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <div className="text-sm font-medium text-gray-300">
                      {item.label}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {formatNumber(item.value)}
                  </div>
                </div>
              </div>
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {summaryStats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="text-lg font-bold text-white">
                {formatNumber(value)}
              </div>
              <div className="text-sm text-gray-300 flex items-center justify-center gap-1">
                {Icon && <Icon className="h-3 w-3" />}
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}