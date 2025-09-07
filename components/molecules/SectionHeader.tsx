'use client';

interface SectionHeaderProps {
  title: string;
  highlightedWord: string;
  subtitle: string;
}

export function SectionHeader({
  title,
  highlightedWord,
  subtitle,
}: SectionHeaderProps) {
  const titleParts = title.split(highlightedWord);

  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {titleParts[0]}
        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          {highlightedWord}
        </span>
        {titleParts[1]}
      </h2>
      <p className="text-lg text-gray-200 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
