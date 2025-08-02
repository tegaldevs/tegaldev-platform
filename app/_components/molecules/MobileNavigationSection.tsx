import { usePathname } from 'next/navigation';
import { NavigationItem } from './types/NavigationItem';
import Link from 'next/link';
import { Button } from '../ui/button';

interface MobileNavigationSectionProps {
  title: string;
  items: NavigationItem[];
  onClose: () => void;
  className?: string;
  titleClassName?: string;
  itemClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

export function MobileNavigationSection({
  title,
  items,
  onClose,
  className = 'flex flex-col gap-1',
  titleClassName = 'text-sm font-semibold text-gray-400 uppercase tracking-wider',
  itemClassName = 'w-full justify-start',
  activeClassName = 'text-white bg-white/20 border-l-1 border-purple-400 py-6',
  inactiveClassName = 'text-gray-300 hover:text-white hover:bg-white/10 py-6',
}: MobileNavigationSectionProps) {
  const pathname = usePathname();

  return (
    <div className={className}>
      <h3 className={titleClassName}>{title}</h3>
      {items.map(({ href, label, icon: Icon, description }) => {
        const isActive = pathname === href;
        return (
          <Link key={href} href={href} onClick={onClose}>
            <Button
              variant="ghost"
              className={`${itemClassName} ${
                isActive ? activeClassName : inactiveClassName
              }`}
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
  );
}
