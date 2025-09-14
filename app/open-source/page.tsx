'use client';

import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ScrollAnimatedSection } from '@/components/layouts/ScrollAnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Github, 
  Star, 
  GitFork, 
  ExternalLink, 
  Code, 
  Users, 
  Calendar,
  Search,
  Grid,
  List
} from 'lucide-react';

interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  contributors: number;
  lastUpdated: string;
  githubUrl: string;
  demoUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'library' | 'tool';
  status: 'active' | 'maintenance' | 'archived';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

const mockProjects: OpenSourceProject[] = [
  {
    id: '1',
    name: 'TegalDev UI Kit',
    description: 'A comprehensive React component library with modern design patterns and accessibility features.',
    language: 'TypeScript',
    stars: 1247,
    forks: 89,
    contributors: 23,
    lastUpdated: '2024-01-15',
    githubUrl: 'https://github.com/tegaldev/ui-kit',
    demoUrl: 'https://ui.tegal.dev',
    category: 'library',
    status: 'active',
    difficulty: 'intermediate',
    tags: ['React', 'TypeScript', 'UI', 'Components']
  },
  {
    id: '2',
    name: 'DevTools CLI',
    description: 'Command-line interface for common development tasks and project scaffolding.',
    language: 'Node.js',
    stars: 892,
    forks: 156,
    contributors: 34,
    lastUpdated: '2024-01-12',
    githubUrl: 'https://github.com/tegaldev/devtools-cli',
    category: 'tool',
    status: 'active',
    difficulty: 'beginner',
    tags: ['CLI', 'Node.js', 'Developer Tools']
  },
  {
    id: '3',
    name: 'Mobile Learning App',
    description: 'Cross-platform mobile application for interactive programming tutorials.',
    language: 'React Native',
    stars: 634,
    forks: 78,
    contributors: 12,
    lastUpdated: '2024-01-10',
    githubUrl: 'https://github.com/tegaldev/mobile-learning',
    demoUrl: 'https://play.google.com/store/apps/details?id=dev.tegal.learning',
    category: 'mobile',
    status: 'active',
    difficulty: 'advanced',
    tags: ['React Native', 'Mobile', 'Education']
  },
  {
    id: '4',
    name: 'Code Analytics Dashboard',
    description: 'Web application for analyzing code quality metrics and team productivity.',
    language: 'Next.js',
    stars: 445,
    forks: 67,
    contributors: 18,
    lastUpdated: '2024-01-08',
    githubUrl: 'https://github.com/tegaldev/code-analytics',
    demoUrl: 'https://analytics.tegal.dev',
    category: 'web',
    status: 'maintenance',
    difficulty: 'intermediate',
    tags: ['Next.js', 'Analytics', 'Dashboard']
  },
  {
    id: '5',
    name: 'API Testing Framework',
    description: 'Lightweight framework for automated API testing with detailed reporting.',
    language: 'Python',
    stars: 723,
    forks: 134,
    contributors: 28,
    lastUpdated: '2024-01-05',
    githubUrl: 'https://github.com/tegaldev/api-testing',
    category: 'tool',
    status: 'active',
    difficulty: 'intermediate',
    tags: ['Python', 'Testing', 'API']
  },
  {
    id: '6',
    name: 'Desktop Code Editor',
    description: 'Lightweight desktop code editor with syntax highlighting and plugin support.',
    language: 'Electron',
    stars: 312,
    forks: 45,
    contributors: 8,
    lastUpdated: '2023-12-20',
    githubUrl: 'https://github.com/tegaldev/desktop-editor',
    category: 'desktop',
    status: 'archived',
    difficulty: 'advanced',
    tags: ['Electron', 'Editor', 'Desktop']
  }
];

interface ProjectCardProps {
  project: OpenSourceProject;
}

function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'maintenance':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'archived':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'intermediate':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'advanced':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-gray-300 mt-2 line-clamp-2">
              {project.description}
            </p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
              {project.difficulty}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Code className="h-4 w-4" />
            <span>{project.language}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{project.stars.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>{project.forks}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{project.contributors}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/20 text-gray-300 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            Updated {new Date(project.lastUpdated).toLocaleDateString()}
          </span>
          <div className="flex items-center gap-2">
            {project.demoUrl && (
              <Link href={project.demoUrl} target="_blank">
                <Button size="sm" variant="outline" className="text-blue-400 border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-300">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Button>
              </Link>
            )}
            <Link href={project.githubUrl} target="_blank">
              <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                <Github className="h-4 w-4 mr-1" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OpenSourcePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', 'web', 'mobile', 'desktop', 'library', 'tool'];
  const statuses = ['all', 'active', 'maintenance', 'archived'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesDifficulty = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesStatus && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />
      
      <main className="pt-20">
        <ScrollAnimatedSection className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Open Source "
              highlightedWord="Projects"
              subtitle="Explore and contribute to our community-driven open source projects"
            />

            {/* Filters and Search */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300"
                    />
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-3 py-2 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="px-3 py-2 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                      </option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results count */}
              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredProjects.length} of {mockProjects.length} projects
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Github className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedStatus('all');
                    setSelectedDifficulty('all');
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Want to Contribute?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our community of developers and help build amazing open source projects. 
                Whether you&apos;re a beginner or expert, there&apos;s a place for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://github.com/tegaldev" target="_blank">
                  <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white hover:bg-blue-50">
                    <Github className="h-5 w-5 mr-2" />
                    View on GitHub
                  </Button>
                </Link>
                <Link href="/events">
                  <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                    <Calendar className="h-5 w-5 mr-2" />
                    Join Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
}