'use client';

import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Star,
  Medal,
  Crown,
  Target,
  Zap,
  Users,
  Calendar,
  TrendingUp,
  CheckCircle,
  Lock,
  Gift,
  Flame,
  BookOpen,
  Video,
  Mic,
  Code,
  Heart,
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'content' | 'community' | 'milestone' | 'special';
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isUnlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward?: string;
}

interface UserStats {
  totalPoints: number;
  level: number;
  nextLevelPoints: number;
  currentLevelPoints: number;
  rank: number;
  totalUsers: number;
  unlockedAchievements: number;
  totalAchievements: number;
}

const mockAchievements: Achievement[] = [
  {
    id: 'first_blog',
    title: 'First Steps',
    description: 'Publish your first blog post',
    category: 'content',
    icon: BookOpen,
    isUnlocked: true,
    unlockedAt: '2024-01-10',
    progress: 1,
    maxProgress: 1,
    points: 100,
    rarity: 'common',
    reward: 'Blog Writer Badge',
  },
  {
    id: 'prolific_writer',
    title: 'Prolific Writer',
    description: 'Publish 10 blog posts',
    category: 'content',
    icon: BookOpen,
    isUnlocked: true,
    unlockedAt: '2024-01-15',
    progress: 10,
    maxProgress: 10,
    points: 500,
    rarity: 'rare',
    reward: 'Content Creator Badge',
  },
  {
    id: 'video_creator',
    title: 'Video Creator',
    description: 'Upload 5 video tutorials',
    category: 'content',
    icon: Video,
    isUnlocked: false,
    progress: 2,
    maxProgress: 5,
    points: 300,
    rarity: 'rare',
  },
  {
    id: 'podcast_host',
    title: 'Podcast Host',
    description: 'Host 3 podcast episodes',
    category: 'content',
    icon: Mic,
    isUnlocked: false,
    progress: 1,
    maxProgress: 3,
    points: 400,
    rarity: 'epic',
  },
  {
    id: 'community_helper',
    title: 'Community Helper',
    description: 'Help 50 community members',
    category: 'community',
    icon: Users,
    isUnlocked: true,
    unlockedAt: '2024-01-12',
    progress: 67,
    maxProgress: 50,
    points: 250,
    rarity: 'common',
    reward: 'Helper Badge',
  },
  {
    id: 'popular_content',
    title: 'Viral Content',
    description: 'Get 1000 views on a single piece of content',
    category: 'milestone',
    icon: TrendingUp,
    isUnlocked: true,
    unlockedAt: '2024-01-14',
    progress: 1250,
    maxProgress: 1000,
    points: 750,
    rarity: 'epic',
    reward: 'Viral Creator Badge',
  },
  {
    id: 'code_master',
    title: 'Code Master',
    description: 'Share 20 code snippets or tutorials',
    category: 'content',
    icon: Code,
    isUnlocked: false,
    progress: 12,
    maxProgress: 20,
    points: 600,
    rarity: 'rare',
  },
  {
    id: 'engagement_king',
    title: 'Engagement King',
    description: 'Receive 500 total likes across all content',
    category: 'milestone',
    icon: Heart,
    isUnlocked: false,
    progress: 342,
    maxProgress: 500,
    points: 400,
    rarity: 'rare',
  },
  {
    id: 'early_adopter',
    title: 'Early Adopter',
    description: 'Join the platform in its first month',
    category: 'special',
    icon: Crown,
    isUnlocked: true,
    unlockedAt: '2024-01-01',
    progress: 1,
    maxProgress: 1,
    points: 1000,
    rarity: 'legendary',
    reward: 'Founder Badge',
  },
  {
    id: 'streak_master',
    title: 'Streak Master',
    description: 'Maintain a 30-day content creation streak',
    category: 'milestone',
    icon: Flame,
    isUnlocked: false,
    progress: 12,
    maxProgress: 30,
    points: 800,
    rarity: 'epic',
  },
];

