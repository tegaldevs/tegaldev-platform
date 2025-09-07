import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface PhotoGalleryCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  gradientFrom: string;
  gradientTo: string;
  imageUrl?: string;
  size?: 'small' | 'large' | 'wide';
  className?: string;
}

export function PhotoGalleryCard({
  icon: Icon,
  title,
  subtitle,
  gradientFrom,
  gradientTo,
  imageUrl,
  size = 'small',
  className = '',
}: PhotoGalleryCardProps) {
  const sizeClasses = {
    small: 'aspect-square',
    large: 'col-span-2 row-span-2 aspect-square',
    wide: 'col-span-2 aspect-[2/1]',
  };

  const iconSizes = {
    small: 'h-8 w-8',
    large: 'h-12 w-12',
    wide: 'h-10 w-10',
  };

  const textSizes = {
    small: 'text-xs',
    large: 'text-sm',
    wide: 'text-sm',
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-lg ${sizeClasses[size]} ${className}`}
    >
      <div
        className={`${sizeClasses[size]} relative border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden`}
      >
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes={
                size === 'large'
                  ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  : '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw'
              }
            />
          </>
        ) : (
          <div
            className={`${sizeClasses[size]} bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}
          >
            <div className="text-center text-white/60">
              <Icon
                className={`${iconSizes[size]} mx-auto mb-${
                  size === 'small' ? '1' : '2'
                }`}
              />
              <p className={`${textSizes[size]} font-medium`}>{title}</p>
              {subtitle && (
                <p className="text-xs opacity-75 mt-1">{subtitle}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
