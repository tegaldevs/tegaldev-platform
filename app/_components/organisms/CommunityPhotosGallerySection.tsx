import {
  Calendar,
  GitBranch,
  MessageSquare,
  Mic,
  Users,
  Users2,
  Wrench,
} from 'lucide-react';
import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';

export default function CommunityPhotosGallerySection() {
  return (
    <ScrollAnimatedSection
      className="mt-12 max-w-6xl mx-auto"
      animationType="fade-up"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Our{' '}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Community
          </span>{' '}
          in Action
        </h2>
        <p className="text-gray-300 text-lg">
          Capturing moments from our events, workshops, and community gatherings
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-4">
        {/* Large featured photo */}
        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
          <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
            <div className="text-center text-white/60">
              <Users className="h-12 w-12 mx-auto mb-2" />
              <p className="text-sm font-medium">Tech Meetup 2024</p>
              <p className="text-xs opacity-75">Jakarta Community Event</p>
            </div>
          </div>
        </div>

        {/* Smaller photos */}
        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
            <div className="text-center text-white/60">
              <Wrench className="h-8 w-8 mx-auto mb-1" />
              <p className="text-xs font-medium">Workshop</p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
            <div className="text-center text-white/60">
              <Mic className="h-8 w-8 mx-auto mb-1" />
              <p className="text-xs font-medium">Tech Talk</p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
            <div className="text-center text-white/60">
              <Calendar className="h-8 w-8 mx-auto mb-1" />
              <p className="text-xs font-medium">Meetup</p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
            <div className="text-center text-white/60">
              <MessageSquare className="h-8 w-8 mx-auto mb-1" />
              <p className="text-xs font-medium">Discussion</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 relative group overflow-hidden rounded-lg">
          <div className="aspect-[2/1] bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
            <div className="text-center text-white/60">
              <Users2 className="h-10 w-10 mx-auto mb-2" />
              <p className="text-sm font-medium">Community Collaboration</p>
              <p className="text-xs opacity-75">Project Space Session</p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
            <div className="text-center text-white/60">
              <GitBranch className="h-8 w-8 mx-auto mb-1" />
              <p className="text-xs font-medium">Coding</p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
            <div className="text-center text-white/60">
              <Users className="h-8 w-8 mx-auto mb-1" />
              <p className="text-xs font-medium">Networking</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
