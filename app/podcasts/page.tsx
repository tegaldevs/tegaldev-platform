'use client';

export const dynamic = 'force-dynamic';

import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { ScrollAnimatedSection } from '@/components/layouts/ScrollAnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { Calendar, Clock, Play, ExternalLink, Mic, Users } from 'lucide-react';

interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  season: number;
  episode: number;
  guests: string[];
  topics: string[];
  spotifyUrl: string;
  thumbnail: string;
}

const podcastEpisodes: PodcastEpisode[] = [
  {
    id: '1',
    title: 'The Future of Web Development with AI Integration',
    description:
      'Join us as we explore how artificial intelligence is revolutionizing web development. We discuss AI-powered coding assistants, automated testing, and the future of developer productivity.',
    duration: '45:32',
    publishedAt: '2024-01-25',
    season: 2,
    episode: 8,
    guests: ['Dr. Sarah Chen', 'Ahmad Rizki'],
    topics: ['AI', 'Web Development', 'Productivity', 'Future Tech'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-ai-web-dev',
    thumbnail: '/placeholder-podcast.jpg',
  },
  {
    id: '2',
    title: 'Building Scalable Microservices Architecture',
    description:
      'A deep dive into microservices architecture patterns, best practices, and common pitfalls. Learn from industry experts about designing systems that scale.',
    duration: '52:18',
    publishedAt: '2024-01-18',
    season: 2,
    episode: 7,
    guests: ['Budi Santoso', 'Lisa Maharani'],
    topics: ['Microservices', 'Architecture', 'Scalability', 'Backend'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-microservices',
    thumbnail: '/placeholder-podcast.jpg',
  },
  {
    id: '3',
    title: 'Career Growth in Tech: From Junior to Senior Developer',
    description:
      'Practical advice for developers looking to advance their careers. We cover skill development, networking, leadership, and transitioning to senior roles.',
    duration: '38:45',
    publishedAt: '2024-01-11',
    season: 2,
    episode: 6,
    guests: ['Rina Kusuma', 'Doni Pratama'],
    topics: ['Career', 'Leadership', 'Skills', 'Growth'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-career-growth',
    thumbnail: '/placeholder-podcast.jpg',
  },
  {
    id: '4',
    title: 'Open Source Contribution: Getting Started and Making Impact',
    description:
      'Everything you need to know about contributing to open source projects. From finding the right project to making your first pull request.',
    duration: '41:22',
    publishedAt: '2024-01-04',
    season: 2,
    episode: 5,
    guests: ['Sari Dewi', 'Ahmad Rizki'],
    topics: ['Open Source', 'Community', 'Contribution', 'Git'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-open-source',
    thumbnail: '/placeholder-podcast.jpg',
  },
  {
    id: '5',
    title: 'Mobile Development Trends: Native vs Cross-Platform',
    description:
      'Comparing different approaches to mobile development. We discuss React Native, Flutter, native development, and when to choose each approach.',
    duration: '47:15',
    publishedAt: '2023-12-28',
    season: 2,
    episode: 4,
    guests: ['Lisa Maharani', 'Budi Santoso'],
    topics: ['Mobile', 'React Native', 'Flutter', 'Native'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-mobile-trends',
    thumbnail: '/placeholder-podcast.jpg',
  },
  {
    id: '6',
    title: 'DevOps Culture: Breaking Down Silos',
    description:
      'How to build a successful DevOps culture in your organization. We cover collaboration, automation, monitoring, and cultural transformation.',
    duration: '43:58',
    publishedAt: '2023-12-21',
    season: 2,
    episode: 3,
    guests: ['Doni Pratama', 'Rina Kusuma'],
    topics: ['DevOps', 'Culture', 'Automation', 'Collaboration'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-devops-culture',
    thumbnail: '/placeholder-podcast.jpg',
  },
];

function PodcastCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:cursor-pointer transition-all duration-300 group flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full">
            S{episode.season}E{episode.episode}
          </span>
          <div className="flex items-center text-gray-400 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {episode.duration}
          </div>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <Mic className="h-5 w-5 text-white" />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
        {episode.title}
      </h2>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
        {episode.description}
      </p>

      <div className="flex items-center space-x-4 text-gray-400 text-xs mb-4">
        <div className="flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          {new Date(episode.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
        {episode.guests.length > 0 && (
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {episode.guests.slice(0, 1).join(', ')}
            {episode.guests.length > 1 && ` +${episode.guests.length - 1} more`}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-1 mb-6">
        {episode.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full cursor-default break-all"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          href={episode.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 px-4 py-2">
            <Play className="h-4 w-4" />
            Listen on Spotify
            <ExternalLink className="h-3 w-3" />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default function PodcastsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Get all unique topics
  const allTopics = Array.from(
    new Set(podcastEpisodes.flatMap((episode) => episode.topics)),
  );

  // Filter episodes by selected topic
  const filteredEpisodes = selectedTopic
    ? podcastEpisodes.filter((episode) =>
        episode.topics.includes(selectedTopic),
      )
    : podcastEpisodes;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <ScrollAnimatedSection animationType="fade-up">
          <div className="text-center py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Podcast
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Deep conversations about technology, career growth, and the future
              of software development. Listen to our podcast on Spotify.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://open.spotify.com/show/tegaldev-podcast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  Follow on Spotify
                </Button>
              </Link>
              <Link
                href="https://podcasts.apple.com/podcast/tegaldev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/20 hover:bg-white/70 px-6 sm:px-8 py-3 flex items-center justify-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  View Episodes
                </Button>
              </Link>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Topic Filter */}
        <ScrollAnimatedSection animationType="fade-up" delay={200}>
          <section className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center px-4">
              <button
                onClick={() => setSelectedTopic(null)}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedTopic === null
                    ? 'bg-green-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:cursor-pointer'
                }`}
              >
                All Episodes
              </button>
              {allTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedTopic === topic
                      ? 'bg-green-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:cursor-pointer'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Podcast Episodes */}
        <ScrollAnimatedSection animationType="fade-up" delay={300}>
          <section className="mb-16">
            <SectionHeader
              title="Latest "
              highlightedWord="Episodes"
              subtitle={`${filteredEpisodes.length} episode${
                filteredEpisodes.length !== 1 ? 's' : ''
              } ${
                selectedTopic
                  ? `about "${selectedTopic}"`
                  : 'from TegalDev Podcast'
              }`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {filteredEpisodes.map((episode) => (
                <PodcastCard key={episode.id} episode={episode} />
              ))}
            </div>

            {filteredEpisodes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No episodes found for the selected topic.
                </p>
              </div>
            )}
          </section>
        </ScrollAnimatedSection>

        {/* Podcast Stats */}
        <ScrollAnimatedSection animationType="fade-up" delay={400}>
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  50+
                </div>
                <div className="text-gray-300">Episodes Published</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  10K+
                </div>
                <div className="text-gray-300">Monthly Listeners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  25+
                </div>
                <div className="text-gray-300">Expert Guests</div>
              </div>
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Call to Action */}
        <ScrollAnimatedSection animationType="scale-up" delay={500}>
          <section className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to Be a Guest?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Share your expertise and insights with our community. We&apos;re
                always looking for passionate developers and tech leaders to
                join our conversations.
              </p>
              <Link href="mailto:podcast@tegaldev.com?subject=Podcast Guest Application">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3"
                >
                  Apply to be a Guest
                </Button>
              </Link>
            </div>
          </section>
        </ScrollAnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
