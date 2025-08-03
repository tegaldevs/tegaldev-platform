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
        'hover:cursor-pointer hover:bg-white/10',
        isActive ? 'bg-white/20 text-white' : 'text-gray-300',
        className,
      )}
    >
      <Icon />
      <div className="flex flex-col">
        <span className="font-medium">{label}</span>
        {showDescription && description && (
          <span className="text-xs text-gray-400">{description}</span>
        )}
      </div>
    </Link>
  );
}
