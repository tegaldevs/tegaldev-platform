'use client';

import { Video, Calendar, Clock, Eye, ThumbsUp, Play, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { Button } from '../ui/button';

interface VideoContent {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  duration: string;
  views: number;
  likes: number;
  category: string;
  tags: string[];
  youtubeUrl: string;
  thumbnail: string;
}

const featuredVideos: VideoContent[] = [
  {
    id: '1',
    title: 'React Hooks Complete Guide',
    description: 'Master React Hooks with this comprehensive tutorial covering useState, useEffect, and custom hooks.',
    publishedAt: '2024-01-15',
    duration: '28:45',
    views: 15200,
    likes: 892,
    category: 'Tutorial',
    tags: ['React', 'JavaScript', 'Frontend'],
    youtubeUrl: 'https://youtube.com/watch?v=react-hooks-guide',
    thumbnail: '/placeholder-video-1.jpg',
  },
  {
    id: '2',
    title: 'Node.js Performance Optimization',
    description: 'Learn advanced techniques to optimize your Node.js applications for better performance and scalability.',
    publishedAt: '2024-01-12',
    duration: '35:20',
    views: 8900,
    likes: 567,
    category: 'Advanced',
    tags: ['Node.js', 'Performance', 'Backend'],
    youtubeUrl: 'https://youtube.com/watch?v=nodejs-optimization',
    thumbnail: '/placeholder-video-2.jpg',
  },
  {
    id: '3',
    title: 'Building REST APIs with Express',
    description: 'Step-by-step guide to creating robust REST APIs using Express.js and best practices.',
    publishedAt: '2024-01-10',
    duration: '42:15',
    views: 12400,
    likes: 734,
    category: 'Tutorial',
    tags: ['Express', 'API', 'Backend'],
    youtubeUrl: 'https://youtube.com/watch?v=express-rest-api',
    thumbnail: '/placeholder-video-3.jpg',
  },
];

function VideoCard({ video }: { video: VideoContent }) {
  return (
    <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-red-600/30 text-red-300 text-xs rounded-full">
            {video.category}
          </span>
          <div className="flex items-center text-gray-400 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {video.duration}
          </div>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Video className="h-5 w-5 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors line-clamp-2">
        {video.title}
      </h3>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
        {video.description}
      </p>

      <div className="flex items-center space-x-4 text-gray-400 text-xs mb-4">
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
          {video.views.toLocaleString()}
        </div>
        <div className="flex items-center">
          <ThumbsUp className="h-3 w-3 mr-1" />
          {video.likes.toLocaleString()}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {video.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-red-600/30 text-red-300 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          href={video.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2">
            <Play className="h-4 w-4" />
            Watch on YouTube
            <ExternalLink className="h-3 w-3" />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default function VideosSection() {
  return (
    <ScrollAnimatedSection
      className="mt-12"
      animationType="fade-up"
      delay={700}
    >
      <SectionHeader
        title="Latest "
        highlightedWord="Videos"
        subtitle="Watch comprehensive tutorials and learn from expert developers in our community"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/videos">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-3"
          >
            View All Videos
          </Button>
        </Link>
      </div>
    </ScrollAnimatedSection>
  );
}