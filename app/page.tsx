'use client';

export const dynamic = 'force-dynamic';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/app/_components/ui/Navbar';
import { Button } from '@/app/_components/ui/button';
import { Footer } from '@/app/_components/ui/Footer';
import { ActivityCard } from '@/app/_components/ui/ActivityCard';
import { StatCard } from '@/app/_components/ui/StatCard';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { ScrollAnimatedSection } from '@/app/_components/ui/ScrollAnimatedSection';
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
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { LoadingButton } from '@/app/_components/ui/LoadingButton';
import { Accordion, AccordionItem } from '@/app/_components/ui/accordion';

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const timeoutNavbar = setTimeout(() => setNavbarVisible(true), 50);
    const timeoutHero = setTimeout(() => setHeroVisible(true), 100);
    return () => {
      clearTimeout(timeoutNavbar);
      clearTimeout(timeoutHero);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      {/* Navbar with home page animation */}
      <div
        className={
          'transition-all duration-1000 ease-out ' +
          (navbarVisible ? 'opacity-100' : 'opacity-0')
        }
      >
        <Navbar />
      </div>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center py-16 text-center relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
          </div>

          {/* Animated Hero Content */}
          <div
            className={
              `max-w-6xl space-y-10 relative z-10 transition-all duration-1000 ease-out ` +
              (heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8')
            }
          >
            <div className="space-y-12">
              {/* Logo Section with enhanced presentation */}
              <div className="flex flex-col items-center space-y-8">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <Image
                    src="/Tegal.dev-AAA.png"
                    alt="Tegaldev Logo"
                    width={280}
                    height={280}
                    className="relative transition-all duration-500 hover:scale-105 drop-shadow-2xl"
                  />
                </div>

                {/* Enhanced title */}
                <div className="space-y-4">
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>
              </div>

              {/* Enhanced description */}
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The curated software engineer community based in{' '}
                <span className="text-blue-300 font-medium">
                  Tegal, Central Java, Indonesia.{' '}
                </span>
                <span className="text-white font-semibold">Tegal Dev</span> is
                collaborating with various tech communities worldwide.{' '}
                <span className="text-purple-300">
                  We aim to improve educational activities
                </span>{' '}
                and <span className="text-purple-300">
                foster innovation in technology.
                </span>
              </p>

              {/* Enhanced Hero Input Section */}
              <form className="mt-12 max-w-lg mx-auto flex flex-col gap-2 items-center" onSubmit={e => e.preventDefault()}>
                <div className="w-full flex flex-col gap-2">
                  <Label htmlFor="hero-email" className="sr-only">Email address</Label>
                  <Input
                    id="hero-email"
                    type="email"
                    placeholder="Enter your email to subscribe"
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                    required
                  />
                </div>
                <LoadingButton
                  isLoading={false}
                  loadingText="Subscribing..."
                  type="submit"
                  className="w-full h-12 mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 rounded-xl text-lg font-semibold"
                  icon={Mail}
                >
                  Subscribe
                </LoadingButton>
                <p className="text-gray-300 text-sm mt-4 text-center leading-relaxed">
                  🚀 Stay updated with the latest tech events, workshops, and opportunities
                </p>
              </form>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mt-16">
              <Link href="/auth/register" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold flex items-center gap-3 w-full sm:w-64 h-16 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="h-6 w-6" />
                  Join Community
                </Button>
              </Link>
              <Link
                href="https://linktr.ee/tegaldev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-4 text-lg font-semibold border-2 border-white/30 hover:border-white/50 hover:bg-white/70 flex items-center gap-3 w-full sm:w-64 h-16 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="h-6 w-6" />
                  Connect Community
                </Button>
              </Link>
              <Link
                href="https://saweria.co/tegaldev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-10 py-4 text-lg font-semibold border-2 border-orange-400/50 text-orange-300 hover:text-orange-300 hover:border-orange-400 hover:bg-orange-100 flex items-center gap-3 w-full sm:w-64 h-16 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  <HandHeart className="h-6 w-6" />
                  Support Community
                </Button>
              </Link>
            </div>

            {/* Community Photos Gallery */}
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
                  Capturing moments from our events, workshops, and community
                  gatherings
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-4">
                {/* Large featured photo */}
                <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default">
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

            {/* Platform Features Section */}
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
            </ScrollAnimatedSection>

            {/* Activities Section */}
            <ScrollAnimatedSection
              id="activities"
              className="mt-12"
              animationType="slide-left"
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
            </ScrollAnimatedSection>

            {/* Community Gallery */}
            <ScrollAnimatedSection
              className="mt-12"
              animationType="slide-right"
              delay={400}
            >
              <SectionHeader
                title="Community "
                highlightedWord="Gallery"
                subtitle="Browse our photo collections from events, workshops, and community gatherings"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Meetups & Events */}
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

                {/* Workshops */}
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

                {/* Tech Talks */}
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

                {/* Collaborations */}
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
                    Sharing sessions on topics like project management, and
                    knowledge exchange.
                  </p>
                  <div className="flex items-center justify-center text-purple-400 text-sm font-medium mt-auto">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Photos
                  </div>
                </a>
              </div>
            </ScrollAnimatedSection>

            {/* Collaboration Section */}
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

            {/* Stats */}
            <ScrollAnimatedSection
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-6 border-t border-white/20"
              animationType="fade-up"
              delay={600}
            >
              <StatCard value="500+" label="Members" />
              <StatCard value="5+" label="Projects" />
              <StatCard value="50+" label="Events" />
              <StatCard value="7+" label="Collaborations" />
            </ScrollAnimatedSection>

            {/* FAQ Section */}
            <ScrollAnimatedSection
              id="faq"
              className="mt-12"
              animationType="fade-up"
              delay={700}
            >
              <SectionHeader
                title="Frequently Asked "
                highlightedWord="Questions"
                subtitle="Find answers to common questions about Tegal Dev community and platform"
              />

              <div className="max-w-4xl mx-auto mt-8">
                <Accordion>
                  <AccordionItem title="What is Tegal Dev and how can I join?">
                    <p>
                      Tegal Dev is a curated software engineer community based in Tegal, Central Java, Indonesia. 
                      We focus on improving educational activities and fostering innovation in technology. 
                      To join, simply register on our platform and start participating in our events, workshops, 
                      and community activities. We welcome developers of all skill levels!
                    </p>
                  </AccordionItem>

                  <AccordionItem title="What types of events and activities do you organize?">
                    <p>
                      We organize a variety of activities including tech meetups, workshops, coding challenges, 
                      tech talks, sharing sessions, and networking events. Our events cover various technologies 
                      and development practices, from beginner-friendly workshops to advanced technical discussions. 
                      We also collaborate with other tech communities worldwide to bring diverse perspectives and opportunities.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="How can I contribute to the community?">
                    <p>
                      There are many ways to contribute! You can share your knowledge through tech talks or workshops, 
                      participate in coding challenges, mentor other developers, contribute to open-source projects, 
                      or help organize events. We also welcome collaboration on projects and initiatives that benefit 
                      the broader tech community.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Do I need to be from Tegal to join the community?">
                    <p>
                      Not at all! While we&apos;re based in Tegal, our community is open to software engineers from 
                      anywhere in Indonesia and around the world. We believe in the power of diverse perspectives 
                      and welcome members from different backgrounds and locations to enrich our community.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="How can I stay updated with community activities?">
                    <p>
                      You can stay updated by subscribing to our newsletter, following our social media channels, 
                      joining our community platforms, and regularly checking our website for upcoming events. 
                      We also send regular updates about workshops, challenges, and collaboration opportunities.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Are there any membership fees or costs?">
                    <p>
                      Most of our community activities and events are free to attend. However, some specialized 
                      workshops or events may have a small fee to cover materials or venue costs. We always 
                      strive to keep our events accessible and affordable for all members of our community.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="How can companies or organizations collaborate with Tegal Dev?">
                    <p>
                      We welcome collaborations with companies and organizations! You can sponsor events, 
                      provide venues for meetups, offer internship or job opportunities to our members, 
                      or collaborate on educational initiatives. Contact us through our collaboration email 
                      to discuss potential partnerships.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="What resources and learning materials are available?">
                    <p>
                      We provide access to various learning resources including workshop materials, 
                      recorded tech talks, coding challenge solutions, and curated learning paths. 
                      Our community also shares knowledge through blogs, podcasts, and video content. 
                      Members can access these resources through our platform and community channels.
                    </p>
                  </AccordionItem>
                </Accordion>
              </div>
            </ScrollAnimatedSection>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
