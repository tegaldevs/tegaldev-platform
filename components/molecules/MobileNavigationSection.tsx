import { usePathname } from 'next/navigation';
import { NavigationItem } from './types/NavigationItem';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';

interface MobileNavigationSectionProps {
  title: string;
  items: NavigationItem[];
  onClose: () => void;
  className?: string;
}

export function MobileNavigationSection({
  title,
  items,
  onClose,
  className = '',
}: MobileNavigationSectionProps) {
  const pathname = usePathname();

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <h3
        className={cn(
          `text-sm font-semibold text-gray-400 uppercase tracking-wider`,
        )}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-1">
        {items.map(({ href, label, icon: Icon, description }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} onClick={onClose}>
              <Button
                variant="ghost"
                className={cn(
                  `w-full justify-start ${
                    isActive
                      ? `text-white
                      bg-white/20
                      border-l-1 border-purple-400
                      py-6`
                      : `text-gray-300
                      hover:text-white
                      hover:bg-white/10
                      py-6`
                  }`,
                )}
              >
                <Icon />
                <div className="flex flex-col items-start">
                  <span>{label}</span>
                  <span className="text-xs text-gray-400">{description}</span>
                </div>
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
