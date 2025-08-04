'use client';

import { Navbar } from '@/app/_components/organisms/Navbar';
import { Footer } from '@/app/_components/ui/Footer';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { ScrollAnimatedSection } from '@/app/_components/ui/ScrollAnimatedSection';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  Trophy,
  ExternalLink,
  Filter,
  Award,
} from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  type:
    | 'hackathon'
    | 'coding-challenge'
    | 'algorithm'
    | 'project'
    | 'innovation';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: string;
  participants: number;
  maxParticipants: number;
  startDate: string;
  endDate: string;
  prizes: string[];
  requirements: string[];
  category: string;
  tags: string[];
  registrationUrl: string;
  image: string;
  featured: boolean;
  status: 'upcoming' | 'active' | 'completed';
}

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'TegalDev Hackathon 2024',
    description:
      'Join our annual hackathon and build innovative solutions for real-world problems. Work with fellow developers and showcase your skills.',
    type: 'hackathon',
    difficulty: 'intermediate',
    duration: '48 hours',
    participants: 45,
    maxParticipants: 100,
    startDate: '2024-02-15',
    endDate: '2024-02-17',
    prizes: [
      '1st Place: IDR 10,000,000 + Job opportunities',
      '2nd Place: IDR 5,000,000 + Tech gadgets',
      '3rd Place: IDR 2,500,000 + Learning resources',
    ],
    requirements: [
      'Basic programming knowledge',
      'Team of 2-4 members',
      'Laptop and development tools',
      'Innovation mindset',
    ],
    category: 'Full Stack',
    tags: ['Hackathon', 'Innovation', 'Team Building', 'Networking'],
    registrationUrl: 'https://hackathon.tegaldev.com/register',
    image: '/placeholder-hackathon.jpg',
    featured: true,
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'React Performance Challenge',
    description:
      'Optimize a React application for maximum performance. Learn advanced techniques and compete with other developers.',
    type: 'coding-challenge',
    difficulty: 'advanced',
    duration: '1 week',
    participants: 23,
    maxParticipants: 50,
    startDate: '2024-01-25',
    endDate: '2024-02-01',
    prizes: [
      'Winner: IDR 3,000,000 + React certification',
      'Runner-up: IDR 1,500,000 + Premium courses',
      'Honorable mentions: Tech gadgets',
    ],
    requirements: [
      'Strong React knowledge',
      'Performance optimization experience',
      'Understanding of React DevTools',
      'GitHub account',
    ],
    category: 'Frontend',
    tags: ['React', 'Performance', 'Optimization', 'Frontend'],
    registrationUrl: 'https://challenges.tegaldev.com/react-performance',
    image: '/placeholder-challenge.jpg',
    featured: true,
    status: 'active',
  },
  {
    id: '3',
    title: 'Algorithm Master Challenge',
    description:
      'Solve complex algorithmic problems and improve your problem-solving skills. Perfect for competitive programming enthusiasts.',
    type: 'algorithm',
    difficulty: 'expert',
    duration: '4 hours',
    participants: 67,
    maxParticipants: 100,
    startDate: '2024-01-30',
    endDate: '2024-01-30',
    prizes: [
      '1st Place: IDR 5,000,000 + Interview opportunities',
      '2nd Place: IDR 2,500,000 + Algorithm books',
      '3rd Place: IDR 1,000,000 + Online courses',
    ],
    requirements: [
      'Advanced programming skills',
      'Algorithm and data structure knowledge',
      'Competitive programming experience',
      'Fast problem-solving ability',
    ],
    category: 'Algorithms',
    tags: [
      'Algorithms',
      'Competitive Programming',
      'Problem Solving',
      'Data Structures',
    ],
    registrationUrl: 'https://challenges.tegaldev.com/algorithm-master',
    image: '/placeholder-algorithm.jpg',
    featured: false,
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Open Source Contribution Challenge',
    description:
      'Contribute to open source projects and make a positive impact on the developer community. Learn collaboration and best practices.',
    type: 'project',
    difficulty: 'beginner',
    duration: '2 weeks',
    participants: 89,
    maxParticipants: 200,
    startDate: '2024-02-01',
    endDate: '2024-02-15',
    prizes: [
      'Top Contributors: Swag packages + Recognition',
      'Active Contributors: Digital certificates',
      'All participants: Community badges',
    ],
    requirements: [
      'Basic Git knowledge',
      'Willingness to learn',
      'GitHub account',
      'Communication skills',
    ],
    category: 'Open Source',
    tags: ['Open Source', 'Git', 'Collaboration', 'Community'],
    registrationUrl: 'https://challenges.tegaldev.com/open-source',
    image: '/placeholder-opensource.jpg',
    featured: false,
    status: 'upcoming',
  },
  {
    id: '5',
    title: 'AI/ML Innovation Challenge',
    description:
      'Build innovative AI/ML solutions that can solve real-world problems. Showcase your machine learning skills and creativity.',
    type: 'innovation',
    difficulty: 'advanced',
    duration: '3 weeks',
    participants: 34,
    maxParticipants: 75,
    startDate: '2024-02-10',
    endDate: '2024-03-03',
    prizes: [
      '1st Place: IDR 8,000,000 + AI conference tickets',
      '2nd Place: IDR 4,000,000 + ML courses',
      '3rd Place: IDR 2,000,000 + Tech gadgets',
    ],
    requirements: [
      'Machine learning experience',
      'Python programming skills',
      'Understanding of AI/ML frameworks',
      'Innovation and creativity',
    ],
    category: 'AI/ML',
    tags: ['AI', 'Machine Learning', 'Python', 'Innovation'],
    registrationUrl: 'https://challenges.tegaldev.com/ai-ml-innovation',
    image: '/placeholder-ai.jpg',
    featured: true,
    status: 'upcoming',
  },
  {
    id: '6',
    title: 'Mobile App Development Challenge',
    description:
      "Create innovative mobile applications using React Native or Flutter. Build apps that can make a difference in people's lives.",
    type: 'project',
    difficulty: 'intermediate',
    duration: '2 weeks',
    participants: 56,
    maxParticipants: 100,
    startDate: '2024-01-20',
    endDate: '2024-02-03',
    prizes: [
      'Best App: IDR 6,000,000 + App store promotion',
      'Most Innovative: IDR 3,000,000 + Development tools',
      'Best UI/UX: IDR 2,000,000 + Design resources',
    ],
    requirements: [
      'React Native or Flutter experience',
      'Mobile app development knowledge',
      'UI/UX design skills',
      'App store deployment experience',
    ],
    category: 'Mobile',
    tags: ['React Native', 'Flutter', 'Mobile Development', 'App Store'],
    registrationUrl: 'https://challenges.tegaldev.com/mobile-app',
    image: '/placeholder-mobile.jpg',
    featured: false,
    status: 'completed',
  },
];

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-500';
      case 'active':
        return 'bg-green-500';
      case 'completed':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'advanced':
        return 'bg-orange-500';
      case 'expert':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {challenge.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  challenge.status,
                )}`}
              >
                {challenge.status.charAt(0).toUpperCase() +
                  challenge.status.slice(1)}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                  challenge.difficulty,
                )}`}
              >
                {challenge.difficulty.charAt(0).toUpperCase() +
                  challenge.difficulty.slice(1)}
              </span>
            </div>
          </div>
        </div>
        {challenge.featured && (
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Featured
          </span>
        )}
      </div>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {challenge.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-300 text-sm">
          <Clock className="h-4 w-4 mr-2" />
          {challenge.duration}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Users className="h-4 w-4 mr-2" />
          {challenge.participants}/{challenge.maxParticipants} participants
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Calendar className="h-4 w-4 mr-2" />
          {new Date(challenge.startDate).toLocaleDateString()} -{' '}
          {new Date(challenge.endDate).toLocaleDateString()}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {challenge.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
        {challenge.tags.length > 3 && (
          <span className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
            +{challenge.tags.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-gray-400 text-xs">
          {challenge.prizes.length > 0 && (
            <span className="flex items-center">
              <Award className="h-3 w-3 mr-1" />
              {challenge.prizes.length} prize
              {challenge.prizes.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <Link
          href={challenge.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function ChallengesPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null,
  );
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  // Get all unique types, difficulties, and statuses
  const allTypes = Array.from(
    new Set(challenges.map((challenge) => challenge.type)),
  );
  const allDifficulties = Array.from(
    new Set(challenges.map((challenge) => challenge.difficulty)),
  );
  const allStatuses = Array.from(
    new Set(challenges.map((challenge) => challenge.status)),
  );

  // Filter challenges by selected filters
  const filteredChallenges = challenges.filter((challenge) => {
    const typeMatch = !selectedType || challenge.type === selectedType;
    const difficultyMatch =
      !selectedDifficulty || challenge.difficulty === selectedDifficulty;
    const statusMatch = !selectedStatus || challenge.status === selectedStatus;
    return typeMatch && difficultyMatch && statusMatch;
  });

  // Get featured challenges
  const featuredChallenges = challenges.filter(
    (challenge) => challenge.featured,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <ScrollAnimatedSection animationType="fade-up">
          <div className="text-center py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Coding{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Challenges
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Test your skills, learn new technologies, and compete with fellow
              developers. Join exciting challenges and win amazing prizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:challenges@tegaldev.com?subject=Challenge Proposal">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 flex items-center gap-2 w-full"
                >
                  <Trophy className="h-5 w-5" />
                  Propose Challenge
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/70 px-8 py-3 flex items-center gap-2"
              >
                <Filter className="h-5 w-5" />
                Filter Challenges
              </Button>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Filters */}
        <ScrollAnimatedSection animationType="fade-up" delay={200}>
          <section className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedType === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(null)}
                  className={
                    selectedType === null
                      ? 'bg-purple-600 text-white'
                      : 'border-white/20 hover:bg-white/10'
                  }
                >
                  All Types
                </Button>
                {allTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={
                      selectedType === type
                        ? 'bg-purple-600 text-white'
                        : 'border-white/20 hover:bg-white/70'
                    }
                  >
                    {type.charAt(0).toUpperCase() +
                      type.slice(1).replace('-', ' ')}
                  </Button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedDifficulty === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDifficulty(null)}
                  className={
                    selectedDifficulty === null
                      ? 'bg-blue-600 text-white'
                      : 'border-white/20 hover:bg-white/10'
                  }
                >
                  All Levels
                </Button>
                {allDifficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={
                      selectedDifficulty === difficulty ? 'default' : 'outline'
                    }
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={
                      selectedDifficulty === difficulty
                        ? 'bg-blue-600 text-white'
                        : 'border-white/20 hover:bg-white/10'
                    }
                  >
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </Button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedStatus === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStatus(null)}
                  className={
                    selectedStatus === null
                      ? 'bg-green-600 text-white'
                      : 'border-white/20 hover:bg-white/10'
                  }
                >
                  All Status
                </Button>
                {allStatuses.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                    className={
                      selectedStatus === status
                        ? 'bg-green-600 text-white'
                        : 'border-white/20 hover:bg-white/10'
                    }
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Featured Challenges */}
        <ScrollAnimatedSection animationType="fade-up" delay={300}>
          <section className="mb-16">
            <SectionHeader
              title="Featured "
              highlightedWord="Challenges"
              subtitle="Highlighted challenges with amazing prizes and learning opportunities"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {featuredChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* All Challenges */}
        <ScrollAnimatedSection animationType="fade-up" delay={400}>
          <section className="mb-16">
            <SectionHeader
              title="All "
              highlightedWord="Challenges"
              subtitle={`${filteredChallenges.length} challenge${
                filteredChallenges.length !== 1 ? 's' : ''
              } ${
                selectedType
                  ? `of type "${selectedType}"`
                  : selectedDifficulty
                  ? `at "${selectedDifficulty}" level`
                  : selectedStatus
                  ? `with status "${selectedStatus}"`
                  : 'available'
              }`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {filteredChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>

            {filteredChallenges.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No challenges found for the selected filters.
                </p>
              </div>
            )}
          </section>
        </ScrollAnimatedSection>

        {/* Call to Action */}
        <ScrollAnimatedSection
          className="text-center py-16"
          animationType="scale-up"
          delay={500}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Host a Challenge?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Have an idea for an exciting coding challenge? We&apos;d love to
              help you organize it and reach thousands of developers in our
              community.
            </p>
            <Link href="mailto:challenges@tegaldev.com?subject=Challenge Proposal">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                Propose a Challenge
              </Button>
            </Link>
          </div>
        </ScrollAnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
