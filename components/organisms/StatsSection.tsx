import { StatCard } from '../molecules/StatCard';

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-6 border-t border-white/20">
      <StatCard value="500+" label="Members" />
      <StatCard value="5+" label="Projects" />
      <StatCard value="50+" label="Events" />
      <StatCard value="7+" label="Collaborations" />
    </div>
  );
}
