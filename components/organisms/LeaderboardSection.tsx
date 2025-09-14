'use client';

import { ScrollAnimatedSection } from '../layouts/ScrollAnimatedSection';
import { SectionHeader } from '../molecules/SectionHeader';
import { LeaderboardCard } from '../molecules/LeaderboardCard';

// Mock leaderboard data
const leaderboardData = [
  {
    rank: 1,
    name: 'Alex Johnson',
    username: 'alexj',
    experiencePoints: 15420,
    avatar: undefined,
  },
  {
    rank: 2,
    name: 'Sarah Chen',
    username: 'sarahc',
    experiencePoints: 14850,
    avatar: undefined,
  },
  {
    rank: 3,
    name: 'Michael Rodriguez',
    username: 'mrodriguez',
    experiencePoints: 13920,
    avatar: undefined,
  },
  {
    rank: 4,
    name: 'Emily Davis',
    username: 'emilyd',
    experiencePoints: 12750,
    avatar: undefined,
  },
  {
    rank: 5,
    name: 'David Kim',
    username: 'davidk',
    experiencePoints: 11680,
    avatar: undefined,
  },
];

export function LeaderboardSection() {
  return (
    <ScrollAnimatedSection
      className="py-20 px-4 sm:px-6 lg:px-8"
      animationType="fade-up"
      delay={400}
    >
      <div>
        <SectionHeader
          title="Community Leaderboard"
          highlightedWord="Leaderboard"
          subtitle="Celebrating our most active and contributing members"
        />
        
        <div className="space-y-4">
          {leaderboardData.map((member) => (
            <LeaderboardCard
              key={member.username}
              rank={member.rank}
              name={member.name}
              username={member.username}
              experiencePoints={member.experiencePoints}
              avatar={member.avatar}
            />
          ))}
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}

export default LeaderboardSection;