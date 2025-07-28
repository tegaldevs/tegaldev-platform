'use client';

import { Navbar } from '@/app/_components/ui/Navbar';
import { Footer } from '@/app/_components/ui/Footer';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { ScrollAnimatedSection } from '@/app/_components/ui/ScrollAnimatedSection';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import {
  MapPin,
  Building,
  DollarSign,
  Clock,
  ExternalLink,
  Briefcase,
  Users,
  Filter,
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote';
  salary: string;
  experience: string;
  postedAt: string;
  description: string;
  requirements: string[];
  benefits: string[];
  category: string;
  tags: string[];
  applyUrl: string;
  companyLogo: string;
  featured: boolean;
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Indonesia',
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    salary: 'IDR 25,000,000 - 35,000,000',
    experience: '3-5 years',
    postedAt: '2024-01-20',
    description: 'We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building scalable web applications using modern technologies.',
    requirements: [
      'Strong experience with React, TypeScript, and Next.js',
      'Experience with state management (Redux, Zustand)',
      'Knowledge of modern CSS and responsive design',
      'Experience with testing frameworks (Jest, React Testing Library)',
      'Good understanding of web performance and optimization'
    ],
    benefits: [
      'Competitive salary and benefits',
      'Flexible working hours',
      'Remote work options',
      'Professional development budget',
      'Health insurance'
    ],
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Next.js', 'Frontend', 'Senior'],
    applyUrl: 'https://techcorp.co.id/careers/senior-frontend',
    companyLogo: '/placeholder-company.jpg',
    featured: true,
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'StartupXYZ',
    location: 'Remote',
    type: 'full-time',
    salary: 'IDR 20,000,000 - 30,000,000',
    experience: '2-4 years',
    postedAt: '2024-01-18',
    description: 'Join our backend team to build robust and scalable APIs. We use modern technologies and follow best practices for code quality and performance.',
    requirements: [
      'Experience with Node.js and Express.js',
      'Knowledge of databases (PostgreSQL, MongoDB)',
      'Experience with RESTful APIs and GraphQL',
      'Understanding of microservices architecture',
      'Experience with Docker and cloud platforms'
    ],
    benefits: [
      'Remote-first culture',
      'Stock options',
      'Unlimited PTO',
      'Learning and development opportunities',
      'Home office setup allowance'
    ],
    category: 'Backend',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Backend', 'Remote'],
    applyUrl: 'https://startupxyz.com/careers/backend-engineer',
    companyLogo: '/placeholder-company.jpg',
    featured: true,
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    location: 'Surabaya, Indonesia',
    type: 'full-time',
    salary: 'IDR 18,000,000 - 25,000,000',
    experience: '1-3 years',
    postedAt: '2024-01-15',
    description: 'We are seeking a Full Stack Developer to work on exciting projects. You will be involved in both frontend and backend development.',
    requirements: [
      'Experience with React and Node.js',
      'Knowledge of databases and SQL',
      'Understanding of version control (Git)',
      'Good problem-solving skills',
      'Ability to work in a team environment'
    ],
    benefits: [
      'Competitive salary',
      'Performance bonuses',
      'Health and dental insurance',
      'Professional development',
      'Team building activities'
    ],
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'Full Stack', 'JavaScript', 'Junior'],
    applyUrl: 'https://digitalsolutions.co.id/careers/full-stack',
    companyLogo: '/placeholder-company.jpg',
    featured: false,
  },
  {
    id: '4',
    title: 'Mobile App Developer',
    company: 'AppStudio',
    location: 'Bandung, Indonesia',
    type: 'contract',
    salary: 'IDR 15,000,000 - 22,000,000',
    experience: '2-4 years',
    postedAt: '2024-01-12',
    description: 'Join our mobile development team to create innovative mobile applications. We work with React Native and native development.',
    requirements: [
      'Experience with React Native or native iOS/Android development',
      'Knowledge of mobile app architecture',
      'Experience with app store deployment',
      'Understanding of mobile UI/UX principles',
      'Experience with mobile testing'
    ],
    benefits: [
      'Flexible contract terms',
      'Project-based bonuses',
      'Latest development tools',
      'Creative work environment',
      'Portfolio building opportunities'
    ],
    category: 'Mobile',
    tags: ['React Native', 'Mobile', 'iOS', 'Android', 'App Development'],
    applyUrl: 'https://appstudio.com/careers/mobile-developer',
    companyLogo: '/placeholder-company.jpg',
    featured: false,
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Remote',
    type: 'full-time',
    salary: 'IDR 22,000,000 - 32,000,000',
    experience: '3-5 years',
    postedAt: '2024-01-10',
    description: 'We are looking for a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.',
    requirements: [
      'Experience with AWS, Azure, or GCP',
      'Knowledge of Docker and Kubernetes',
      'Experience with CI/CD tools (Jenkins, GitHub Actions)',
      'Understanding of infrastructure as code',
      'Experience with monitoring and logging tools'
    ],
    benefits: [
      'Remote work options',
      'Cloud certification support',
      'Competitive salary',
      'Health insurance',
      'Professional development budget'
    ],
    category: 'DevOps',
    tags: ['AWS', 'Docker', 'Kubernetes', 'DevOps', 'CI/CD'],
    applyUrl: 'https://cloudtech.com/careers/devops-engineer',
    companyLogo: '/placeholder-company.jpg',
    featured: true,
  },
  {
    id: '6',
    title: 'UI/UX Designer',
    company: 'Design Studio',
    location: 'Yogyakarta, Indonesia',
    type: 'full-time',
    salary: 'IDR 16,000,000 - 24,000,000',
    experience: '2-4 years',
    postedAt: '2024-01-08',
    description: 'Join our design team to create beautiful and functional user interfaces. We focus on user-centered design principles.',
    requirements: [
      'Experience with design tools (Figma, Sketch, Adobe XD)',
      'Understanding of user research and usability testing',
      'Knowledge of design systems and component libraries',
      'Experience with prototyping tools',
      'Portfolio showcasing web and mobile designs'
    ],
    benefits: [
      'Creative work environment',
      'Latest design tools and software',
      'Professional development opportunities',
      'Flexible working hours',
      'Health insurance'
    ],
    category: 'Design',
    tags: ['UI/UX', 'Figma', 'Design', 'Prototyping', 'User Research'],
    applyUrl: 'https://designstudio.com/careers/ui-ux-designer',
    companyLogo: '/placeholder-company.jpg',
    featured: false,
  },
];

