'use client';

import {
  Calendar,
  MapPin,
} from 'lucide-react';

import { type UserEvent } from '@/data/profile';

interface ProfileEventsProps {
  events: UserEvent[];
}

export function ProfileEvents({ events }: ProfileEventsProps) {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };



  const eventTypeConfig = {
    conference: {
      bg: 'bg-blue-500/20',
      text: 'text-blue-300',
      border: 'border-blue-500/30',
      dot: 'bg-blue-400',
    },
    workshop: {
      bg: 'bg-green-500/20',
      text: 'text-green-300',
      border: 'border-green-500/30',
      dot: 'bg-green-400',
    },
    meetup: {
      bg: 'bg-purple-500/20',
      text: 'text-purple-300',
      border: 'border-purple-500/30',
      dot: 'bg-purple-400',
    },
    hackathon: {
      bg: 'bg-orange-500/20',
      text: 'text-orange-300',
      border: 'border-orange-500/30',
      dot: 'bg-orange-400',
    },
    webinar: {
      bg: 'bg-indigo-500/20',
      text: 'text-indigo-300',
      border: 'border-indigo-500/30',
      dot: 'bg-indigo-400',
    },
  } as const;

  const getEventTypeConfig = (type: string) => {
    return eventTypeConfig[type as keyof typeof eventTypeConfig] || {
      bg: 'bg-gray-500/20',
      text: 'text-gray-300',
      border: 'border-gray-500/30',
      dot: 'bg-gray-400',
    };
  };

  const sortedEvents = [...events].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 pointer-events-none"></div>
      <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Events Attended</h2>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Calendar className="h-4 w-4" />
          <span>{events.length} events</span>
        </div>
      </div>

      {/* Event Types Summary */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Array.from(new Set(events.map(event => event.type))).map((type) => {
          const config = getEventTypeConfig(type);
          const count = events.filter(event => event.type === type).length;
          
          return (
            <div
              key={type}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${config.bg} ${config.border} border`}
            >
              <div className={`w-2 h-2 rounded-full ${config.dot}`} />
              <span className={`font-medium ${config.text} capitalize`}>{type}s</span>
              <span className={`text-xs ${config.text} bg-white/20 px-2 py-0.5 rounded-full`}>
                {count}
              </span>
            </div>
          );
        })}
      </div>

      {/* Events Timeline */}
      <div className="space-y-6">
        {sortedEvents.map((event, index) => {
          const config = getEventTypeConfig(event.type);
          const isUpcoming = new Date(event.date) > new Date();
          
          return (
            <div key={`${event.title}-${event.date}-${index}`} className="relative">
              {/* Timeline Line */}
              {index < sortedEvents.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-white/20" />
              )}
              
              {/* Timeline Dot */}
              <div className={`absolute left-4 top-4 w-4 h-4 rounded-full ${config.dot} border-2 border-gray-800 shadow-sm`} />
              
              {/* Event Card */}
              <div className="ml-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 hover:shadow-lg hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:border-white/30">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">

                  
                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-white mb-1">{event.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text} ${config.border} border`}>
                            {event.type}
                          </span>
                          {event.role && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                              {event.role}
                            </span>
                          )}
                          {isUpcoming && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                              Upcoming
                            </span>
                          )}
                        </div>
                      </div>
                      

                    </div>
                    
                    {/* Event Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>

                    </div>
                    
                    {/* Description */}
                    {event.description && (
                      <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    )}
                    

                    

                    

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {events.length > 5 && (
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
            Load More Events
          </button>
        </div>
      )}
      </div>
    </div>
  );
}