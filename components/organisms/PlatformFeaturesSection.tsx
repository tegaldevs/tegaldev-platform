'use client';

import {
  BookOpen,
  GitBranch,
  Lightbulb,
  Share2,
  Users2,
  Zap,
} from 'lucide-react';
import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { FeatureCard } from '../molecules/FeatureCard';

const features = [
  {
    icon: BookOpen,
    title: 'Learn',
    description:
      'Expand your knowledge through mentorship, tutorials, and hands-on experience.',
    gradientFrom: 'blue-500',
    gradientTo: 'indigo-500',
  },
  {
    icon: Share2,
    title: 'Share',
    description:
      'Share your knowledge, experiences, and insights with fellow software engineers.',
    gradientFrom: 'green-500',
    gradientTo: 'emerald-500',
  },
  {
    icon: Users2,
    title: 'Connect',
    description:
      'Build meaningful relationships and network with software engineers worldwide.',
    gradientFrom: 'purple-500',
    gradientTo: 'pink-500',
  },
  {
    icon: GitBranch,
    title: 'Collaborate',
    description:
      'Work together on projects and contribute to open-source initiatives.',
    gradientFrom: 'orange-500',
    gradientTo: 'red-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description:
      'Create cutting-edge solutions and push the boundaries of technology.',
    gradientFrom: 'cyan-500',
    gradientTo: 'blue-500',
  },
  {
    icon: Zap,
    title: 'Growth',
    description:
      'Accelerate your personal and professional development through continuous learning and challenges.',
    gradientFrom: 'yellow-500',
    gradientTo: 'orange-500',
  },
];

export default function PlatformFeaturesSection() {
  return (
    <ScrollAnimatedSection
      className="mt-12"
      animationType="fade-up"
      delay={200}
    >
      <SectionHeader
        title="Platform "
        highlightedWord="Features"
        subtitle="Discover what makes Tegal Dev the perfect place for software engineers to grow, connect, and collaborate"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            gradientFrom={feature.gradientFrom}
            gradientTo={feature.gradientTo}
          />
        ))}
      </div>
    </ScrollAnimatedSection>
  );
}
