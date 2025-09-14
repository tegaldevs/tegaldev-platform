'use client';

import { BookOpen, Calendar, Eye, Heart, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { Button } from '../ui/button';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  views: number;
  likes: number;
  tags: string[];
  url: string;
}

const featuredBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    description: 'Learn best practices for structuring React applications that can grow with your team and requirements.',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    views: 2500,
    likes: 89,
    tags: ['React', 'JavaScript', 'Architecture'],
    url: '/blogs/scalable-react-applications',
  },
  {
    id: '2',
    title: 'Modern CSS Techniques for 2024',
    description: 'Explore the latest CSS features and techniques that will make your web development more efficient.',
    publishedAt: '2024-01-12',
    readTime: '6 min read',
    views: 1800,
    likes: 67,
    tags: ['CSS', 'Frontend', 'Web Design'],
    url: '/blogs/modern-css-techniques',
  },
  {
    id: '3',
    title: 'TypeScript Best Practices',
    description: 'Master TypeScript with these essential patterns and practices for better code quality.',
    publishedAt: '2024-01-10',
    readTime: '10 min read',
    views: 3200,
    likes: 124,
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    url: '/blogs/typescript-best-practices',
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Calendar className="h-4 w-4" />
          <span>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <BookOpen className="h-5 w-5 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
        {post.title}
      </h3>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center space-x-4 text-gray-400 text-sm">
          <div className="flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>{post.views.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="h-4 w-4" />
            <span>{post.likes}</span>
          </div>
        </div>
        <Link href={post.url}>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            Read More
            <ExternalLink className="h-3 w-3" />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default function BlogsSection() {
  return (
    <ScrollAnimatedSection
      className="mt-12"
      animationType="fade-up"
      delay={500}
    >
      <SectionHeader
        title="Latest "
        highlightedWord="Blogs"
        subtitle="Discover insightful articles and tutorials from our community of developers"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredBlogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/blogs">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
          >
            View All Articles
          </Button>
        </Link>
      </div>
    </ScrollAnimatedSection>
  );
}