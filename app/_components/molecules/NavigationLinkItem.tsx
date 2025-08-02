import { cn } from '@/app/_lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLinkItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
  showDescription?: boolean;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
}

export function NavigationLinkItem({
  href,
  label,
  icon: Icon,
  description,
  showDescription = true,
  className = '',
  activeClassName = 'bg-white/20 text-white',
  inactiveClassName = 'text-gray-300',
  iconClassName = 'h-5 w-5',
  labelClassName = 'font-medium',
  descriptionClassName = 'text-xs text-gray-400',
  containerClassName = 'flex flex-col',
}: NavigationLinkItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'hover:cursor-pointer hover:bg-white/10',
        isActive ? activeClassName : inactiveClassName,
        className,
      )}
    >
      <Icon className={iconClassName} />
      <div className={containerClassName}>
        <span className={labelClassName}>{label}</span>
        {showDescription && description && (
          <span className={descriptionClassName}>{description}</span>
        )}
      </div>
    </Link>
  );
}
