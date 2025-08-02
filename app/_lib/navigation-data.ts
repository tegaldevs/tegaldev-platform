import {
  BookOpen,
  Briefcase,
  Calendar,
  Mic,
  Trophy,
  Youtube,
} from 'lucide-react';
import { NavigationItem } from '../_components/molecules/types/NavigationItem';

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
];
