'use client';

import {
  Calendar,
  CheckCircle,
  Code,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from 'lucide-react';

import { type UserChallenge } from '@/data/profile';

interface ProfileChallengesProps {
  challenges: UserChallenge[];
}

export function ProfileChallenges({ challenges }: ProfileChallengesProps) {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const difficultyConfig = {
    easy: {
      bg: 'bg-green-500/20',
      text: 'text-green-300',
      border: 'border-green-500/30',
      gradient: 'from-green-500 to-green-600',
    },
    medium: {
      bg: 'bg-yellow-500/20',
      text: 'text-yellow-300',
      border: 'border-yellow-500/30',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    hard: {
      bg: 'bg-red-500/20',
      text: 'text-red-300',
      border: 'border-red-500/30',
      gradient: 'from-red-500 to-red-600',
    },
    expert: {
      bg: 'bg-purple-500/20',
      text: 'text-purple-300',
      border: 'border-purple-500/30',
      gradient: 'from-purple-500 to-purple-600',
    },
  } as const;

  const getDifficultyConfig = (difficulty: string) => {
    return difficultyConfig[difficulty.toLowerCase() as keyof typeof difficultyConfig] || {
      bg: 'bg-gray-500/20',
      text: 'text-gray-300',
      border: 'border-gray-500/30',
      gradient: 'from-gray-500 to-gray-600',
    };
  };

  const categoryIconConfig = {
    algorithm: Target,
    'data structure': Code,
    'system design': TrendingUp,
    frontend: Star,
    backend: Zap,
  } as const;

  const getCategoryIcon = (category: string) => {
    return categoryIconConfig[category.toLowerCase() as keyof typeof categoryIconConfig] || Code;
  };

  const sortedChallenges = [...challenges].sort((a, b) => 
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );

  const difficultyStats = challenges.reduce((acc, challenge) => {
    acc[challenge.difficulty] = (acc[challenge.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryStats = challenges.reduce((acc, challenge) => {
    acc[challenge.category] = (acc[challenge.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 pointer-events-none"></div>
      <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Coding Challenges</h2>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Trophy className="h-4 w-4" />
          <span>{challenges.length} completed</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Difficulty Distribution */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Target className="h-4 w-4" />
            Difficulty Breakdown
          </h3>
          <div className="space-y-2">
            {Object.entries(difficultyStats).map(([difficulty, count]) => {
              const config = getDifficultyConfig(difficulty);
              const percentage = (count / challenges.length) * 100;
              
              return (
                <div key={difficulty} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text} ${config.border} border`}>
                      {difficulty}
                    </span>
                    <span className="text-sm text-gray-300">{count}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${config.gradient}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-8">{Math.round(percentage)}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Code className="h-4 w-4" />
            Category Breakdown
          </h3>
          <div className="space-y-2">
            {Object.entries(categoryStats).map(([category, count]) => {
              const Icon = getCategoryIcon(category);
              const percentage = (count / challenges.length) * 100;
              
              return (
                <div key={category} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-gray-200">{category}</span>
                    <span className="text-sm text-gray-300">({count})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-8">{Math.round(percentage)}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Challenges List */}
      <div className="space-y-4">
        {sortedChallenges.map((challenge, index) => {
          const difficultyConfig = getDifficultyConfig(challenge.difficulty);
          const CategoryIcon = getCategoryIcon(challenge.category);
          
          return (
            <div
              key={`${challenge.title}-${challenge.completedAt}-${index}`}
              className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 hover:shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:border-white/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Challenge Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                        {challenge.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyConfig.bg} ${difficultyConfig.text} ${difficultyConfig.border} border`}>
                          {challenge.difficulty}
                        </span>
                        <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                          <CategoryIcon className="h-3 w-3" />
                          <span>{challenge.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  {challenge.description && (
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  )}
                  
                  {/* Challenge Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3 text-sm">
                    {[
                      { icon: Calendar, text: formatDate(challenge.completedAt), color: 'text-gray-300' },
                      ...(challenge.score ? [{ icon: Star, text: `${challenge.score} points`, color: 'text-green-400' }] : []),
                      { icon: CheckCircle, text: 'Completed', color: 'text-green-400' },
                    ].map((stat, statIndex) => {
                      const Icon = stat.icon;
                      return (
                        <div key={`${challenge.title}-stat-${statIndex}`} className={`flex items-center gap-2 ${stat.color}`}>
                          <Icon className="h-4 w-4" />
                          <span>{stat.text}</span>
                        </div>
                      );
                    })}
                  </div>
                  

                  

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {challenges.length > 5 && (
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
            Load More Challenges
          </button>
        </div>
      )}
      </div>
    </div>
  );
}