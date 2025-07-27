'use client';

export const dynamic = 'force-dynamic';

import { AuthNavigation } from '@/app/_components/auth/AuthNavigation';
import { Footer } from '@/app/_components/ui/Footer';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'meetup' | 'conference' | 'webinar';
  attendees: number;
  maxAttendees: number;
  image: string;
  registrationUrl: string;
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'React Advanced Workshop',
    description:
      'Deep dive into advanced React patterns, hooks, and performance optimization techniques.',
    date: '2024-02-15',
    time: '09:00 - 17:00',
    location: 'Tegal Tech Hub, Central Java',
    type: 'workshop',
    attendees: 25,
    maxAttendees: 30,
    image: '/placeholder-event.jpg',
    registrationUrl: 'https://eventbrite.com/tegaldev-react-workshop',
  },
  {
    id: '2',
    title: 'Monthly Tech Meetup',
    description:
      'Join us for networking, tech talks, and community discussions about the latest in software development.',
    date: '2024-02-20',
    time: '18:00 - 21:00',
    location: 'Coworking Space Tegal',
    type: 'meetup',
    attendees: 45,
    maxAttendees: 50,
    image: '/placeholder-event.jpg',
    registrationUrl: 'https://meetup.com/tegaldev',
  },
  {
    id: '3',
    title: 'AI & Machine Learning Webinar',
    description:
      'Explore the fundamentals of AI and ML with practical examples and real-world applications.',
    date: '2024-02-25',
    time: '14:00 - 16:00',
    location: 'Online (Zoom)',
    type: 'webinar',
    attendees: 120,
    maxAttendees: 200,
    image: '/placeholder-event.jpg',
    registrationUrl: 'https://zoom.us/webinar/tegaldev-ai-ml',
  },
];

const pastEvents: Event[] = [
  {
    id: '4',
    title: 'JavaScript Fundamentals Workshop',
    description:
      'A comprehensive workshop covering ES6+, async programming, and modern JavaScript development.',
    date: '2024-01-15',
    time: '09:00 - 17:00',
    location: 'Tegal Tech Hub, Central Java',
    type: 'workshop',
    attendees: 28,
    maxAttendees: 30,
    image: '/placeholder-event.jpg',
    registrationUrl: '',
  },
  {
    id: '5',
    title: 'New Year Tech Conference 2024',
    description:
      'Annual conference featuring industry leaders and emerging technologies.',
    date: '2024-01-10',
    time: '08:00 - 18:00',
    location: 'Grand Ballroom, Tegal',
    type: 'conference',
    attendees: 150,
    maxAttendees: 150,
    image: '/placeholder-event.jpg',
    registrationUrl: '',
  },
];

function EventCard({
  event,
  isPast = false,
}: {
  event: Event;
  isPast?: boolean;
}) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop':
        return 'bg-blue-500';
      case 'meetup':
        return 'bg-green-500';
      case 'conference':
        return 'bg-purple-500';
      case 'webinar':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(
            event.type,
          )}`}
        >
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
        {isPast && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-600 text-gray-300">
            Past Event
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {event.description}
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-300 text-sm">
          <Calendar className="h-4 w-4 mr-2" />
          {new Date(event.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Clock className="h-4 w-4 mr-2" />
          {event.time}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <MapPin className="h-4 w-4 mr-2" />
          {event.location}
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <Users className="h-4 w-4 mr-2" />
          {event.attendees}/{event.maxAttendees} attendees
        </div>
      </div>

      {!isPast && event.registrationUrl && (
        <Link
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            Register Now
          </Button>
        </Link>
      )}
    </div>
  );
}

export default function EventsPage() {
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
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Community{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our workshops, meetups, conferences, and webinars to learn,
            network, and grow with the TegalDev community.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <SectionHeader
            title="Upcoming "
            highlightedWord="Events"
            subtitle="Don't miss out on these exciting upcoming events and opportunities to connect with fellow developers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-16">
          <SectionHeader
            title="Past "
            highlightedWord="Events"
            subtitle="Take a look at our previous events and see what you missed"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Have an idea for a workshop, talk, or meetup? We&apos;d love to
              hear from you! Reach out to us and let&apos;s make it happen
              together.
            </p>
            <Link href="mailto:events@tegaldev.com?subject=Event Proposal">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
              >
                Propose an Event
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
