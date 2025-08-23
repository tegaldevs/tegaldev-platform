import { Calendar, ExternalLink, Mic, Users2, Wrench } from 'lucide-react';
import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';

export default function CommunityGallerySection() {
  return (
    <ScrollAnimatedSection
      className="mt-12"
      animationType="fade-up"
      delay={400}
    >
      <SectionHeader
        title="Community "
        highlightedWord="Gallery"
        subtitle="Browse our photo collections from events, workshops, and community gatherings"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href="https://drive.google.com/drive/folders/meetups"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-blue-300 transition-colors">
            Meetups
          </h3>
          <p className="text-gray-300 text-sm text-center mb-3 flex-grow">
            Community gatherings, networking events, and tech meetups
          </p>
          <div className="flex items-center justify-center text-blue-400 text-sm font-medium mt-auto">
            <ExternalLink className="h-4 w-4 mr-1" />
            View Photos
          </div>
        </a>

        <a
          href="https://drive.google.com/drive/folders/workshops"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
            <Wrench className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-green-300 transition-colors">
            Workshops
          </h3>
          <p className="text-gray-300 text-sm text-center mb-3 flex-grow">
            Hands-on learning sessions and technical workshops
          </p>
          <div className="flex items-center justify-center text-green-400 text-sm font-medium mt-auto">
            <ExternalLink className="h-4 w-4 mr-1" />
            View Photos
          </div>
        </a>

        <a
          href="https://drive.google.com/drive/folders/techtalks"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
            <Mic className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-orange-300 transition-colors">
            Tech Talks
          </h3>
          <p className="text-gray-300 text-sm text-center mb-3 flex-grow">
            Expert presentations and knowledge sharing sessions
          </p>
          <div className="flex items-center justify-center text-orange-400 text-sm font-medium mt-auto">
            <ExternalLink className="h-4 w-4 mr-1" />
            View Photos
          </div>
        </a>

        <a
          href="https://drive.google.com/drive/folders/collaborations"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col h-full"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
            <Users2 className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-purple-300 transition-colors">
            Sharing Sessions
          </h3>
          <p className="text-gray-300 text-sm text-center mb-3 flex-grow">
            Sharing sessions on topics like project management, and knowledge
            exchange.
          </p>
          <div className="flex items-center justify-center text-purple-400 text-sm font-medium mt-auto">
            <ExternalLink className="h-4 w-4 mr-1" />
            View Photos
          </div>
        </a>
      </div>
    </ScrollAnimatedSection>
  );
}
