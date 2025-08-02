import { LucideIcon } from 'lucide-react';
import { NavigationItem } from './types/NavigationItem';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { DropdownTriggerButton } from './DropdownTriggerButton';
import { DropdownNavigationItem } from './DropdownNavigationItem';

interface NavigationDropdownProps {
  title: string;
  icon: LucideIcon;
  items: NavigationItem[];
  className?: string;
}

export function NavigationDropdown({
  title,
  icon: TriggerIcon,
  items,
  className = '',
}: NavigationDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DropdownTriggerButton
          title={title}
          icon={TriggerIcon}
          className={className}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-64 bg-black/40 backdrop-blur-md border-white/10"
      >
        {items.map(({ href, label, icon, description }) => (
          <DropdownNavigationItem
            key={href}
            href={href}
            label={label}
            icon={icon}
            description={description}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
