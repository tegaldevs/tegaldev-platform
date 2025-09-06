'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Users,
  MapPin,
  Clock,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  ArrowLeft,
  Building,
} from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  level: 'entry' | 'mid' | 'senior' | 'lead';
  category:
    | 'frontend'
    | 'backend'
    | 'fullstack'
    | 'mobile'
    | 'devops'
    | 'design';
  salary: string;
  postedDate: string;
  deadline: string;
  applicants: number;
  status: 'active' | 'closed' | 'draft' | 'expired';
  remote: boolean;
  featured: boolean;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Indonesia',
    description:
      'We are looking for an experienced Frontend Developer to join our team and build amazing user interfaces.',
    location: 'Jakarta',
    type: 'full-time',
    level: 'senior',
    category: 'frontend',
    salary: 'Rp 15,000,000 - 25,000,000',
    postedDate: '2024-02-01',
    deadline: '2024-02-28',
    applicants: 45,
    status: 'active',
    remote: true,
    featured: true,
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'StartupXYZ',
    description:
      'Join our backend team to build scalable APIs and microservices architecture.',
    location: 'Bandung',
    type: 'full-time',
    level: 'mid',
    category: 'backend',
    salary: 'Rp 12,000,000 - 18,000,000',
    postedDate: '2024-02-05',
    deadline: '2024-03-05',
    applicants: 32,
    status: 'active',
    remote: false,
    featured: false,
  },
  {
    id: '3',
    title: 'UI/UX Designer Intern',
    company: 'Design Studio Tegal',
    description:
      'Great opportunity for design students to gain real-world experience in UI/UX design.',
    location: 'Tegal',
    type: 'internship',
    level: 'entry',
    category: 'design',
    salary: 'Rp 2,000,000 - 3,000,000',
    postedDate: '2024-01-28',
    deadline: '2024-02-15',
    applicants: 78,
    status: 'closed',
    remote: false,
    featured: false,
  },
  {
    id: '4',
    title: 'Full Stack Developer',
    company: 'Digital Agency Pro',
    description:
      'Looking for a versatile developer who can work on both frontend and backend technologies.',
    location: 'Semarang',
    type: 'contract',
    level: 'mid',
    category: 'fullstack',
    salary: 'Rp 8,000,000 - 12,000,000',
    postedDate: '2024-02-10',
    deadline: '2024-03-10',
    applicants: 23,
    status: 'active',
    remote: true,
    featured: true,
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    description:
      'Manage our cloud infrastructure and implement CI/CD pipelines for our development teams.',
    location: 'Remote',
    type: 'full-time',
    level: 'senior',
    category: 'devops',
    salary: 'Rp 18,000,000 - 28,000,000',
    postedDate: '2024-02-08',
    deadline: '2024-03-08',
    applicants: 15,
    status: 'active',
    remote: true,
    featured: false,
  },
];

const getStatusColor = (status: Job['status']) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'closed':
      return 'bg-gray-100 text-gray-800';
    case 'draft':
      return 'bg-yellow-100 text-yellow-800';
    case 'expired':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeColor = (type: Job['type']) => {
  switch (type) {
    case 'full-time':
      return 'bg-blue-100 text-blue-800';
    case 'part-time':
      return 'bg-purple-100 text-purple-800';
    case 'contract':
      return 'bg-orange-100 text-orange-800';
    case 'internship':
      return 'bg-pink-100 text-pink-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getLevelColor = (level: Job['level']) => {
  switch (level) {
    case 'entry':
      return 'bg-green-100 text-green-800';
    case 'mid':
      return 'bg-yellow-100 text-yellow-800';
    case 'senior':
      return 'bg-orange-100 text-orange-800';
    case 'lead':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function JobsManagement() {
  const jobs = mockJobs;
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    const matchesType = typeFilter === 'all' || job.type === typeFilter;
    const matchesCategory =
      categoryFilter === 'all' || job.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 lg:ml-72">
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
                Jobs Management
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Manage job postings and applications
              </p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Post Job
          </Button>
        </div>
      </div>

      <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Jobs</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobs.length}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-xl">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobs.filter((j) => j.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-xl">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Applicants
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobs.reduce((sum, j) => sum + j.applicants, 0)}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-xl">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Companies</p>
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(jobs.map((j) => j.company)).size}
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-xl">
                <Building className="h-6 w-6 text-orange-600" />
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
                  placeholder="Search jobs, companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
                <option value="draft">Draft</option>
                <option value="expired">Expired</option>
              </select>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Full Stack</option>
                <option value="mobile">Mobile</option>
                <option value="devops">DevOps</option>
                <option value="design">Design</option>
              </select>
            </div>
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company & Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicants
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
                {filteredJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {job.title}
                          </div>
                          {job.featured && (
                            <span className="ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {job.description}
                        </div>
                        <div className="mt-2 flex gap-2">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(
                              job.type,
                            )}`}
                          >
                            {job.type}
                          </span>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(
                              job.level,
                            )}`}
                          >
                            {job.level}
                          </span>
                          {job.remote && (
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                              Remote
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {job.company}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {job.salary}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {job.applicants} applicants
                      </div>
                      <div className="text-sm text-gray-500">
                        Deadline: {job.deadline}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          job.status,
                        )}`}
                      >
                        {job.status}
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
