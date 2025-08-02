import { LucideIcon } from 'lucide-react';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { NavigationLinkItem } from './NavigationLinkItem';

interface DropdownNavigationItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
  showDescription?: boolean;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

export function DropdownNavigationItem({
  href,
  label,
  icon,
  description,
  showDescription = true,
  className = '',
  activeClassName = 'bg-white/20 text-white',
  inactiveClassName = 'text-gray-300',
}: DropdownNavigationItemProps) {
  return (
    <DropdownMenuItem key={href} asChild>
      <NavigationLinkItem
        href={href}
        label={label}
        icon={icon}
        description={description}
        showDescription={showDescription}
        className={className}
        activeClassName={activeClassName}
        inactiveClassName={inactiveClassName}
      />
    </DropdownMenuItem>
  );
}
