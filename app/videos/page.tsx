'use client';

export const dynamic = 'force-dynamic';

import { Navbar } from '@/app/_components/ui/Navbar';
import { Footer } from '@/app/_components/ui/Footer';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { ScrollAnimatedSection } from '@/app/_components/ui/ScrollAnimatedSection';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import {
  Calendar,
  Play,
  ExternalLink,
  Youtube,
  Eye,
  ThumbsUp,
} from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  views: string;
  likes: string;
  category: string;
  tags: string[];
  youtubeUrl: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Building a Full-Stack Next.js Application from Scratch',
    description:
      "Learn how to build a complete full-stack application using Next.js 14, TypeScript, Prisma, and PostgreSQL. We'll cover everything from setup to deployment.",
    duration: '1:45:32',
    publishedAt: '2024-01-22',
    views: '15.2K',
    likes: '892',
    category: 'Tutorial',
    tags: ['Next.js', 'TypeScript', 'Full-Stack', 'React'],
    youtubeUrl: 'https://youtube.com/watch?v=tegaldev-nextjs-tutorial',
    thumbnail: '/placeholder-video.jpg',
  },
  {
    id: '2',
    title: 'React Hooks Deep Dive: useState, useEffect, and Custom Hooks',
    description:
      'Master React Hooks with practical examples and best practices. Learn when and how to use different hooks effectively in your React applications.',
    duration: '52:18',
    publishedAt: '2024-01-15',
    views: '23.7K',
    likes: '1.2K',
    category: 'Tutorial',
    tags: ['React', 'Hooks', 'JavaScript', 'Frontend'],
    youtubeUrl: 'https://youtube.com/watch?v=tegaldev-react-hooks',
    thumbnail: '/placeholder-video.jpg',
  },
  {
    id: '3',
    title: 'Node.js API Development with Express and MongoDB',
    description:
      'Build a RESTful API from scratch using Node.js, Express, and MongoDB. Includes authentication, validation, error handling, and testing.',
    duration: '1:28:45',
    publishedAt: '2024-01-08',
    views: '18.9K',
    likes: '967',
    category: 'Tutorial',
    tags: ['Node.js', 'Express', 'MongoDB', 'API'],
    youtubeUrl: 'https://youtube.com/watch?v=tegaldev-nodejs-api',
    thumbnail: '/placeholder-video.jpg',
  },
  {
    id: '4',
    title: 'Live Coding: Building a Real-time Chat App with Socket.io',
    description:
      'Join us for a live coding session where we build a real-time chat application using React, Node.js, and Socket.io. Interactive Q&A included!',
    duration: '2:15:22',
    publishedAt: '2024-01-01',
    views: '31.5K',
    likes: '1.8K',
    category: 'Live Coding',
    tags: ['Socket.io', 'Real-time', 'React', 'Node.js'],
    youtubeUrl: 'https://youtube.com/watch?v=tegaldev-live-chat-app',
    thumbnail: '/placeholder-video.jpg',
  },
  {
    id: '5',
    title: 'Docker for Developers: Containerizing Your Applications',
    description:
      "Learn Docker fundamentals and how to containerize your applications. We'll cover Dockerfile, docker-compose, and deployment strategies.",
    duration: '1:12:33',
    publishedAt: '2023-12-25',
    views: '27.3K',
    likes: '1.4K',
    category: 'DevOps',
    tags: ['Docker', 'DevOps', 'Containers', 'Deployment'],
    youtubeUrl: 'https://youtube.com/watch?v=tegaldev-docker-tutorial',
    thumbnail: '/placeholder-video.jpg',
  },
  {
    id: '6',
    title: 'Code Review Session: Analyzing Real-World React Projects',
    description:
      'Join our code review session where we analyze community-submitted React projects, discuss best practices, and suggest improvements.',
    duration: '58:17',
    publishedAt: '2023-12-18',
    views: '12.8K',
    likes: '743',
    category: 'Code Review',
    tags: ['Code Review', 'React', 'Best Practices', 'Community'],
    youtubeUrl: 'https://youtube.com/watch?v=tegaldev-code-review',
    thumbnail: '/placeholder-video.jpg',
  },
  {
    id: '7',
    title: "JavaScript ES2024 Features: What's New and Exciting",
    description:
      'Explore the latest JavaScript features in ES2024. Learn about new syntax, methods, and capabilities that will improve your development experience.',
    duration: '35:42',
    publishedAt: '2023-12-11',
    views: '19.6K',
    likes: '1.1K',
    category: 'News & Updates',
    tags: ['JavaScript', 'ES2024', 'Features', 'Updates'],
    youtubeUrl: 'https://youtube.com/watch?v=tegaldev-js-es2024',
    thumbnail: '/placeholder-video.jpg',
  },
  {
    id: '8',
    title: 'Database Design Patterns: SQL vs NoSQL Decision Guide',
    description:
      "Learn when to choose SQL or NoSQL databases for your projects. We'll cover design patterns, performance considerations, and real-world examples.",
    duration: '1:03:28',
    publishedAt: '2023-12-04',
    views: '22.1K',
    likes: '1.3K',
    category: 'Tutorial',
    tags: ['Database', 'SQL', 'NoSQL', 'Design Patterns'],
    youtubeUrl: 'https://youtube.com/watch?v=tegaldev-database-patterns',
    thumbnail: '/placeholder-video.jpg',
  },
];

