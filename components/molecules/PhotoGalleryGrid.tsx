import {
  Calendar,
  GitBranch,
  MessageSquare,
  Mic,
  Users,
  Users2,
  Wrench,
} from 'lucide-react';
import { PhotoGalleryCard } from './PhotoGalleryCard';

const galleryItems = [
  {
    icon: Users,
    title: 'Tech Meetup',
    gradientFrom: 'from-blue-500/20',
    gradientTo: 'to-purple-500/20',
    imageUrl: '/assets/images/1.jpeg',
    size: 'large' as const,
  },
  {
    icon: Wrench,
    title: 'Workshop',
    gradientFrom: 'from-green-500/20',
    gradientTo: 'to-emerald-500/20',
    imageUrl: '/assets/images/3.jpg',
    size: 'small' as const,
  },
  {
    icon: Mic,
    title: 'Tech Talk',
    gradientFrom: 'from-orange-500/20',
    gradientTo: 'to-red-500/20',
    imageUrl: '/assets/images/4.jpg',
    size: 'small' as const,
  },
  {
    icon: Calendar,
    title: 'Meetup',
    gradientFrom: 'from-purple-500/20',
    gradientTo: 'to-pink-500/20',
    imageUrl: '/assets/images/5.jpg',
    size: 'small' as const,
  },
  {
    icon: MessageSquare,
    title: 'Discussion',
    gradientFrom: 'from-cyan-500/20',
    gradientTo: 'to-blue-500/20',
    imageUrl: '/assets/images/6.jpg',
    size: 'small' as const,
  },
  {
    icon: Users2,
    title: 'Community Collaboration',
    subtitle: 'Project Space Session',
    gradientFrom: 'from-yellow-500/20',
    gradientTo: 'to-orange-500/20',
    imageUrl: '/assets/images/2.jpg',
    size: 'wide' as const,
  },
  {
    icon: GitBranch,
    title: 'Coding',
    gradientFrom: 'from-indigo-500/20',
    gradientTo: 'to-purple-500/20',
    imageUrl: '/assets/images/7.jpg',
    size: 'small' as const,
  },
  {
    icon: Users,
    title: 'Networking',
    gradientFrom: 'from-pink-500/20',
    gradientTo: 'to-rose-500/20',
    imageUrl: '/assets/images/8.jpg',
    size: 'small' as const,
  },
];

export function PhotoGalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-4">
      {galleryItems.map((item, index) => (
        <PhotoGalleryCard
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          gradientFrom={item.gradientFrom}
          gradientTo={item.gradientTo}
          imageUrl={item.imageUrl}
          size={item.size}
        />
      ))}
    </div>
  );
}
