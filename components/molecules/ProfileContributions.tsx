'use client';

import {
  Calendar,
  ExternalLink,
  Eye,
  FileText,
  Heart,
  Mic,
  Video,
} from 'lucide-react';
import Image from 'next/image';

import { type UserContribution } from '@/data/profile';

interface ProfileContributionsProps {
  contributions: UserContribution[];
}

export function ProfileContributions({ contributions }: ProfileContributionsProps) {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const contributionTypeConfig = {
    blog: {
      icon: FileText,
      bg: 'bg-blue-500/20',
      text: 'text-blue-300',
      border: 'border-blue-500/30',
      gradient: 'from-blue-500 to-blue-600',
    },
    video: {
      icon: Video,
      bg: 'bg-red-500/20',
      text: 'text-red-300',
      border: 'border-red-500/30',
      gradient: 'from-red-500 to-red-600',
    },
    podcast: {
      icon: Mic,
      bg: 'bg-green-500/20',
      text: 'text-green-300',
      border: 'border-green-500/30',
      gradient: 'from-green-500 to-green-600',
    },
  } as const;

  const getTypeConfig = (type: string) => {
    return contributionTypeConfig[type as keyof typeof contributionTypeConfig] || {
      icon: FileText,
      bg: 'bg-gray-500/20',
      text: 'text-gray-300',
      border: 'border-gray-500/30',
      gradient: 'from-gray-500 to-gray-600',
    };
  };

  const groupedContributions = contributions.reduce((acc, contribution) => {
    if (!acc[contribution.type]) {
      acc[contribution.type] = [];
    }
    acc[contribution.type].push(contribution);
    return acc;
  }, {} as Record<string, UserContribution[]>);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
      <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Contributions</h2>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>{contributions.length} total contributions</span>
        </div>
      </div>

      {/* Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(groupedContributions).map((type) => {
          const config = getTypeConfig(type);
          const Icon = config.icon;
          const count = groupedContributions[type].length;
          
          return (
            <div
              key={type}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${config.bg} ${config.border} border`}
            >
              <Icon className={`h-4 w-4 ${config.text}`} />
              <span className={`font-medium ${config.text} capitalize`}>{type}s</span>
              <span className={`text-xs ${config.text} bg-white/50 px-2 py-0.5 rounded-full`}>
                {count}
              </span>
            </div>
          );
        })}
      </div>

      {/* Contributions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributions.map((contribution, index) => {
          const config = getTypeConfig(contribution.type);
          const Icon = config.icon;
          
          return (
            <div
              key={`${contribution.title}-${contribution.type}-${index}`}
              className="group bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/50 overflow-hidden hover:shadow-lg hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:border-gray-300/60"
            >
              {/* Thumbnail */}
              {contribution.thumbnail && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={contribution.thumbnail}
                    alt={contribution.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className={`absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full ${config.bg} ${config.border} border backdrop-blur-sm`}>
                    <Icon className={`h-3 w-3 ${config.text}`} />
                    <span className={`text-xs font-medium ${config.text} capitalize`}>
                      {contribution.type}
                    </span>
                  </div>

                </div>
              )}

              <div className="p-4">
                {/* Title and Description */}
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {contribution.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {contribution.description}
                </p>

                {/* Tags */}
                {contribution.tags && contribution.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {contribution.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={`${contribution.title}-tag-${tag}-${tagIndex}`}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {contribution.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{contribution.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{formatNumber(contribution.views)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{formatNumber(contribution.likes)}</span>
                    </div>

                  </div>
                </div>

                {/* Date and Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(contribution.publishedAt)}</span>
                  </div>
                  {contribution.url && (
                    <a
                      href={contribution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 px-3 py-1 rounded-full ${config.bg} ${config.text} hover:bg-opacity-80 transition-colors duration-200 text-xs font-medium`}
                    >
                      <span>View</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {contributions.length > 6 && (
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
            Load More Contributions
          </button>
        </div>
      )}
      </div>
    </div>
  );
}