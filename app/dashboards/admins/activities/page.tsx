'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Trophy,
  Briefcase,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Users,
  Clock,
  MapPin,
  DollarSign,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Activity {
  id: string;
  title: string;
  type: 'event' | 'challenge' | 'job';
  status: 'draft' | 'published' | 'completed' | 'cancelled';
  date: string;
  location?: string;
  participants: number;
  maxParticipants?: number;
  prize?: string;
  salary?: string;
  description: string;
}

const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Tech Innovation Summit 2024',
    type: 'event',
    status: 'published',
    date: '2024-03-15',
    location: 'Jakarta Convention Center',
    participants: 245,
    maxParticipants: 500,
    description:
      'Annual technology innovation summit featuring industry leaders.',
  },
  {
    id: '2',
    title: 'AI Hackathon Challenge',
    type: 'challenge',
    status: 'published',
    date: '2024-03-20',
    participants: 89,
    maxParticipants: 100,
    prize: '$10,000',
    description: 'Build innovative AI solutions in 48 hours.',
  },
  {
    id: '3',
    title: 'Senior Frontend Developer',
    type: 'job',
    status: 'published',
    date: '2024-02-28',
    location: 'Remote',
    participants: 156,
    salary: '$80,000 - $120,000',
    description: 'Join our team as a senior frontend developer.',
  },
  {
    id: '4',
    title: 'Startup Pitch Competition',
    type: 'event',
    status: 'draft',
    date: '2024-04-10',
    location: 'Bandung Creative Hub',
    participants: 0,
    maxParticipants: 50,
    description: 'Pitch your startup idea to investors and win funding.',
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'event':
      return <Calendar className="h-4 w-4" />;
    case 'challenge':
      return <Trophy className="h-4 w-4" />;
    case 'job':
      return <Briefcase className="h-4 w-4" />;
    default:
      return <Calendar className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'published':
      return 'bg-green-100 text-green-800';
    case 'draft':
      return 'bg-yellow-100 text-yellow-800';
    case 'completed':
      return 'bg-blue-100 text-blue-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'event':
      return 'bg-blue-100 text-blue-800';
    case 'challenge':
      return 'bg-purple-100 text-purple-800';
    case 'job':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || activity.type === filterType;
    const matchesStatus =
      filterStatus === 'all' || activity.status === filterStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this activity?')) {
      setActivities(activities.filter((activity) => activity.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Activities Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage events, challenges, and job postings
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="/dashboard/(admins)/activities/events/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Event
                </Button>
              </Link>
              <Link href="/dashboard/(admins)/activities/challenges/new">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Challenge
                </Button>
              </Link>
              <Link href="/dashboard/(admins)/activities/jobs/new">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="event">Events</option>
                <option value="challenge">Challenges</option>
                <option value="job">Jobs</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                        activity.type,
                      )}`}
                    >
                      {getTypeIcon(activity.type)}
                      <span className="ml-1 capitalize">{activity.type}</span>
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        activity.status,
                      )}`}
                    >
                      {activity.status.charAt(0).toUpperCase() +
                        activity.status.slice(1)}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {activity.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {new Date(activity.date).toLocaleDateString()}
                  </div>
                  {activity.location && (
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {activity.location}
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {activity.participants} participants
                    {activity.maxParticipants &&
                      ` / ${activity.maxParticipants} max`}
                  </div>
                  {activity.prize && (
                    <div className="flex items-center text-sm text-green-600">
                      <Trophy className="h-4 w-4 mr-2" />
                      Prize: {activity.prize}
                    </div>
                  )}
                  {activity.salary && (
                    <div className="flex items-center text-sm text-green-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {activity.salary}
                    </div>
                  )}
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
                      className="text-gray-600 border-gray-200 hover:bg-gray-50"
                    >
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(activity.id)}
                    className="text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No activities found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create New Activity
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
