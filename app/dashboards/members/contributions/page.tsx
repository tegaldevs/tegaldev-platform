'use client';

import { useState } from 'react';
import {
  FileText,
  Mic,
  Video,
  Radio,
  Plus,
  Eye,
  Edit3,
  Trash2,
  ExternalLink,
  Calendar,
  Clock,
  Award,
  Target,
  BarChart3,
  Heart,
  MessageCircle,
} from 'lucide-react';

interface Contribution {
  id: string;
  type: 'blog' | 'podcast' | 'video' | 'livestream';
  title: string;
  description: string;
  url?: string;
  status: 'draft' | 'published' | 'scheduled';
  publishDate: string;
  views?: number;
  likes?: number;
  comments?: number;
  duration?: string; // for videos/podcasts
  tags: string[];
}

interface ContributionStats {
  totalContributions: number;
  totalViews: number;
  totalLikes: number;
  monthlyGoal: number;
  currentMonthContributions: number;
  streakDays: number;
}

const mockContributions: Contribution[] = [
  {
    id: '1',
    type: 'blog',
    title: 'Getting Started with React Hooks',
    description:
      'A comprehensive guide to understanding and using React Hooks in modern applications.',
    url: 'https://blog.example.com/react-hooks-guide',
    status: 'published',
    publishDate: '2024-01-15',
    views: 1250,
    likes: 89,
    comments: 23,
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    id: '2',
    type: 'video',
    title: 'Building a REST API with Node.js',
    description:
      'Step-by-step tutorial on creating a robust REST API using Node.js and Express.',
    url: 'https://youtube.com/watch?v=example',
    status: 'published',
    publishDate: '2024-01-12',
    views: 3420,
    likes: 156,
    comments: 45,
    duration: '25:30',
    tags: ['Node.js', 'API', 'Backend'],
  },
  {
    id: '3',
    type: 'podcast',
    title: 'The Future of Web Development',
    description:
      'Discussion about emerging trends and technologies in web development.',
    url: 'https://podcast.example.com/episode-15',
    status: 'published',
    publishDate: '2024-01-10',
    views: 890,
    likes: 67,
    comments: 12,
    duration: '45:15',
    tags: ['Web Development', 'Technology', 'Trends'],
  },
  {
    id: '4',
    type: 'livestream',
    title: 'Live Coding: Building a Chat App',
    description:
      'Real-time coding session building a chat application with Socket.io.',
    status: 'scheduled',
    publishDate: '2024-01-20',
    duration: '2:00:00',
    tags: ['Live Coding', 'Socket.io', 'Real-time'],
  },
];

const mockStats: ContributionStats = {
  totalContributions: 24,
  totalViews: 15680,
  totalLikes: 892,
  monthlyGoal: 8,
  currentMonthContributions: 5,
  streakDays: 12,
};