const mockUserStats: UserStats = {
  totalPoints: 3250,
  level: 8,
  nextLevelPoints: 4000,
  currentLevelPoints: 3000,
  rank: 15,
  totalUsers: 1247,
  unlockedAchievements: 5,
  totalAchievements: 10,
};

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'content' | 'community' | 'milestone' | 'special'
  >('all');
  const [selectedRarity, setSelectedRarity] = useState<
    'all' | 'common' | 'rare' | 'epic' | 'legendary'
  >('all');

  const categories = [
    { id: 'all' as const, label: 'All', icon: Trophy },
    { id: 'content' as const, label: 'Content', icon: BookOpen },
    { id: 'community' as const, label: 'Community', icon: Users },
    { id: 'milestone' as const, label: 'Milestones', icon: Target },
    { id: 'special' as const, label: 'Special', icon: Crown },
  ];

  const rarities = [
    { id: 'all' as const, label: 'All Rarities', color: 'bg-gray-500' },
    { id: 'common' as const, label: 'Common', color: 'bg-gray-500' },
    { id: 'rare' as const, label: 'Rare', color: 'bg-blue-500' },
    { id: 'epic' as const, label: 'Epic', color: 'bg-purple-500' },
    { id: 'legendary' as const, label: 'Legendary', color: 'bg-yellow-500' },
  ];

  const filteredAchievements = mockAchievements.filter((achievement) => {
    const categoryMatch =
      selectedCategory === 'all' || achievement.category === selectedCategory;
    const rarityMatch =
      selectedRarity === 'all' || achievement.rarity === selectedRarity;
    return categoryMatch && rarityMatch;
  });

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'bg-gray-500';
      case 'rare':
        return 'bg-blue-500';
      case 'epic':
        return 'bg-purple-500';
      case 'legendary':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'border-gray-300';
      case 'rare':
        return 'border-blue-300';
      case 'epic':
        return 'border-purple-300';
      case 'legendary':
        return 'border-yellow-300';
      default:
        return 'border-gray-300';
    }
  };

  const levelProgress =
    ((mockUserStats.totalPoints - mockUserStats.currentLevelPoints) /
      (mockUserStats.nextLevelPoints - mockUserStats.currentLevelPoints)) *
    100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Achievements</h1>
            <p className="text-yellow-100">
              Track your progress and unlock rewards for your contributions
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <Trophy className="h-6 w-6 text-yellow-200" />
              <span className="text-2xl font-bold">
                {mockUserStats.totalPoints}
              </span>
              <span className="text-yellow-200">points</span>
            </div>
            <p className="text-yellow-100 text-sm">
              Rank #{mockUserStats.rank} of{' '}
              {mockUserStats.totalUsers.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Level</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUserStats.level}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Star className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                Progress to Level {mockUserStats.level + 1}
              </span>
              <span className="font-medium">{levelProgress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500">
              {mockUserStats.nextLevelPoints - mockUserStats.totalPoints} points
              to next level
            </p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUserStats.unlockedAchievements}/
                {mockUserStats.totalAchievements}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Award className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    (mockUserStats.unlockedAchievements /
                      mockUserStats.totalAchievements) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Global Rank</p>
              <p className="text-2xl font-bold text-gray-900">
                #{mockUserStats.rank}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Medal className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Top{' '}
            {((mockUserStats.rank / mockUserStats.totalUsers) * 100).toFixed(1)}
            %
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Points</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUserStats.totalPoints.toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <div className="space-y-4">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rarity Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Rarity</h3>
            <div className="flex flex-wrap gap-2">
              {rarities.map((rarity) => {
                const isActive = selectedRarity === rarity.id;
                return (
                  <button
                    key={rarity.id}
                    onClick={() => setSelectedRarity(rarity.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${rarity.color}`} />
                    <span className="font-medium">{rarity.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => {
          const Icon = achievement.icon;
          const progressPercentage =
            (achievement.progress / achievement.maxProgress) * 100;

          return (
            <div
              key={achievement.id}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 shadow-lg transition-all duration-300 ${
                achievement.isUnlocked
                  ? `${getRarityBorder(achievement.rarity)} hover:shadow-xl`
                  : 'border-gray-200 opacity-75'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    achievement.isUnlocked
                      ? getRarityColor(achievement.rarity)
                      : 'bg-gray-300'
                  }`}
                >
                  {achievement.isUnlocked ? (
                    <Icon className="h-8 w-8 text-white" />
                  ) : (
                    <Lock className="h-8 w-8 text-gray-500" />
                  )}
                </div>

                <div className="flex flex-col items-end space-y-1">
                  <div
                    className={`px-2 py-1 rounded-lg text-xs font-medium text-white ${getRarityColor(
                      achievement.rarity,
                    )}`}
                  >
                    {achievement.rarity.charAt(0).toUpperCase() +
                      achievement.rarity.slice(1)}
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-600">
                    <Zap className="h-3 w-3" />
                    <span className="text-sm font-medium">
                      {achievement.points}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3
                  className={`font-bold text-lg mb-2 ${
                    achievement.isUnlocked ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {achievement.title}
                </h3>
                <p
                  className={`text-sm ${
                    achievement.isUnlocked ? 'text-gray-600' : 'text-gray-400'
                  }`}
                >
                  {achievement.description}
                </p>
              </div>

              {!achievement.isUnlocked && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">
                      {achievement.progress} / {achievement.maxProgress}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {achievement.isUnlocked && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Unlocked</span>
                  </div>
                  {achievement.unlockedAt && (
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {new Date(achievement.unlockedAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  {achievement.reward && (
                    <div className="flex items-center space-x-2 text-purple-600">
                      <Gift className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {achievement.reward}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No achievements found
          </h3>
          <p className="text-gray-500">
            Try adjusting your filters to see more achievements.
          </p>
        </div>
      )}
    </div>
  );
}
