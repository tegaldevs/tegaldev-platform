'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Trophy,
  Users,
  Target,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  ArrowLeft,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Challenge {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'coding' | 'design' | 'algorithm' | 'fullstack';
  participants: number;
  maxParticipants: number;
  prize: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  submissions: number;
}

const mockChallenges: Challenge[] = [
  {
    id: '1',
    title: 'React Component Library Challenge',
    description:
      'Build a comprehensive React component library with TypeScript and Storybook.',
    startDate: '2024-02-10',
    endDate: '2024-02-24',
    difficulty: 'intermediate',
    category: 'coding',
    participants: 45,
    maxParticipants: 100,
    prize: 'Rp 5,000,000',
    status: 'active',
    submissions: 23,
  },
  {
    id: '2',
    title: 'UI/UX Design Sprint',
    description:
      'Design a complete mobile app interface for a fintech application.',
    startDate: '2024-02-15',
    endDate: '2024-02-22',
    difficulty: 'beginner',
    category: 'design',
    participants: 32,
    maxParticipants: 50,
    prize: 'Rp 3,000,000',
    status: 'upcoming',
    submissions: 0,
  },
  {
    id: '3',
    title: 'Algorithm Optimization Contest',
    description:
      'Solve complex algorithmic problems with optimal time and space complexity.',
    startDate: '2024-01-20',
    endDate: '2024-01-27',
    difficulty: 'advanced',
    category: 'algorithm',
    participants: 78,
    maxParticipants: 100,
    prize: 'Rp 7,500,000',
    status: 'completed',
    submissions: 65,
  },
  {
    id: '4',
    title: 'Full-Stack E-commerce Platform',
    description: 'Build a complete e-commerce platform with modern tech stack.',
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    difficulty: 'advanced',
    category: 'fullstack',
    participants: 28,
    maxParticipants: 75,
    prize: 'Rp 10,000,000',
    status: 'upcoming',
    submissions: 0,
  },
];

const getStatusColor = (status: Challenge['status']) => {
  switch (status) {
    case 'upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'completed':
      return 'bg-gray-100 text-gray-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'advanced':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryColor = (category: Challenge['category']) => {
  switch (category) {
    case 'coding':
      return 'bg-purple-100 text-purple-800';
    case 'design':
      return 'bg-pink-100 text-pink-800';
    case 'algorithm':
      return 'bg-indigo-100 text-indigo-800';
    case 'fullstack':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function ChallengesManagement() {
  const challenges = mockChallenges;
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesSearch =
      challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || challenge.status === statusFilter;
    const matchesDifficulty =
      difficultyFilter === 'all' || challenge.difficulty === difficultyFilter;
    const matchesCategory =
      categoryFilter === 'all' || challenge.category === categoryFilter;

    return (
      matchesSearch && matchesStatus && matchesDifficulty && matchesCategory
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 lg:ml-72">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50 sticky top-0 z-30">
        <div className="flex items-center justify-between h-20 px-8">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Challenges Management
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Manage coding challenges and competitions
              </p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Challenge
          </Button>
        </div>
      </div>

      <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Challenges
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {challenges.length}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Challenges
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {challenges.filter((c) => c.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Participants
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {challenges.reduce((sum, c) => sum + c.participants, 0)}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Submissions
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {challenges.reduce((sum, c) => sum + c.submissions, 0)}
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search challenges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Difficulty</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="coding">Coding</option>
                <option value="design">Design</option>
                <option value="algorithm">Algorithm</option>
                <option value="fullstack">Full Stack</option>
              </select>
            </div>
          </div>
        </div>

        {/* Challenges Table */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Challenge
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Participants
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prize
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredChallenges.map((challenge) => (
                  <tr key={challenge.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {challenge.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {challenge.description}
                        </div>
                        <div className="mt-2 flex gap-2">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(
                              challenge.difficulty,
                            )}`}
                          >
                            {challenge.difficulty}
                          </span>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(
                              challenge.category,
                            )}`}
                          >
                            {challenge.category}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {challenge.startDate}
                      </div>
                      <div className="text-sm text-gray-500">
                        to {challenge.endDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {challenge.participants} / {challenge.maxParticipants}
                      </div>
                      <div className="text-sm text-gray-500">
                        {challenge.submissions} submissions
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{
                            width: `${
                              (challenge.participants /
                                challenge.maxParticipants) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {challenge.prize}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          challenge.status,
                        )}`}
                      >
                        {challenge.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
