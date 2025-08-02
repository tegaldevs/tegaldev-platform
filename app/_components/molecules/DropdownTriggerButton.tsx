import { ChevronDown, LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/app/_lib/utils';

interface DropdownTriggerButtonProps {
  title: string;
  icon: LucideIcon;
  showChevron?: boolean;
  variant?:
    | 'ghost'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function DropdownTriggerButton({
  title,
  icon: TriggerIcon,
  showChevron = true,
  variant = 'ghost',
  size = 'sm',
  className = '',
}: DropdownTriggerButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        `flex
        items-center
        gap-2
        text-gray-300
        hover:text-white
        hover:bg-white/10`,
        className,
      )}
    >
      <TriggerIcon />
      <span>{title}</span>
      {showChevron && <ChevronDown />}
    </Button>
  );
}
