import {
  BookOpen,
  Briefcase,
  Calendar,
  Github,
  Image,
  Mic,
  ShoppingBag,
  Trophy,
  Youtube,
} from 'lucide-react';
import { NavigationItem } from '@/components/molecules/types/NavigationItem';

export const activitiesLinks: NavigationItem[] = [
  {
    href: '/events',
    label: 'Events',
    icon: Calendar,
    description: 'Workshops, meetups & conferences',
  },
  {
    href: '/challenges',
    label: 'Challenges',
    icon: Trophy,
    description: 'Coding competitions & hackathons',
  },
  {
    href: '/jobs',
    label: 'Jobs',
    icon: Briefcase,
    description: 'Career opportunities & positions',
  },
  {
    href: '/open-source',
    label: 'Open Source',
    icon: Github,
    description: 'Community-driven projects & contributions',
  },
];

export const contentLinks: NavigationItem[] = [
  {
    href: '/blogs',
    label: 'Blogs',
    icon: BookOpen,
    description: 'Articles & tutorials',
  },
  {
    href: '/podcasts',
    label: 'Podcasts',
    icon: Mic,
    description: 'Audio conversations',
  },
  {
    href: '/videos',
    label: 'Videos',
    icon: Youtube,
    description: 'Video tutorials & content',
  },
  {
    href: '/galleries',
    label: 'Galleries',
    icon: Image,
    description: 'Documentation images & videos',
  },
];

export const shopLinks: NavigationItem[] = [
  {
    href: '/merchandise',
    label: 'Store',
    icon: ShoppingBag,
    description: 'Merchandise & gear',
  },
];
