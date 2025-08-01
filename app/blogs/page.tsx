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
  User,
  ExternalLink,
  BookOpen,
  Clock,
  Book,
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  mediumUrl: string;
  thumbnail: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications: Best Practices and Patterns',
    excerpt:
      "Learn how to structure your React applications for scalability, maintainability, and performance. We'll cover component architecture, state management, and optimization techniques.",
    author: 'Ahmad Rizki',
    publishedAt: '2024-01-20',
    readTime: '8 min read',
    tags: ['React', 'JavaScript', 'Frontend', 'Architecture'],
    mediumUrl:
      'https://medium.com/@tegaldev/building-scalable-react-applications',
    thumbnail: '/placeholder-blog.jpg',
  },
  {
    id: '2',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt:
      'Explore the emerging trends and technologies that are shaping the future of web development. From AI integration to new frameworks and tools.',
    author: 'Sari Dewi',
    publishedAt: '2024-01-15',
    readTime: '6 min read',
    tags: ['Web Development', 'Trends', 'AI', 'Technology'],
    mediumUrl: 'https://medium.com/@tegaldev/future-of-web-development-2024',
    thumbnail: '/placeholder-blog.jpg',
  },
  {
    id: '3',
    title: 'Mastering Node.js: From Beginner to Advanced',
    excerpt:
      'A comprehensive guide to Node.js development, covering everything from basic concepts to advanced patterns and best practices for building robust backend applications.',
    author: 'Budi Santoso',
    publishedAt: '2024-01-10',
    readTime: '12 min read',
    tags: ['Node.js', 'Backend', 'JavaScript', 'API'],
    mediumUrl: 'https://medium.com/@tegaldev/mastering-nodejs-guide',
    thumbnail: '/placeholder-blog.jpg',
  },
  {
    id: '4',
    title: 'Database Design Principles for Modern Applications',
    excerpt:
      "Understanding database design principles and how to choose the right database for your application. We'll cover SQL vs NoSQL, normalization, and performance optimization.",
    author: 'Rina Kusuma',
    publishedAt: '2024-01-05',
    readTime: '10 min read',
    tags: ['Database', 'SQL', 'NoSQL', 'Design'],
    mediumUrl: 'https://medium.com/@tegaldev/database-design-principles',
    thumbnail: '/placeholder-blog.jpg',
  },
  {
    id: '5',
    title: 'DevOps Best Practices: CI/CD Pipeline Implementation',
    excerpt:
      "Learn how to implement effective CI/CD pipelines for your projects. We'll cover tools, strategies, and best practices for automated testing and deployment.",
    author: 'Doni Pratama',
    publishedAt: '2023-12-28',
    readTime: '9 min read',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Deployment'],
    mediumUrl: 'https://medium.com/@tegaldev/devops-cicd-best-practices',
    thumbnail: '/placeholder-blog.jpg',
  },
  {
    id: '6',
    title: 'Mobile App Development with React Native: A Complete Guide',
    excerpt:
      'Dive into React Native development and learn how to build cross-platform mobile applications. From setup to deployment, we cover everything you need to know.',
    author: 'Lisa Maharani',
    publishedAt: '2023-12-20',
    readTime: '11 min read',
    tags: ['React Native', 'Mobile', 'Cross-platform', 'JavaScript'],
    mediumUrl: 'https://medium.com/@tegaldev/react-native-complete-guide',
    thumbnail: '/placeholder-blog.jpg',
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-300 group flex flex-col h-full">
      <div className="mb-4">
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded-full cursor-default break-all"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
          {post.title}
        </h2>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between text-gray-400 text-xs mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Link href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Read on Medium
            <ExternalLink className="h-3 w-3" />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default function BlogsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <ScrollAnimatedSection animationType="fade-up">
          <div className="text-center py-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, tutorials, and thoughts from the TegalDev community.
              Read our latest articles on Medium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://medium.com/@tegaldev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 flex items-center gap-2 mx-auto w-full"
                >
                  <ExternalLink className="h-5 w-5" />
                  Follow us on Medium
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
                  <Book className="h-5 w-5" />
                  View Articles
                </Button>
              </Link>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Tag Filter */}
        <ScrollAnimatedSection animationType="fade-up" delay={200}>
          <section className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center px-4">
              <Button
                onClick={() => setSelectedTag(null)}
                variant={selectedTag === null ? 'default' : 'outline'}
                size="sm"
                className={`rounded-full text-xs sm:text-sm ${
                  selectedTag === null
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300'
                }`}
              >
                All Posts
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  size="sm"
                  className={`rounded-full text-xs sm:text-sm ${
                    selectedTag === tag
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300'
                  }`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </section>
        </ScrollAnimatedSection>

        {/* Blog Posts */}
        <ScrollAnimatedSection animationType="fade-up" delay={300}>
          <section className="mb-16">
            <SectionHeader
              title="Latest "
              highlightedWord="Articles"
              subtitle={`${filteredPosts.length} article${
                filteredPosts.length !== 1 ? 's' : ''
              } ${
                selectedTag
                  ? `tagged with "${selectedTag}"`
                  : 'from our Medium publication'
              }`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No articles found for the selected tag.
                </p>
              </div>
            )}
          </section>
        </ScrollAnimatedSection>

        {/* Call to Action */}
        <ScrollAnimatedSection animationType="scale-up" delay={400}>
          <section className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to Write for Us?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Share your knowledge and experience with the TegalDev community.
                We&apos;re always looking for quality content from passionate
                developers.
              </p>
              <Link href="mailto:blog@tegaldev.com?subject=Article Submission">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
                >
                  Submit an Article
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
