'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';
import { ScrollAnimatedSection } from '@/components/layouts/ScrollAnimatedSection';
import { ProfileChallenges } from '@/components/molecules/ProfileChallenges';
import { ProfileContributions } from '@/components/molecules/ProfileContributions';
import { ProfileEvents } from '@/components/molecules/ProfileEvents';
import { ProfileHeader } from '@/components/molecules/ProfileHeader';
import { ProfileResume } from '@/components/molecules/ProfileResume';
import { ProfileStats } from '@/components/molecules/ProfileStats';
import {
  mockUserProfile,
  type UserProfile,
} from '@/data/profile';

interface PublicProfilePageProps {
  params: Promise<{
    username: string;
  }>;
}

const getUserByUsername = (username: string): UserProfile | null => {
  // In a real app, this would fetch from an API or database
  if (username === mockUserProfile.username) {
    return mockUserProfile;
  }
  return null;
};

type TabType = 'overview' | 'resume' | 'contributions' | 'events' | 'challenges' | 'opensource';

export default function PublicProfilePage({ params }: PublicProfilePageProps) {
  const { username } = use(params);
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const user = getUserByUsername(username);

  if (!user) {
    notFound();
  }

  if (!user.isPublic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile Not Public</h1>
            <p className="text-gray-600">This user&apos;s profile is set to private.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const tabs = [
    { id: 'overview' as const, label: 'Overview' },
    { id: 'resume' as const, label: 'Resume' },
    { id: 'contributions' as const, label: 'Contributions' },
    { id: 'events' as const, label: 'Events' },
    { id: 'challenges' as const, label: 'Challenges' },
    { id: 'opensource' as const, label: 'Open Source' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
      
      <main className="pt-20">
        {/* Profile Header */}
        <ScrollAnimatedSection>
          <ProfileHeader user={user} stats={user.stats} />
        </ScrollAnimatedSection>

        {/* Navigation Tabs */}
        <ScrollAnimatedSection>
          <div className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-20 z-40 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <nav className="flex space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-purple-400 text-purple-400'
                        : 'border-transparent text-gray-300 hover:text-white hover:border-gray-500'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {(() => {
            switch (activeTab) {
              case 'overview':
                return (
                  <ScrollAnimatedSection>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-8">
                        <ProfileStats stats={user.stats} />
                        <ProfileContributions contributions={user.contributions.slice(0, 3)} />
                        <ProfileEvents events={user.events.slice(0, 3)} />
                        <ProfileChallenges challenges={user.challenges.slice(0, 3)} />
                      </div>
                      <div className="space-y-8">
                        <ProfileResume resume={user.resume} />
                      </div>
                    </div>
                  </ScrollAnimatedSection>
                );
              case 'resume':
                return (
                  <ScrollAnimatedSection>
                    <ProfileResume resume={user.resume} />
                  </ScrollAnimatedSection>
                );
              case 'contributions':
                return (
                  <ScrollAnimatedSection>
                    <ProfileContributions contributions={user.contributions} />
                  </ScrollAnimatedSection>
                );
              case 'events':
                return (
                  <ScrollAnimatedSection>
                    <ProfileEvents events={user.events} />
                  </ScrollAnimatedSection>
                );
              case 'challenges':
                return (
                  <ScrollAnimatedSection>
                    <ProfileChallenges challenges={user.challenges} />
                  </ScrollAnimatedSection>
                );
              case 'opensource':
                return (
                  <ScrollAnimatedSection>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 relative overflow-hidden">
                      {/* Background gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
                      <div className="relative z-10">
                        <h2 className="text-xl font-bold text-white mb-6">Open Source Contributions</h2>
                        <div className="text-center py-12">
                          <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029C10.792 13.807 10.304 14 10 14s-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H9a1 1 0 110-2h-.013a9.358 9.358 0 010-1H9a1 1 0 010-2h-.472c.08-.185.167-.36.264-.521z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2">Coming Soon</h3>
                          <p className="text-gray-300">Open source contributions and repositories will be displayed here.</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimatedSection>
                );
              default:
                return null;
            }
          })()}
        </div>
      </main>

        <Footer />
      </div>
    </div>
  );
}