function VideoCard({ video }: { video: Video }) {
  return (
    <article className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 cursor-pointer transition-all duration-300 group">
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
          <Youtube className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
            {video.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors line-clamp-2">
          {video.title}
        </h2>

        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {video.description}
        </p>

        <div className="flex items-center justify-between text-gray-400 text-xs mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(video.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <div className="flex items-center">
              <Eye className="h-3 w-3 mr-1" />
              {video.views} views
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-3 w-3 mr-1" />
              {video.likes}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {video.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-red-600/30 text-red-300 text-xs rounded-full cursor-default break-all"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link href={video.youtubeUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2 px-4 py-2">
            <Play className="h-4 w-4" />
            Watch on YouTube
            <ExternalLink className="h-3 w-3" />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all unique categories
  const allCategories = Array.from(
    new Set(videos.map((video) => video.category)),
  );

  // Filter videos by selected category
  const filteredVideos = selectedCategory
    ? videos.filter((video) => video.category === selectedCategory)
    : videos;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <ScrollAnimatedSection animationType="fade-up">
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Video{' '}
            <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Content
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Learn through comprehensive video tutorials, live coding sessions,
            and code reviews. Subscribe to our YouTube channel for the latest
            content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://youtube.com/@tegaldev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 flex items-center justify-center gap-2"
              >
                <Youtube className="h-5 w-5" />
                Subscribe on YouTube
              </Button>
            </Link>
            <Link
              href="https://youtube.com/@tegaldev/playlists"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 hover:bg-white/70 px-6 sm:px-8 py-3 flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                View Playlists
              </Button>
            </Link>
          </div>
        </div>
        </ScrollAnimatedSection>

        {/* Category Filter */}
        <ScrollAnimatedSection animationType="slide-left" delay={200}>
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center px-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-red-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 cursor-pointer'
              }`}
            >
              All Videos
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 cursor-pointer'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        </ScrollAnimatedSection>

        {/* Videos */}
        <ScrollAnimatedSection animationType="fade-up" delay={300}>
        <section className="mb-16">
          <SectionHeader
            title="Latest "
            highlightedWord="Videos"
            subtitle={`${filteredVideos.length} video${
              filteredVideos.length !== 1 ? 's' : ''
            } ${
              selectedCategory
                ? `in "${selectedCategory}"`
                : 'from TegalDev YouTube'
            }`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No videos found for the selected category.
              </p>
            </div>
          )}
        </section>
        </ScrollAnimatedSection>

        {/* Channel Stats */}
        <ScrollAnimatedSection animationType="slide-right" delay={400}>
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">150+</div>
              <div className="text-gray-300">Videos Published</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                25K+
              </div>
              <div className="text-gray-300">Subscribers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500K+</div>
              <div className="text-gray-300">Total Views</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-gray-300">Hours of Content</div>
            </div>
          </div>
        </section>
        </ScrollAnimatedSection>

        {/* Popular Playlists */}
        <ScrollAnimatedSection animationType="fade-up" delay={500}>
        <section className="mb-16">
          <SectionHeader
            title="Popular "
            highlightedWord="Playlists"
            subtitle="Curated learning paths for different skill levels"
          />

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8">
            <Link
              href="https://youtube.com/playlist?list=tegaldev-react-series"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 cursor-pointer transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      React Mastery Series
                    </h3>
                    <p className="text-gray-400 text-sm">
                      25 videos • 15 hours
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Complete React learning path from basics to advanced concepts
                  including hooks, context, and performance optimization.
                </p>
              </div>
            </Link>

            <Link
              href="https://youtube.com/playlist?list=tegaldev-fullstack-series"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 cursor-pointer transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                      Full-Stack Development
                    </h3>
                    <p className="text-gray-400 text-sm">
                      18 videos • 22 hours
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Build complete applications from frontend to backend,
                  including databases, APIs, authentication, and deployment.
                </p>
              </div>
            </Link>
          </div>
        </section>
        </ScrollAnimatedSection>

        {/* Call to Action */}
        <ScrollAnimatedSection animationType="scale-up" delay={600}>
        <section className="text-center py-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Suggest a Video Topic
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Have an idea for a tutorial or topic you&apos;d like us to cover?
              We love hearing from our community and creating content that helps
              you learn.
            </p>
            <Link href="mailto:videos@tegaldev.com?subject=Video Topic Suggestion">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3"
              >
                Suggest a Topic
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
