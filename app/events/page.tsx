'use client';

export const dynamic = 'force-dynamic';

import { Navbar } from '@/app/_components/ui/Navbar';
import { Footer } from '@/app/_components/ui/Footer';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { ScrollAnimatedSection } from '@/app/_components/ui/ScrollAnimatedSection';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';
import { Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react';

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
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col h-full">
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
      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
        {event.description}
      </p>

      <div className="space-y-2 mb-6">
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

      <div className="mt-auto">
        {!isPast && event.registrationUrl ? (
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
        ) : (
          <Button 
            disabled 
            className="w-full bg-gray-600 text-gray-400 cursor-not-allowed flex items-center gap-2"
          >
            {isPast ? 'Event Completed' : 'Registration Closed'}
          </Button>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <ScrollAnimatedSection className="text-center py-12" animationType="fade-up">
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
        </ScrollAnimatedSection>

        {/* Upcoming Events */}
        <ScrollAnimatedSection className="mb-16" animationType="slide-left" delay={200} as="section">
          <SectionHeader
            title="Upcoming "
            highlightedWord="Events"
            subtitle="Don't miss out on these exciting upcoming events and opportunities to connect with fellow developers"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Past Events */}
        <ScrollAnimatedSection className="mb-16" animationType="slide-right" delay={300} as="section">
          <SectionHeader
            title="Past "
            highlightedWord="Events"
            subtitle="Take a look at our previous events and see what you missed"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Call to Action */}
        <ScrollAnimatedSection className="text-center py-16" animationType="scale-up" delay={400} as="section">
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
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                Propose an Event
              </Button>
            </Link>
          </div>
        </ScrollAnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
