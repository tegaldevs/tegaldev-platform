'use client';

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-md p-6 border border-white/20 text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-gray-200">{label}</div>
    </div>
  );
}
