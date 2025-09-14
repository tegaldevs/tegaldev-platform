'use client';

import { Mic, Calendar, Clock, Users, Play, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { Button } from '../ui/button';

interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  duration: string;
  season: number;
  episode: number;
  guests: string[];
  topics: string[];
  spotifyUrl: string;
}

const featuredEpisodes: PodcastEpisode[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    description: 'Exploring emerging trends, technologies, and methodologies shaping the future of web development.',
    publishedAt: '2024-01-15',
    duration: '45:30',
    season: 2,
    episode: 5,
    guests: ['Sarah Johnson', 'Mike Chen'],
    topics: ['Web Development', 'Technology', 'Trends'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-future-web',
  },
  {
    id: '2',
    title: 'Building Scalable APIs',
    description: 'Best practices for designing and implementing APIs that can handle millions of requests.',
    publishedAt: '2024-01-12',
    duration: '38:15',
    season: 2,
    episode: 4,
    guests: ['David Rodriguez'],
    topics: ['API', 'Backend', 'Scalability'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-scalable-apis',
  },
  {
    id: '3',
    title: 'Career Growth in Tech',
    description: 'Insights and advice on advancing your career in the technology industry.',
    publishedAt: '2024-01-10',
    duration: '52:20',
    season: 2,
    episode: 3,
    guests: ['Lisa Park', 'James Wilson'],
    topics: ['Career', 'Growth', 'Technology'],
    spotifyUrl: 'https://open.spotify.com/episode/tegaldev-career-growth',
  },
];

function PodcastCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-green-600/30 text-green-300 text-xs rounded-full">
            S{episode.season}E{episode.episode}
          </span>
          <div className="flex items-center text-gray-400 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {episode.duration}
          </div>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Mic className="h-5 w-5 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors line-clamp-2">
        {episode.title}
      </h3>

      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
        {episode.description}
      </p>

      <div className="flex items-center space-x-4 text-gray-400 text-xs mb-4">
        <div className="flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          {new Date(episode.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
        {episode.guests.length > 0 && (
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {episode.guests.slice(0, 1).join(', ')}
            {episode.guests.length > 1 && ` +${episode.guests.length - 1} more`}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {episode.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 bg-green-600/30 text-green-300 text-xs rounded-full"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          href={episode.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2">
            <Play className="h-4 w-4" />
            Listen on Spotify
            <ExternalLink className="h-3 w-3" />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default function PodcastsSection() {
  return (
    <ScrollAnimatedSection
      className="mt-12"
      animationType="fade-up"
      delay={600}
    >
      <SectionHeader
        title="Featured "
        highlightedWord="Podcasts"
        subtitle="Listen to engaging conversations about technology, career growth, and industry insights"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredEpisodes.map((episode) => (
          <PodcastCard key={episode.id} episode={episode} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/podcasts">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3"
          >
            View All Episodes
          </Button>
        </Link>
      </div>
    </ScrollAnimatedSection>
  );
}