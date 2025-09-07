import { cn } from '@/lib/utils';
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
}

export function NavigationLinkItem({
  href,
  label,
  icon: Icon,
  description,
  showDescription = true,
  className = '',
}: NavigationLinkItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 p-3 rounded-md hover:cursor-pointer hover:bg-white/10 transition-colors w-full',
        isActive ? 'bg-white/20 text-white' : 'text-gray-300',
        className,
      )}
    >
      <Icon className="h-4 w-4 flex-shrink-0" />
      <div className="flex flex-col flex-1">
        <span className="font-medium text-sm">{label}</span>
        {showDescription && description && (
          <span className="text-xs text-gray-400 mt-0.5">{description}</span>
        )}
      </div>
    </Link>
  );
}
