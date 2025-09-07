'use client';

import Link from 'next/link';
import {
  User,
  FileText,
  BarChart3,
  Video,
  Trophy,
  Tv,
  CheckCircle,
  ArrowRight,
  Plus,
} from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface QuickAction {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface RecentActivity {
  id: string;
  type: 'blog' | 'podcast' | 'video' | 'achievement';
  title: string;
  date: string;
  status: 'published' | 'draft' | 'pending';
}

const stats: StatCard[] = [
  {
    title: 'Total Contributions',
    value: '24',
    change: '+12%',
    changeType: 'positive',
    icon: BarChart3,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Blog Posts',
    value: '8',
    change: '+3',
    changeType: 'positive',
    icon: FileText,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Videos Published',
    value: '12',
    change: '+5',
    changeType: 'positive',
    icon: Video,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Stream Eligibility',
    value: '85%',
    change: '+15%',
    changeType: 'positive',
    icon: Tv,
    color: 'from-orange-500 to-orange-600',
  },
];

const quickActions: QuickAction[] = [
  {
    title: 'Update Profile',
    description: 'Keep your information current',
    href: '/dashboard/profile',
    icon: User,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Build Resume',
    description: 'Create or update your resume',
    href: '/dashboard/resume',
    icon: FileText,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'New Contribution',
    description: 'Share your knowledge',
    href: '/dashboard/contributions',
    icon: Plus,
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Live Stream',
    description: 'Start streaming now',
    href: '/dashboard/livestream',
    icon: Tv,
    color: 'from-red-500 to-pink-500',
  },
];

const recentActivities: RecentActivity[] = [
  {
    id: '1',
    type: 'blog',
    title: 'Getting Started with Next.js 14',
    date: '2 hours ago',
    status: 'published',
  },
  {
    id: '2',
    type: 'video',
    title: 'React Hooks Deep Dive',
    date: '1 day ago',
    status: 'published',
  },
  {
    id: '3',
    type: 'podcast',
    title: 'The Future of Web Development',
    date: '3 days ago',
    status: 'pending',
  },
  {
    id: '4',
    type: 'achievement',
    title: 'Content Creator Badge Earned',
    date: '1 week ago',
    status: 'published',
  },
];

const getActivityIcon = (type: RecentActivity['type']) => {
  switch (type) {
    case 'blog':
      return FileText;
    case 'video':
      return Video;
    case 'podcast':
      return Video;
    case 'achievement':
      return Trophy;
    default:
      return FileText;
  }
};

const getStatusColor = (status: RecentActivity['status']) => {
  switch (status) {
    case 'published':
      return 'text-green-600 bg-green-100';
    case 'draft':
      return 'text-yellow-600 bg-yellow-100';
    case 'pending':
      return 'text-blue-600 bg-blue-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export default function MemberDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-blue-100 text-lg">
              Ready to share your knowledge and grow your impact?
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.changeType === 'positive'
                    ? 'text-green-700 bg-green-100'
                    : stat.changeType === 'negative'
                    ? 'text-red-700 bg-red-100'
                    : 'text-gray-700 bg-gray-100'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="group p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600">{action.description}</p>
              <div className="flex items-center mt-2 text-blue-600 group-hover:text-blue-700">
                <span className="text-sm font-medium">Get started</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity & Live Stream Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <Link
              href="/dashboard/contributions"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const ActivityIcon = getActivityIcon(activity.type);
              return (
                <div
                  key={activity.id}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <ActivityIcon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      activity.status,
                    )}`}
                  >
                    {activity.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Stream Eligibility */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Live Stream Status
          </h2>

          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Eligible to Stream!
            </h3>
            <p className="text-sm text-gray-600">
              You&apos;ve met the contribution requirements
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Blog Posts</span>
              <span className="text-sm font-medium text-green-600">8/5 ✓</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Videos</span>
              <span className="text-sm font-medium text-green-600">
                12/10 ✓
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Community Score</span>
              <span className="text-sm font-medium text-green-600">
                850/500 ✓
              </span>
            </div>
          </div>

          <Link
            href="/dashboard/livestream"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-4 rounded-xl font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
          >
            <Tv className="h-5 w-5 mr-2" />
            Start Live Stream
          </Link>
        </div>
      </div>
    </div>
  );
}
