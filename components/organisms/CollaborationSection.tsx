import { Mail } from 'lucide-react';
import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';

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
        <a
          href="mailto:collaboration@tegaldev.com?subject=Collaboration Request&body=Hi TegalDev Team,%0A%0AI would like to collaborate on a project. Here are the details:%0A%0AProject Idea:%0A%0AMy Background:%0A%0AContact Information:%0A%0AThank you!"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Mail className="h-5 w-5" />
          Send Collaboration Request
        </a>
      </div>
    </ScrollAnimatedSection>
  );
}
