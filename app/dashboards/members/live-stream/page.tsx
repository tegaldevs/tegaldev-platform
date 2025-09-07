'use client';

import React, { useState } from 'react';
import {
  Radio,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Calendar,
  TrendingUp,
  Play,
  AlertTriangle,
} from 'lucide-react';

interface EligibilityRequirement {
  id: string;
  title: string;
  description: string;
  required: number;
  current: number;
  type: 'contributions' | 'engagement' | 'community' | 'quality';
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isMet: boolean;
}

interface LiveStreamSlot {
  id: string;
  date: string;
  time: string;
  duration: string;
  topic?: string;
  status: 'available' | 'booked' | 'completed';
  streamer?: string;
}

interface StreamingStats {
  totalStreams: number;
  totalViewers: number;
  averageViewers: number;
  totalDuration: string;
  rating: number;
  lastStream: string;
}

const eligibilityRequirements: EligibilityRequirement[] = [
  {
    id: 'blog_posts',
    title: 'Blog Posts',
    description: 'Published technical blog posts',
    required: 5,
    current: 8,
    type: 'contributions',
    icon: MessageCircle,
    isMet: true,
  },
  {
    id: 'video_content',
    title: 'Video Content',
    description: 'Published video tutorials or talks',
    required: 3,
    current: 2,
    type: 'contributions',
    icon: Play,
    isMet: false,
  },
  {
    id: 'community_engagement',
    title: 'Community Engagement',
    description: 'Active participation in community discussions',
    required: 50,
    current: 67,
    type: 'community',
    icon: Users,
    isMet: true,
  },
  {
    id: 'content_quality',
    title: 'Content Quality Score',
    description: 'Average rating of your published content',
    required: 4.0,
    current: 4.3,
    type: 'quality',
    icon: Star,
    isMet: true,
  },
  {
    id: 'total_views',
    title: 'Total Content Views',
    description: 'Combined views across all your content',
    required: 1000,
    current: 1250,
    type: 'engagement',
    icon: Eye,
    isMet: true,
  },
  {
    id: 'follower_count',
    title: 'Platform Followers',
    description: 'Followers on social media platforms',
    required: 100,
    current: 85,
    type: 'community',
    icon: Heart,
    isMet: false,
  },
];

const upcomingSlots: LiveStreamSlot[] = [
  {
    id: '1',
    date: '2024-01-25',
    time: '14:00',
    duration: '2 hours',
    status: 'available',
  },
  {
    id: '2',
    date: '2024-01-27',
    time: '16:00',
    duration: '1.5 hours',
    topic: 'React Best Practices',
    status: 'booked',
    streamer: 'John Doe',
  },
  {
    id: '3',
    date: '2024-01-30',
    time: '15:00',
    duration: '2 hours',
    status: 'available',
  },
];

const mockStreamingStats: StreamingStats = {
  totalStreams: 12,
  totalViewers: 2450,
  averageViewers: 204,
  totalDuration: '24h 30m',
  rating: 4.7,
  lastStream: '2024-01-15',
};

