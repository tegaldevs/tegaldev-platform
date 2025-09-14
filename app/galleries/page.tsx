'use client';

import { useState } from 'react';
import { Image as ImageIcon, Video, ExternalLink, Eye, Calendar, Filter, Grid, List } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimatedSection } from '@/components/layouts/ScrollAnimatedSection';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/layouts/PageLayout';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  category: string;
  tags: string[];
  createdAt: string;
  author?: string;
  downloadUrl?: string;
  externalUrl?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Community Meetup 2024',
    description: 'Photos from our monthly community meetup featuring tech talks and networking.',
    type: 'image',
    url: '/assets/images/1.jpeg',
    thumbnail: '/assets/images/1.jpeg',
    category: 'Events',
    tags: ['meetup', 'community', 'networking'],
    createdAt: '2024-01-15',
    author: 'Tegal Dev Team',
  },
  {
    id: '2',
    title: 'Workshop Documentation',
    description: 'Visual documentation from our React workshop series.',
    type: 'image',
    url: '/assets/images/2.jpg',
    thumbnail: '/assets/images/2.jpg',
    category: 'Workshops',
    tags: ['workshop', 'react', 'learning'],
    createdAt: '2024-01-12',
    author: 'Workshop Team',
  },
  {
    id: '3',
    title: 'Hackathon Highlights',
    description: 'Capturing the energy and innovation from our latest hackathon event.',
    type: 'image',
    url: '/assets/images/3.jpg',
    thumbnail: '/assets/images/3.jpg',
    category: 'Hackathons',
    tags: ['hackathon', 'innovation', 'coding'],
    createdAt: '2024-01-10',
    author: 'Event Team',
  },
  {
    id: '4',
    title: 'Tech Talk Series',
    description: 'Documentation from our weekly tech talk presentations.',
    type: 'image',
    url: '/assets/images/4.jpg',
    thumbnail: '/assets/images/4.jpg',
    category: 'Tech Talks',
    tags: ['tech-talk', 'presentation', 'knowledge'],
    createdAt: '2024-01-08',
    author: 'Speaker Team',
  },
  {
    id: '5',
    title: 'Community Collaboration',
    description: 'Behind-the-scenes moments of our community working together.',
    type: 'image',
    url: '/assets/images/5.jpg',
    thumbnail: '/assets/images/5.jpg',
    category: 'Community',
    tags: ['collaboration', 'teamwork', 'community'],
    createdAt: '2024-01-05',
    author: 'Community Team',
  },
  {
    id: '6',
    title: 'Project Showcase',
    description: 'Visual highlights from our member project presentations.',
    type: 'image',
    url: '/assets/images/6.jpg',
    thumbnail: '/assets/images/6.jpg',
    category: 'Projects',
    tags: ['projects', 'showcase', 'demo'],
    createdAt: '2024-01-03',
    author: 'Project Team',
  },
  {
    id: '7',
    title: 'Learning Sessions',
    description: 'Documentation from our interactive learning and mentoring sessions.',
    type: 'image',
    url: '/assets/images/7.jpg',
    thumbnail: '/assets/images/7.jpg',
    category: 'Learning',
    tags: ['learning', 'mentoring', 'education'],
    createdAt: '2024-01-01',
    author: 'Education Team',
  },
  {
    id: '8',
    title: 'Community Growth',
    description: 'Celebrating milestones and growth in our developer community.',
    type: 'image',
    url: '/assets/images/8.jpg',
    thumbnail: '/assets/images/8.jpg',
    category: 'Milestones',
    tags: ['growth', 'milestones', 'celebration'],
    createdAt: '2023-12-28',
    author: 'Community Team',
  },
  {
    id: '9',
    title: 'React Hooks Tutorial',
    description: 'Complete video guide covering React Hooks with practical examples.',
    type: 'video',
    url: 'https://youtube.com/watch?v=react-hooks-guide',
    thumbnail: '/placeholder-video-1.jpg',
    category: 'Tutorials',
    tags: ['react', 'hooks', 'tutorial'],
    createdAt: '2024-01-15',
    author: 'Tech Team',
    externalUrl: 'https://youtube.com/watch?v=react-hooks-guide',
  },
  {
    id: '10',
    title: 'Node.js Performance',
    description: 'Advanced techniques for optimizing Node.js applications.',
    type: 'video',
    url: 'https://youtube.com/watch?v=nodejs-optimization',
    thumbnail: '/placeholder-video-2.jpg',
    category: 'Tutorials',
    tags: ['nodejs', 'performance', 'backend'],
    createdAt: '2024-01-12',
    author: 'Backend Team',
    externalUrl: 'https://youtube.com/watch?v=nodejs-optimization',
  },
];

const categories = ['All', 'Events', 'Workshops', 'Hackathons', 'Tech Talks', 'Community', 'Projects', 'Learning', 'Milestones', 'Tutorials'];

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
      <div className="relative aspect-video overflow-hidden">
        {item.type === 'image' ? (
          <Image
            src={item.url}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="relative w-full h-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
            <Video className="h-12 w-12 text-white" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}
        
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm">
            {item.category}
          </span>
        </div>
        
        <div className="absolute top-3 right-3">
          <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm">
            {item.type === 'image' ? (
              <ImageIcon className="h-4 w-4 text-white" />
            ) : (
              <Video className="h-4 w-4 text-white" />
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(item.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
          {item.author && (
            <span>by {item.author}</span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          {item.type === 'image' ? (
            <Link href={item.url} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                <Eye className="h-3 w-3" />
                View
              </Button>
            </Link>
          ) : (
            <Link href={item.externalUrl || item.url} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
                <ExternalLink className="h-3 w-3" />
                Watch
              </Button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function GalleriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);
  
  const imageCount = filteredItems.filter(item => item.type === 'image').length;
  const videoCount = filteredItems.filter(item => item.type === 'video').length;

  return (
    <PageLayout>
      <div className="min-h-screen pt-24 pb-16">
        <ScrollAnimatedSection className="mb-12" animationType="fade-up" delay={200}>
          <SectionHeader
            title="Documentation "
            highlightedWord="Galleries"
            subtitle="Explore our collection of images and videos from events, workshops, and community activities"
          />
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <span>{imageCount} Images</span>
              <span>•</span>
              <span>{videoCount} Videos</span>
              <span>•</span>
              <span>{filteredItems.length} Total Items</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="flex items-center gap-2"
              >
                <Grid className="h-4 w-4" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="flex items-center gap-2"
              >
                <List className="h-4 w-4" />
                List
              </Button>
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <ScrollAnimatedSection className="mb-8" animationType="fade-up" delay={400}>
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Filter by Category:</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimatedSection>
        
        <ScrollAnimatedSection animationType="fade-up" delay={600}>
          {filteredItems.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredItems.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No items found</h3>
              <p className="text-gray-400">Try selecting a different category or check back later.</p>
            </div>
          )}
        </ScrollAnimatedSection>
      </div>
    </PageLayout>
  );
}