export default function ContributionsPage() {
  const [contributions, setContributions] =
    useState<Contribution[]>(mockContributions);
  const [stats] = useState<ContributionStats>(mockStats);
  const [selectedType, setSelectedType] = useState<
    'all' | 'blog' | 'podcast' | 'video' | 'livestream'
  >('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newContribution, setNewContribution] = useState<Partial<Contribution>>(
    {
      type: 'blog',
      status: 'draft',
      tags: [],
    },
  );

  const contributionTypes = [
    {
      id: 'all' as const,
      label: 'All Content',
      icon: BarChart3,
      color: 'bg-gray-500',
    },
    {
      id: 'blog' as const,
      label: 'Blog Posts',
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      id: 'podcast' as const,
      label: 'Podcasts',
      icon: Mic,
      color: 'bg-purple-500',
    },
    { id: 'video' as const, label: 'Videos', icon: Video, color: 'bg-red-500' },
    {
      id: 'livestream' as const,
      label: 'Live Streams',
      icon: Radio,
      color: 'bg-green-500',
    },
  ];

  const filteredContributions =
    selectedType === 'all'
      ? contributions
      : contributions.filter((c) => c.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return FileText;
      case 'podcast':
        return Mic;
      case 'video':
        return Video;
      case 'livestream':
        return Radio;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500';
      case 'podcast':
        return 'bg-purple-500';
      case 'video':
        return 'bg-red-500';
      case 'livestream':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateContribution = () => {
    if (!newContribution.title || !newContribution.description) return;

    const contribution: Contribution = {
      id: Date.now().toString(),
      type: newContribution.type as 'blog' | 'podcast' | 'video' | 'livestream',
      title: newContribution.title,
      description: newContribution.description,
      url: newContribution.url,
      status: newContribution.status as 'draft' | 'published' | 'scheduled',
      publishDate:
        newContribution.publishDate || new Date().toISOString().split('T')[0],
      tags: newContribution.tags || [],
    };

    setContributions([contribution, ...contributions]);
    setNewContribution({ type: 'blog', status: 'draft', tags: [] });
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Content Contributions</h1>
            <p className="text-indigo-100">
              Track your blogs, podcasts, videos, and live streams
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl transition-colors flex items-center space-x-2 font-medium"
          >
            <Plus className="h-5 w-5" />
            <span>Add Content</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Content</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalContributions}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalViews.toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Eye className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Goal</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.currentMonthContributions}/{stats.monthlyGoal}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    (stats.currentMonthContributions / stats.monthlyGoal) * 100,
                    100,
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Streak Days</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.streakDays}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Award className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Type Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
        <div className="flex flex-wrap gap-3">
          {contributionTypes.map((type) => {
            const Icon = type.icon;
            const isActive = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{type.label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    isActive ? 'bg-white/20' : 'bg-gray-200'
                  }`}
                >
                  {type.id === 'all'
                    ? contributions.length
                    : contributions.filter((c) => c.type === type.id).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {filteredContributions.map((contribution) => {
          const Icon = getTypeIcon(contribution.type);
          return (
            <div
              key={contribution.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className={`w-12 h-12 ${getTypeColor(
                      contribution.type,
                    )} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {contribution.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          contribution.status,
                        )}`}
                      >
                        {contribution.status.charAt(0).toUpperCase() +
                          contribution.status.slice(1)}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-3">
                      {contribution.description}
                    </p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(
                            contribution.publishDate,
                          ).toLocaleDateString()}
                        </span>
                      </div>

                      {contribution.duration && (
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{contribution.duration}</span>
                        </div>
                      )}

                      {contribution.views && (
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{contribution.views.toLocaleString()}</span>
                        </div>
                      )}

                      {contribution.likes && (
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{contribution.likes}</span>
                        </div>
                      )}

                      {contribution.comments && (
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{contribution.comments}</span>
                        </div>
                      )}
                    </div>

                    {contribution.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {contribution.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  {contribution.url && (
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-xl transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  )}
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-xl transition-colors">
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-xl transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Content Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Add New Content
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Plus className="h-6 w-6 rotate-45" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Content Type
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {contributionTypes.slice(1).map((type) => {
                    const Icon = type.icon;
                    const isSelected = newContribution.type === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() =>
                          setNewContribution({
                            ...newContribution,
                            type: type.id as
                              | 'blog'
                              | 'podcast'
                              | 'video'
                              | 'livestream',
                          })
                        }
                        className={`p-4 border-2 rounded-xl text-center transition-colors ${
                          isSelected
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 mx-auto mb-2 ${
                            isSelected ? 'text-indigo-600' : 'text-gray-400'
                          }`}
                        />
                        <p
                          className={`text-sm font-medium ${
                            isSelected ? 'text-indigo-900' : 'text-gray-700'
                          }`}
                        >
                          {type.label.replace('s', '')}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newContribution.title || ''}
                  onChange={(e) =>
                    setNewContribution({
                      ...newContribution,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter content title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newContribution.description || ''}
                  onChange={(e) =>
                    setNewContribution({
                      ...newContribution,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Describe your content"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={newContribution.url || ''}
                    onChange={(e) =>
                      setNewContribution({
                        ...newContribution,
                        url: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={newContribution.status}
                    onChange={(e) =>
                      setNewContribution({
                        ...newContribution,
                        status: e.target.value as
                          | 'draft'
                          | 'published'
                          | 'scheduled',
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date
                </label>
                <input
                  type="date"
                  value={newContribution.publishDate || ''}
                  onChange={(e) =>
                    setNewContribution({
                      ...newContribution,
                      publishDate: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-8">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-xl transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateContribution}
                disabled={
                  !newContribution.title || !newContribution.description
                }
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white px-4 py-3 rounded-xl transition-colors font-medium"
              >
                Add Content
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
