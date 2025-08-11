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
        <div className="bg-white/10 backdrop-blur-sm rounded-md p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2.5 rounded-md w-fit mx-auto mb-3">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center">
            Learn
          </h3>
          <p className="text-gray-200 text-sm text-center">
            Expand your knowledge through mentorship, tutorials, and hands-on
            experience.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-md p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2.5 rounded-md w-fit mx-auto mb-3">
            <Share2 className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center">
            Share
          </h3>
          <p className="text-gray-200 text-sm text-center">
            Share your knowledge, experiences, and insights with fellow software
            engineers.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-md p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2.5 rounded-md w-fit mx-auto mb-3">
            <Users2 className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center">
            Connect
          </h3>
          <p className="text-gray-200 text-sm text-center">
            Build meaningful relationships and network with software engineers
            worldwide.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-md p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2.5 rounded-md w-fit mx-auto mb-3">
            <GitBranch className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center">
            Collaborate
          </h3>
          <p className="text-gray-200 text-sm text-center">
            Work together on projects and contribute to open-source initiatives.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-md p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2.5 rounded-md w-fit mx-auto mb-3">
            <Lightbulb className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center">
            Innovate
          </h3>
          <p className="text-gray-200 text-sm text-center">
            Create cutting-edge solutions and push the boundaries of technology.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-md p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2.5 rounded-md w-fit mx-auto mb-3">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center">
            Growth
          </h3>
          <p className="text-gray-200 text-sm text-center">
            Accelerate your personal and professional development through
            continuous learning and challenges.
          </p>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
