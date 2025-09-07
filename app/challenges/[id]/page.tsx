'use client';

import { use } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  Calendar,
  Clock,
  Users,
  Trophy,
  ExternalLink,
  Award,
  ArrowLeft,
  CheckCircle,
  UserCheck,
  Star,
  Target,
  Zap,
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

export default function ChallengeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: session } = useSession();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const challenge = challenges.find((c) => c.id === id);

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-blue-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Challenge Not Found
          </h1>
          <Link href="/challenges">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Challenges
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

  const handleRegistration = async () => {
    if (!session) {
      // Redirect to login or show login modal
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsRegistered(!isRegistered);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/challenges">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Challenges
            </Button>
          </Link>
        </div>

        {/* Challenge Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {challenge.title}
                  </h1>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        challenge.status,
                      )}`}
                    >
                      {challenge.status.charAt(0).toUpperCase() +
                        challenge.status.slice(1)}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                        challenge.difficulty,
                      )}`}
                    >
                      {challenge.difficulty.charAt(0).toUpperCase() +
                        challenge.difficulty.slice(1)}
                    </span>
                    {challenge.featured && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {challenge.description}
              </p>

              {/* Challenge Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-3 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="font-medium">{challenge.duration}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 mr-3 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400">Participants</div>
                    <div className="font-medium">
                      {challenge.participants}/{challenge.maxParticipants}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-5 w-5 mr-3 text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-400">Timeline</div>
                    <div className="font-medium">
                      {new Date(challenge.startDate).toLocaleDateString()} -{' '}
                      {new Date(challenge.endDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Section */}
            <div className="lg:w-80">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {session ? 'Join Challenge' : 'Registration'}
                </h3>

                {session ? (
                  <div className="space-y-4">
                    <div className="text-sm text-gray-300">
                      Welcome back, {session.user?.name || session.user?.email}!
                    </div>
                    <Button
                      onClick={handleRegistration}
                      disabled={
                        isProcessing || challenge.status === 'completed'
                      }
                      className={`w-full ${
                        isRegistered
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                      }`}
                    >
                      {isProcessing ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : isRegistered ? (
                        <div className="flex items-center">
                          <UserCheck className="h-4 w-4 mr-2" />
                          Registered
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Join Challenge
                        </div>
                      )}
                    </Button>
                    {challenge.status === 'completed' && (
                      <p className="text-sm text-gray-400 text-center">
                        This challenge has ended
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-300">
                      Please sign in to join this challenge and track your
                      progress.
                    </p>
                    <Link href="/auth/signin">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        Sign In to Join
                      </Button>
                    </Link>
                    <div className="text-center">
                      <span className="text-sm text-gray-400">or</span>
                    </div>
                    <Link
                      href={challenge.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        External Registration
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prizes Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Award className="h-6 w-6 mr-3 text-yellow-400" />
              Prizes & Rewards
            </h2>
            <div className="space-y-3">
              {challenge.prizes.map((prize, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg"
                >
                  <Star className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{prize}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Target className="h-6 w-6 mr-3 text-blue-400" />
              Requirements
            </h2>
            <div className="space-y-3">
              {challenge.requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Tags</h2>
          <div className="flex flex-wrap gap-3">
            {challenge.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
