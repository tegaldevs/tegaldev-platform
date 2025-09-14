'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  Calendar,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { type UserProfile, type UserStats } from '@/data/profile';

interface ProfileHeaderProps {
  user: UserProfile;
  stats: UserStats;
}

export function ProfileHeader({ user, stats }: ProfileHeaderProps) {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
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

  const socialLinks = [
    {
      href: user.website,
      icon: Globe,
      condition: user.website,
    },
    {
      href: `https://github.com/${user.github}`,
      icon: Github,
      condition: user.github,
    },
    {
      href: `https://linkedin.com/in/${user.linkedin}`,
      icon: Linkedin,
      condition: user.linkedin,
    },
    {
      href: `https://twitter.com/${user.twitter}`,
      icon: Twitter,
      condition: user.twitter,
    },
  ];

  const statsData = [
    { value: stats.followers, label: 'Followers' },
    { value: stats.following, label: 'Following' },
    { value: stats.totalViews, label: 'Views' },
    { value: stats.totalLikes, label: 'Likes' },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
                    <span className="text-4xl font-bold text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              {user.status === 'active' && (
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>

            <div className="space-y-2">
              <div>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-xl text-white/80">@{user.username}</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {formatDate(user.joinDate)}</span>
                </div>
                {user.role !== 'member' && (
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span className="capitalize">{user.role}</span>
                  </div>
                )}
              </div>

              {user.bio && (
                <p className="text-white/90 max-w-2xl leading-relaxed">
                  {user.bio}
                </p>
              )}
            </div>
          </div>

          {/* Stats and Actions */}
          <div className="flex-1 lg:ml-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
              {statsData.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold">{formatNumber(value)}</div>
                  <div className="text-sm text-white/80">{label}</div>
                </div>
              ))}
            </div>

            {/* Social Links and Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, condition }) => {
                if (!condition || !href) return null;
                return (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
              
              <div className="ml-auto flex gap-3">
                <Button
                  variant="outline"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Follow
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}