export default function LiveStreamPage() {
  const [activeTab, setActiveTab] = useState<
    'eligibility' | 'schedule' | 'stats'
  >('eligibility');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<LiveStreamSlot | null>(null);
  const [streamTopic, setStreamTopic] = useState('');
  const [streamDescription, setStreamDescription] = useState('');

  const metRequirements = eligibilityRequirements.filter(
    (req) => req.isMet,
  ).length;
  const totalRequirements = eligibilityRequirements.length;
  const isEligible = metRequirements >= Math.ceil(totalRequirements * 0.8); // 80% of requirements
  const eligibilityPercentage = (metRequirements / totalRequirements) * 100;

  const getRequirementTypeColor = (type: string) => {
    switch (type) {
      case 'contributions':
        return 'bg-blue-100 text-blue-800';
      case 'engagement':
        return 'bg-green-100 text-green-800';
      case 'community':
        return 'bg-purple-100 text-purple-800';
      case 'quality':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleBookSlot = () => {
    if (!selectedSlot || !streamTopic.trim()) return;

    // Here you would typically send the booking request to your backend
    console.log(
      'Booking slot:',
      selectedSlot.id,
      streamTopic,
      streamDescription,
    );
    setShowBookingModal(false);
    setSelectedSlot(null);
    setStreamTopic('');
    setStreamDescription('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Live Stream Eligibility</h1>
            <p className="text-red-100">
              Check your eligibility and schedule live streams on Tegal Dev
              Channel
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div
              className={`px-4 py-2 rounded-xl flex items-center space-x-2 ${
                isEligible
                  ? 'bg-green-500/20 border border-green-300'
                  : 'bg-red-500/20 border border-red-300'
              }`}
            >
              {isEligible ? (
                <CheckCircle className="h-5 w-5 text-green-200" />
              ) : (
                <XCircle className="h-5 w-5 text-red-200" />
              )}
              <span className="font-medium">
                {isEligible ? 'Eligible' : 'Not Eligible'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Status Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Eligibility Overview
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Progress:</span>
            <span className="font-bold text-gray-900">
              {metRequirements}/{totalRequirements}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Overall Eligibility
            </span>
            <span className="text-sm font-medium text-gray-900">
              {eligibilityPercentage.toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                isEligible ? 'bg-green-500' : 'bg-red-500'
              }`}
              style={{ width: `${eligibilityPercentage}%` }}
            />
          </div>
        </div>

        {!isEligible && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-800">
                  Requirements Not Met
                </h3>
                <p className="text-sm text-yellow-700 mt-1">
                  You need to meet at least {Math.ceil(totalRequirements * 0.8)}{' '}
                  out of {totalRequirements} requirements to be eligible for
                  live streaming.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'eligibility', label: 'Requirements', icon: CheckCircle },
              { id: 'schedule', label: 'Schedule', icon: Calendar },
              { id: 'stats', label: 'Statistics', icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as 'eligibility' | 'schedule' | 'stats')
                  }
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    isActive
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Requirements Tab */}
          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              {eligibilityRequirements.map((requirement) => {
                const Icon = requirement.icon;
                const progress = Math.min(
                  (requirement.current / requirement.required) * 100,
                  100,
                );

                return (
                  <div
                    key={requirement.id}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            requirement.isMet ? 'bg-green-100' : 'bg-gray-200'
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              requirement.isMet
                                ? 'text-green-600'
                                : 'text-gray-400'
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {requirement.title}
                            </h3>
                            <span
                              className={`px-2 py-1 rounded-lg text-xs font-medium ${getRequirementTypeColor(
                                requirement.type,
                              )}`}
                            >
                              {requirement.type.charAt(0).toUpperCase() +
                                requirement.type.slice(1)}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {requirement.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {requirement.isMet ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-500" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-gray-900">
                          {requirement.current} / {requirement.required}
                          {requirement.type === 'quality' && ' ⭐'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            requirement.isMet ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Upcoming Stream Slots
                </h3>
                {isEligible && (
                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">
                        You can book slots
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingSlots.map((slot) => (
                  <div key={slot.id} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-gray-600" />
                        <span className="font-medium text-gray-900">
                          {new Date(slot.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          slot.status === 'available'
                            ? 'bg-green-100 text-green-800'
                            : slot.status === 'booked'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {slot.status.charAt(0).toUpperCase() +
                          slot.status.slice(1)}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>
                          {slot.time} ({slot.duration})
                        </span>
                      </div>
                      {slot.topic && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Radio className="h-4 w-4" />
                          <span>{slot.topic}</span>
                        </div>
                      )}
                      {slot.streamer && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{slot.streamer}</span>
                        </div>
                      )}
                    </div>

                    {slot.status === 'available' && isEligible && (
                      <button
                        onClick={() => {
                          setSelectedSlot(slot);
                          setShowBookingModal(true);
                        }}
                        className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-colors font-medium"
                      >
                        Book This Slot
                      </button>
                    )}

                    {slot.status === 'available' && !isEligible && (
                      <button
                        disabled
                        className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-xl font-medium cursor-not-allowed"
                      >
                        Not Eligible
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Your Streaming Statistics
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Total Streams</p>
                      <p className="text-2xl font-bold">
                        {mockStreamingStats.totalStreams}
                      </p>
                    </div>
                    <Radio className="h-8 w-8 text-blue-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Total Viewers</p>
                      <p className="text-2xl font-bold">
                        {mockStreamingStats.totalViewers.toLocaleString()}
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-green-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Avg. Viewers</p>
                      <p className="text-2xl font-bold">
                        {mockStreamingStats.averageViewers}
                      </p>
                    </div>
                    <Eye className="h-8 w-8 text-purple-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">Rating</p>
                      <p className="text-2xl font-bold">
                        {mockStreamingStats.rating} ⭐
                      </p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-200" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Recent Performance
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Total Streaming Time
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {mockStreamingStats.totalDuration}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Last Stream</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {new Date(
                        mockStreamingStats.lastStream,
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedSlot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Book Stream Slot
              </h2>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">
                    {new Date(selectedSlot.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-600">
                    {selectedSlot.time} ({selectedSlot.duration})
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stream Topic *
                </label>
                <input
                  type="text"
                  value={streamTopic}
                  onChange={(e) => setStreamTopic(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="e.g., React Best Practices"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description (Optional)
                </label>
                <textarea
                  value={streamDescription}
                  onChange={(e) => setStreamDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Brief description of what you'll cover..."
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleBookSlot}
                disabled={!streamTopic.trim()}
                className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white px-4 py-3 rounded-xl transition-colors font-medium"
              >
                Book Slot
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
