'use client';

import { Calendar, MessageSquare, Mic, Wrench } from 'lucide-react';
import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { ActivityCard } from '../molecules/ActivityCard';
import { SectionHeader } from '../molecules/SectionHeader';

export default function ActivitiesSection() {
  return (
    <ScrollAnimatedSection
      id="activities"
      className="mt-12"
      animationType="fade-up"
      delay={300}
    >
      <SectionHeader
        title="Community "
        highlightedWord="Activities"
        subtitle="Join our regular events and activities to connect, learn, and grow with fellow software engineers"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ActivityCard
          icon={Calendar}
          title="Meetups"
          description="Regular in-person and virtual gatherings to network and share experiences with the community."
        />

        <ActivityCard
          icon={MessageSquare}
          title="Sharing Sessions"
          description="Interactive sessions where members share knowledge, experiences, and best practices."
        />

        <ActivityCard
          icon={Wrench}
          title="Workshops"
          description="Hands-on learning sessions covering various technologies and development practices."
        />

        <ActivityCard
          icon={Mic}
          title="Tech Talks"
          description="Expert presentations on cutting-edge technologies and industry trends."
        />
      </div>
    </ScrollAnimatedSection>
  );
}