function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
            <p className="text-gray-300 text-sm">{job.company}</p>
          </div>
        </div>
        {job.featured && (
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Featured
          </span>
        )}
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-300 text-sm">
          <MapPin className="h-4 w-4 mr-2" />
          {job.location}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Clock className="h-4 w-4 mr-2" />
          {job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', ' ')}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <DollarSign className="h-4 w-4 mr-2" />
          {job.salary}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Users className="h-4 w-4 mr-2" />
          {job.experience} experience
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
        {job.tags.length > 3 && (
          <span className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
            +{job.tags.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-xs">
          Posted {new Date(job.postedAt).toLocaleDateString()}
        </span>
        <Link href={job.applyUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get all unique categories and types
  const allCategories = Array.from(new Set(jobs.map((job) => job.category)));
  const allTypes = Array.from(new Set(jobs.map((job) => job.type)));

  // Filter jobs by selected category and type
  const filteredJobs = jobs.filter((job) => {
    const categoryMatch = !selectedCategory || job.category === selectedCategory;
    const typeMatch = !selectedType || job.type === selectedType;
    return categoryMatch && typeMatch;
  });

  // Get featured jobs
  const featuredJobs = jobs.filter((job) => job.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <ScrollAnimatedSection animationType="fade-up">
          <div className="text-center py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Career{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover exciting job opportunities in the tech industry. Find your
              next career move with companies that value innovation and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:jobs@tegaldev.com?subject=Job Posting Request">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 flex items-center gap-2"
                >
                  <Briefcase className="h-5 w-5" />
                  Post a Job
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/70 px-8 py-3 flex items-center gap-2"
              >
                <Filter className="h-5 w-5" />
                Filter Jobs
              </Button>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Filters */}
        <ScrollAnimatedSection animationType="slide-left" delay={200}>
          <section className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-purple-600 text-white" : "border-white/20 hover:bg-white/10"}
                >
                  All Categories
                </Button>
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-purple-600 text-white" : "border-white/20 hover:bg-white/10"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedType === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(null)}
                  className={selectedType === null ? "bg-blue-600 text-white" : "border-white/20 hover:bg-white/10"}
                >
                  All Types
                </Button>
                {allTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={selectedType === type ? "bg-blue-600 text-white" : "border-white/20 hover:bg-white/10"}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                  </Button>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Featured Jobs */}
        <ScrollAnimatedSection animationType="slide-right" delay={300}>
          <section className="mb-16">
            <SectionHeader
              title="Featured "
              highlightedWord="Jobs"
              subtitle="Highlighted opportunities from top companies in the tech industry"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* All Jobs */}
        <ScrollAnimatedSection animationType="fade-up" delay={400}>
          <section className="mb-16">
            <SectionHeader
              title="All "
              highlightedWord="Jobs"
              subtitle={`${filteredJobs.length} job${
                filteredJobs.length !== 1 ? 's' : ''
              } ${
                selectedCategory
                  ? `in "${selectedCategory}"`
                  : selectedType
                  ? `(${selectedType})`
                  : 'available'
              }`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No jobs found for the selected filters.
                </p>
              </div>
            )}
          </section>
        </ScrollAnimatedSection>

        {/* Call to Action */}
        <ScrollAnimatedSection className="text-center py-16" animationType="scale-up" delay={500}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Looking for Talent?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Post your job openings and reach thousands of qualified developers
              in the TegalDev community. Get access to top talent in the tech
              industry.
            </p>
            <Link href="mailto:jobs@tegaldev.com?subject=Job Posting Request">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                Post a Job Opening
              </Button>
            </Link>
          </div>
        </ScrollAnimatedSection>
      </div>

      <Footer />
    </div>
  );
} 