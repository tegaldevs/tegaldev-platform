'use client';

import { notFound } from 'next/navigation';
import { Navbar } from '@/app/_components/organisms/Navbar';
import { Footer } from '@/app/_components/organisms/Footer';
import { ScrollAnimatedSection } from '@/app/_components/layouts/ScrollAnimatedSection';
import { Button } from '@/app/_components/ui/button';
import { getEventById } from '@/app/_data/events';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowLeft,
  CheckCircle,
  User,
  DollarSign,
  UserCheck,
} from 'lucide-react';
import { useState, use } from 'react';
import { useSession } from 'next-auth/react';

interface EventDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  experience: string;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white mb-2">
          Registration Successful!
        </h4>
        <p className="text-gray-300 mb-4">
          Thank you for registering! You will receive a confirmation email
          shortly with event details and further instructions.
        </p>
        <Link href="/events">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            Back to Events
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your company or organization"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Registering...
          </>
        ) : (
          <>
            <User className="mr-3 h-5 w-5" />
            Register Now
          </>
        )}
      </Button>
    </form>
  );
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = use(params);
  const event = getEventById(id);
  const { data: session } = useSession();
  const [isRsvped, setIsRsvped] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  if (!event) {
    notFound();
  }

  const handleRsvp = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call for RSVP
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsRsvped(true);
      setSubmitMessage(
        'RSVP successful! You are now registered for this event.',
      );
    } catch {
      setSubmitMessage('RSVP failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const isPastEvent = new Date(event.date) < new Date();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800">
      <Navbar />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Back Button */}
        <ScrollAnimatedSection className="mb-6" animationType="fade-up">
          <Link
            href="/events"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
        </ScrollAnimatedSection>

        {/* Event Header */}
        <ScrollAnimatedSection className="mb-12" animationType="fade-up">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(
                    event.type,
                  )}`}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
                {isPastEvent && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-600 text-gray-300">
                    Past Event
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {event.title}
              </h1>

              <p className="text-xl text-gray-300 mb-6">
                {event.fullDescription || event.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-3" />
                  <div className="font-medium">{event.time}</div>
                </div>

                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div className="font-medium">{event.location}</div>
                </div>

                <div className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 mr-3" />
                  <div className="font-medium">
                    {event.attendees}/{event.maxAttendees} attendees
                  </div>
                </div>
              </div>
            </div>

            {/* Event Image Placeholder */}
            <div className="lg:w-96">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Calendar className="h-16 w-16 mx-auto mb-2" />
                  <p>Event Image</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Agenda */}
            {event.agenda && (
              <ScrollAnimatedSection animationType="fade-up" delay={200}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Event Agenda
                  </h2>
                  <div className="space-y-3">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
            )}

            {/* What You'll Learn */}
            {event.whatYouWillLearn && (
              <ScrollAnimatedSection animationType="fade-up" delay={300}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    What You&apos;ll Learn
                  </h2>
                  <div className="space-y-3">
                    {event.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
            )}

            {/* Prerequisites */}
            {event.prerequisites && (
              <ScrollAnimatedSection animationType="fade-up" delay={400}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Prerequisites
                  </h2>
                  <div className="space-y-3">
                    {event.prerequisites.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
            )}

            {/* Speakers */}
            {event.speakers && (
              <ScrollAnimatedSection animationType="fade-up" delay={500}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Speakers
                  </h2>
                  <div className="space-y-4">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-6 w-6 text-gray-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            {speaker.name}
                          </h3>
                          <p className="text-purple-300 text-sm">
                            {speaker.title}
                          </p>
                          <p className="text-gray-300 text-sm mt-1">
                            {speaker.bio}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            {event.price && !isPastEvent && (
              <ScrollAnimatedSection animationType="fade-up" delay={200}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Pricing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Early Bird</span>
                      <span className="text-white font-semibold">
                        {formatPrice(event.price.early)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Regular</span>
                      <span className="text-white font-semibold">
                        {formatPrice(event.price.regular)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Student</span>
                      <span className="text-white font-semibold">
                        {formatPrice(event.price.student)}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
            )}

            {/* RSVP/Registration Section */}
            <ScrollAnimatedSection animationType="fade-up" delay={300}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <User className="mr-3 h-5 w-5 text-purple-400" />
                  {isPastEvent
                    ? 'Event Registration (Closed)'
                    : session
                    ? 'RSVP for Event'
                    : 'Register for Event'}
                </h3>

                {isPastEvent ? (
                  <div className="text-center py-8">
                    <p className="text-gray-300 mb-4">
                      Registration for this event has ended.
                    </p>
                    <p className="text-sm text-gray-400">
                      Thank you to all {event.attendees} participants who joined
                      us!
                    </p>
                    <Link href="/events" className="mt-4 inline-block">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        View Upcoming Events
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    {submitMessage && (
                      <div
                        className={`mb-6 p-4 rounded-lg ${
                          submitMessage.includes('successful')
                            ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                            : 'bg-red-500/20 border border-red-500/30 text-red-300'
                        }`}
                      >
                        {submitMessage}
                      </div>
                    )}

                    {session ? (
                      // RSVP for logged-in users
                      <div className="text-center space-y-6">
                        <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                              <UserCheck className="h-8 w-8 text-white" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Welcome, {session.user?.name || 'User'}!
                          </h4>
                          <p className="text-gray-300 mb-6">
                            You can RSVP for this event with just one click.
                          </p>

                          {isRsvped ? (
                            <div className="space-y-4">
                              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                                <p className="text-green-300 font-medium">
                                  ✓ You have successfully RSVP&apos;d for this
                                  event!
                                </p>
                              </div>
                              <Button
                                disabled
                                className="w-full bg-green-600 hover:bg-green-600 text-white py-3 text-lg font-semibold cursor-not-allowed"
                              >
                                <UserCheck className="mr-3 h-5 w-5" />
                                RSVP Confirmed
                              </Button>
                            </div>
                          ) : (
                            <Button
                              onClick={handleRsvp}
                              disabled={isSubmitting}
                              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold"
                            >
                              {isSubmitting ? (
                                <>
                                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                  Processing RSVP...
                                </>
                              ) : (
                                <>
                                  <UserCheck className="mr-3 h-5 w-5" />
                                  RSVP Now
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                    ) : (
                      // Registration form for non-logged-in users
                      <>
                        <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                          <p className="text-blue-300 text-sm">
                            💡 <strong>Tip:</strong>{' '}
                            <Link
                              href="/auth/login"
                              className="underline hover:text-blue-200"
                            >
                              Sign in
                            </Link>{' '}
                            to RSVP instantly without filling out the form!
                          </p>
                        </div>

                        <RegistrationForm />
                      </>
                    )}
                  </>
                )}
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
