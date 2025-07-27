'use client';

export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';
import { AuthNavigation } from '@/app/_components/auth/AuthNavigation';
import { Button } from '@/app/_components/ui/button';
import { Footer } from '@/app/_components/ui/Footer';
import { ActivityCard } from '@/app/_components/ui/ActivityCard';
import { StatCard } from '@/app/_components/ui/StatCard';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { useState, useEffect } from 'react';
import {
  Users,
  Zap,
  Calendar,
  MessageSquare,
  Wrench,
  Mic,
  BookOpen,
  Share2,
  Users2,
  GitBranch,
  Lightbulb,
  ExternalLink,
  Mail,
  HandHeart,
} from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      {/* Fixed Navigation */}
      <nav
        className={`max-w-5xl mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/20 backdrop-blur-md mx-4 mt-4 rounded-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/Tegal.dev-AAA.png"
                  alt="TegalDev Logo"
                  width={96}
                  height={96}
                  className="transition-all duration-300 cursor-pointer"
                />
              </Link>
            </div>
            <AuthNavigation />
          </div>
        </div>
      </nav>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center py-12 text-center">
          <div className="max-w-5xl space-y-6">
            <div className="space-y-8">
              <div className="flex flex-col items-center space-y-6">
                <Image
                  src="/Tegal.dev-AAA.png"
                  alt="TegalDev Logo"
                  width={240}
                  height={240}
                  className="transition-all duration-300"
                />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The curated software engineer community based in Tegal, Central
                Java, Indonesia.{' '}
                <span className="text-white font-medium">Tegal Dev</span> is
                collaborating with various other tech communities. We aim to
                improve the educational activities.
              </p>
              <div className="mt-6">
                <span className="inline-block bg-gray-800/50 text-blue-300 px-4 py-2 rounded-full text-sm font-mono">
                  #TegalDev
                </span>
                <span className="inline-block bg-gray-800/50 text-blue-300 px-4 py-2 rounded-full text-sm font-mono">
                  #JakwirDeveloper
                </span>
                <span className="inline-block bg-gray-800/50 text-blue-300 px-4 py-2 rounded-full text-sm font-mono">
                  #OraNgodingOraKepenak
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg flex items-center gap-2 w-56"
                >
                  <Users className="h-5 w-5" />
                  Join Community
                </Button>
              </Link>
              <Link
                href="https://linktr.ee/tegaldev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-gray-300 dark:border-gray-600 flex items-center gap-2 w-56 hover:bg-white/70"
                >
                  <ExternalLink className="h-5 w-5" />
                  Connect Community
                </Button>
              </Link>
            </div>

            {/* Additional Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <Link href="#collaboration">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-gray-300 dark:border-gray-600 flex items-center gap-2 w-56 hover:bg-white/70"
                >
                  <BookOpen className="h-5 w-5" />
                  Collaboration
                </Button>
              </Link>
              <Link
                href="https://saweria.co/tegaldev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-orange-600 text-orange-600 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 flex items-center gap-2 w-56"
                >
                  <HandHeart className="h-5 w-5" />
                  Support Us
                </Button>
              </Link>
            </div>

            {/* Community Photos Gallery */}
            <div className="mt-12 max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Our{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Community
                  </span>{' '}
                  in Action
                </h2>
                <p className="text-gray-300 text-lg">
                  Capturing moments from our events, workshops, and community
                  gatherings
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-4">
                {/* Large featured photo */}
                <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                    <div className="text-center text-white/60">
                      <Users className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">Tech Meetup 2024</p>
                      <p className="text-xs opacity-75">
                        Jakarta Community Event
                      </p>
                    </div>
                  </div>
                </div>

                {/* Smaller photos */}
                <div className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                    <div className="text-center text-white/60">
                      <Wrench className="h-8 w-8 mx-auto mb-1" />
                      <p className="text-xs font-medium">Workshop</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                    <div className="text-center text-white/60">
                      <Mic className="h-8 w-8 mx-auto mb-1" />
                      <p className="text-xs font-medium">Tech Talk</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                    <div className="text-center text-white/60">
                      <Calendar className="h-8 w-8 mx-auto mb-1" />
                      <p className="text-xs font-medium">Meetup</p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                    <div className="text-center text-white/60">
                      <MessageSquare className="h-8 w-8 mx-auto mb-1" />
                      <p className="text-xs font-medium">Discussion</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 relative group overflow-hidden rounded-lg">
                  <div className="aspect-[2/1] bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                    <div className="text-center text-white/60">
                      <Users2 className="h-10 w-10 mx-auto mb-2" />
                      <p className="text-sm font-medium">
                        Community Collaboration
                      </p>
                      <p className="text-xs opacity-75">
                        Project Space Session
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300">
                    <div className="text-center text-white/60">
                      <GitBranch className="h-8 w-8 mx-auto mb-1" />
                      <p className="text-xs font-medium">Coding</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Features Section */}
            <div className="mt-12">
              <SectionHeader
                title="Platform "
                highlightedWord="Features"
                subtitle="Discover what makes TegalDev the perfect place for software engineers to grow, connect, and collaborate"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto slide-in">
                <div className="bg-white/10 backdrop-blur-sm rounded-md p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2.5 rounded-md w-fit mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    Learn
                  </h3>
                  <p className="text-gray-200 text-sm text-center">
                    Expand your knowledge through mentorship, tutorials, and
                    hands-on experience.
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
                    Share your knowledge, experiences, and insights with fellow
                    software engineers.
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
                    Build meaningful relationships and network with software
                    engineers worldwide.
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
                    Work together on projects and contribute to open-source
                    initiatives.
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
                    Create cutting-edge solutions and push the boundaries of
                    technology.
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
                    Accelerate your personal and professional development
                    through continuous learning and challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div id="activities" className="mt-12">
              <SectionHeader
                title="Community "
                highlightedWord="Activities"
                subtitle="Join our regular events and activities to connect, learn, and grow with fellow software engineers"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 slide-in">
                <ActivityCard
                  icon={Calendar}
                  title="Meetups"
                  description="Regular in-person and virtual gatherings to network and share experiences with the community."
                  gradientFrom="blue-500"
                  gradientTo="cyan-500"
                />

                <ActivityCard
                  icon={MessageSquare}
                  title="Sharing Sessions"
                  description="Interactive sessions where members share knowledge, experiences, and best practices."
                  gradientFrom="green-500"
                  gradientTo="emerald-500"
                />

                <ActivityCard
                  icon={Wrench}
                  title="Workshops"
                  description="Hands-on learning sessions covering various technologies and development practices."
                  gradientFrom="orange-500"
                  gradientTo="red-500"
                />

                <ActivityCard
                  icon={Mic}
                  title="Tech Talks"
                  description="Expert presentations on cutting-edge technologies and industry trends."
                  gradientFrom="purple-500"
                  gradientTo="pink-500"
                />
              </div>
            </div>

            {/* Community Gallery */}
            <div className="mt-12">
              <SectionHeader
                title="Community "
                highlightedWord="Gallery"
                subtitle="Browse our photo collections from events, workshops, and community gatherings"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 slide-in">
                {/* Meetups & Events */}
                <a
                  href="https://drive.google.com/drive/folders/meetups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-blue-300 transition-colors">
                    Meetups
                  </h3>
                  <p className="text-gray-300 text-sm text-center mb-3">
                    Community gatherings, networking events, and tech meetups
                  </p>
                  <div className="flex items-center justify-center text-blue-400 text-sm font-medium">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Photos
                  </div>
                </a>

                {/* Workshops */}
                <a
                  href="https://drive.google.com/drive/folders/workshops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-green-300 transition-colors">
                    Workshops
                  </h3>
                  <p className="text-gray-300 text-sm text-center mb-3">
                    Hands-on learning sessions and technical workshops
                  </p>
                  <div className="flex items-center justify-center text-green-400 text-sm font-medium">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Photos
                  </div>
                </a>

                {/* Tech Talks */}
                <a
                  href="https://drive.google.com/drive/folders/techtalks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Mic className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-orange-300 transition-colors">
                    Tech Talks
                  </h3>
                  <p className="text-gray-300 text-sm text-center mb-3">
                    Expert presentations and knowledge sharing sessions
                  </p>
                  <div className="flex items-center justify-center text-orange-400 text-sm font-medium">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Photos
                  </div>
                </a>

                {/* Collaborations */}
                <a
                  href="https://drive.google.com/drive/folders/collaborations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg w-fit mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <Users2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-purple-300 transition-colors">
                    Sharing Sessions
                  </h3>
                  <p className="text-gray-300 text-sm text-center mb-3">
                    Sharing sessions on topics like project management, and
                    knowledge exchange.
                  </p>
                  <div className="flex items-center justify-center text-purple-400 text-sm font-medium">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Photos
                  </div>
                </a>
              </div>
            </div>

            {/* Collaboration Section */}
            <div id="collaboration" className="mt-12">
              <SectionHeader
                title="Start "
                highlightedWord="Collaborating"
                subtitle="Have a project idea or want to collaborate? Let us know and we'll help connect you with the right people."
              />

              <div className="max-w-2xl mx-auto text-center slide-in">
                <a
                  href="mailto:collaboration@tegaldev.com?subject=Collaboration Request&body=Hi TegalDev Team,%0A%0AI would like to collaborate on a project. Here are the details:%0A%0AProject Idea:%0A%0AMy Background:%0A%0AContact Information:%0A%0AThank you!"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="h-5 w-5" />
                  Send Collaboration Request
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-6 border-t border-white/20">
              <StatCard value="500+" label="Members" />
              <StatCard value="5+" label="Projects" />
              <StatCard value="50+" label="Events" />
              <StatCard value="7+" label="Collaborations" />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
