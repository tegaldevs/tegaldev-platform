import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  title: string;
  icon: LucideIcon;
  showActiveIndicator?: boolean;
  className?: string;
}

export function NavigationLink({
  href,
  title,
  icon: Icon,
  className = '',
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'flex items-center space-x-1 relative',
          isActive
            ? 'text-white bg-white/20 border-b-2 border-purple-400'
            : 'text-gray-300 hover:text-white hover:bg-white/10',
          className,
        )}
      >
        <Icon />
        <span>{title}</span>
      </Button>
    </Link>
  );
}
