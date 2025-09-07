'use client';

import { useState } from 'react';
import {
  FileText,
  Image as ImageIcon2,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Calendar,
  User,
  Layout,
  ImageIcon,
  Film,
  Upload,
  Save,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentItem {
  id: string;
  title: string;
  type: 'landing_section' | 'blog' | 'media';
  status: 'published' | 'draft' | 'archived';
  author: string;
  createdAt: string;
  updatedAt: string;
  content?: string;
  mediaType?: 'image' | 'video' | 'document';
  url?: string;
  description?: string;
}

const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Hero Section - Main Banner',
    type: 'landing_section',
    status: 'published',
    author: 'Admin',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    content: 'Welcome to TegalDev - Empowering Developers',
    description: 'Main hero section with call-to-action',
  },
  {
    id: '2',
    title: 'Getting Started with React Hooks',
    type: 'blog',
    status: 'published',
    author: 'John Doe',
    createdAt: '2024-01-18',
    updatedAt: '2024-01-19',
    content: 'A comprehensive guide to React Hooks...',
    description: 'Learn the fundamentals of React Hooks',
  },
  {
    id: '3',
    title: 'TegalDev Logo - Primary',
    type: 'media',
    status: 'published',
    author: 'Design Team',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
    mediaType: 'image',
    url: '/images/logo-primary.svg',
    description: 'Primary logo for TegalDev brand',
  },
  {
    id: '4',
    title: 'About Us Section',
    type: 'landing_section',
    status: 'draft',
    author: 'Admin',
    createdAt: '2024-01-22',
    updatedAt: '2024-01-22',
    content: 'Learn more about our mission and vision...',
    description: 'About section for landing page',
  },
  {
    id: '5',
    title: 'Introduction to TypeScript',
    type: 'blog',
    status: 'draft',
    author: 'Jane Smith',
    createdAt: '2024-01-21',
    updatedAt: '2024-01-21',
    content: 'TypeScript brings type safety to JavaScript...',
    description: 'Beginner guide to TypeScript',
  },
  {
    id: '6',
    title: 'Event Promo Video',
    type: 'media',
    status: 'published',
    author: 'Marketing Team',
    createdAt: '2024-01-16',
    updatedAt: '2024-01-17',
    mediaType: 'video',
    url: '/videos/event-promo.mp4',
    description: 'Promotional video for upcoming events',
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'landing_section':
      return <Layout className="h-4 w-4" />;
    case 'blog':
      return <FileText className="h-4 w-4" />;
    case 'media':
      return <ImageIcon2 className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getMediaIcon = (mediaType?: string) => {
  switch (mediaType) {
    case 'image':
      return <ImageIcon className="h-4 w-4" />;
    case 'video':
      return <Film className="h-4 w-4" />;
    case 'document':
      return <FileText className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published':
      return 'bg-green-100 text-green-800';
    case 'draft':
      return 'bg-yellow-100 text-yellow-800';
    case 'archived':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'landing_section':
      return 'bg-blue-100 text-blue-800';
    case 'blog':
      return 'bg-purple-100 text-purple-800';
    case 'media':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<
    'all' | 'landing' | 'blog' | 'media'
  >('all');
  const [content, setContent] = useState<ContentItem[]>(mockContent);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showEditor, setShowEditor] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);

  const filteredContent = content.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === 'all' || item.status === filterStatus;
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'landing' && item.type === 'landing_section') ||
      (activeTab === 'blog' && item.type === 'blog') ||
      (activeTab === 'media' && item.type === 'media');

    return matchesSearch && matchesStatus && matchesTab;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this content?')) {
      setContent(content.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setShowEditor(true);
  };

  const handleSave = () => {
    if (editingItem) {
      setContent(
        content.map((item) =>
          item.id === editingItem.id
            ? {
                ...editingItem,
                updatedAt: new Date().toISOString().split('T')[0],
              }
            : item,
        ),
      );
    }
    setShowEditor(false);
    setEditingItem(null);
  };

  const stats = {
    total: content.length,
    published: content.filter((item) => item.status === 'published').length,
    draft: content.filter((item) => item.status === 'draft').length,
    landing: content.filter((item) => item.type === 'landing_section').length,
    blog: content.filter((item) => item.type === 'blog').length,
    media: content.filter((item) => item.type === 'media').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Content Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage landing page content, blogs, and media
              </p>
            </div>
            <div className="flex space-x-3">
              <Button
                onClick={() => setShowEditor(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Content
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Upload className="h-4 w-4 mr-2" />
                Upload Media
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              <p className="text-sm text-gray-600">Total Items</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {stats.published}
              </p>
              <p className="text-sm text-gray-600">Published</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">
                {stats.draft}
              </p>
              <p className="text-sm text-gray-600">Drafts</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {stats.landing}
              </p>
              <p className="text-sm text-gray-600">Landing</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{stats.blog}</p>
              <p className="text-sm text-gray-600">Blogs</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">
                {stats.media}
              </p>
              <p className="text-sm text-gray-600">Media</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'all', label: 'All Content' },
                { key: 'landing', label: 'Landing Page' },
                { key: 'blog', label: 'Blog Posts' },
                { key: 'media', label: 'Media Library' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() =>
                    setActiveTab(
                      tab.key as 'all' | 'landing' | 'blog' | 'media',
                    )
                  }
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                            item.type,
                          )}`}
                        >
                          {getTypeIcon(item.type)}
                          <span className="ml-1 capitalize">
                            {item.type === 'landing_section'
                              ? 'Landing'
                              : item.type}
                          </span>
                        </span>
                        {item.mediaType && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {getMediaIcon(item.mediaType)}
                            <span className="ml-1 capitalize">
                              {item.mediaType}
                            </span>
                          </span>
                        )}
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          item.status,
                        )}`}
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                    )}

                    {item.content && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-gray-700 line-clamp-3">
                          {item.content}
                        </p>
                      </div>
                    )}

                    {item.url && (
                      <div className="bg-blue-50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-blue-700 font-mono truncate">
                          {item.url}
                        </p>
                      </div>
                    )}

                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-2" />
                        {item.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        Updated {new Date(item.updatedAt).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-600 border-blue-200 hover:bg-blue-50"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(item)}
                          className="text-gray-600 border-gray-200 hover:bg-gray-50"
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredContent.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FileText className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No content found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <Button
                  onClick={() => setShowEditor(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Content
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingItem ? 'Edit Content' : 'Create New Content'}
              </h2>
              <button
                onClick={() => {
                  setShowEditor(false);
                  setEditingItem(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editingItem?.title || ''}
                    onChange={(e) =>
                      setEditingItem((prev) =>
                        prev ? { ...prev, title: e.target.value } : null,
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter content title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    value={editingItem?.type || 'blog'}
                    onChange={(e) =>
                      setEditingItem((prev) =>
                        prev
                          ? {
                              ...prev,
                              type: e.target.value as
                                | 'landing_section'
                                | 'blog'
                                | 'media',
                            }
                          : null,
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="landing_section">Landing Section</option>
                    <option value="blog">Blog Post</option>
                    <option value="media">Media</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={editingItem?.description || ''}
                  onChange={(e) =>
                    setEditingItem((prev) =>
                      prev ? { ...prev, description: e.target.value } : null,
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={editingItem?.content || ''}
                  onChange={(e) =>
                    setEditingItem((prev) =>
                      prev ? { ...prev, content: e.target.value } : null,
                    )
                  }
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your content here..."
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowEditor(false);
                    setEditingItem(null);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Content
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
