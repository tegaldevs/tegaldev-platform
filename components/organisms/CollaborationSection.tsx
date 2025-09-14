'use client';

import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { CollaborationButton } from '../molecules/CollaborationButton';

export default function CollaborationSection() {
  return (
    <ScrollAnimatedSection
      id="collaboration"
      className="mt-12"
      animationType="scale-up"
      delay={500}
    >
      <SectionHeader
        title="Start "
        highlightedWord="Collaborating"
        subtitle="Have a project idea or want to collaborate? Let us know and we'll help connect you with the right people."
      />

      <div className="max-w-2xl mx-auto text-center">
        <CollaborationButton />
      </div>
    </ScrollAnimatedSection>
  );
}
