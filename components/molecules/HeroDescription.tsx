'use client';

interface HeroDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroDescription({ children, className = '' }: HeroDescriptionProps) {
  return (
    <p className={`text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center ${className}`}>
      {children}
    </p>
  );
}

export function HeroDescriptionHighlight({ 
  children, 
  variant = 'blue' 
}: { 
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'white';
}) {
  const variantClasses = {
    blue: 'text-blue-300 font-medium',
    purple: 'text-purple-300',
    white: 'text-white font-semibold'
  };

  return (
    <span className={variantClasses[variant]}>
      {children}
    </span>
  );
}