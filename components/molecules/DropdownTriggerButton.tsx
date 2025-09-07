import { ChevronDown, LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface DropdownTriggerButtonProps {
  title: string;
  icon: LucideIcon;
  showChevron?: boolean;
  className?: string;
}

export function DropdownTriggerButton({
  title,
  icon: TriggerIcon,
  showChevron = true,
  className = '',
}: DropdownTriggerButtonProps) {
  return (
    <Button
      className={cn(
        `text-gray-300
        hover:text-white
        hover:bg-white/10
        transition-colors
        bg-transparent`,
        className,
      )}
    >
      <TriggerIcon />
      <span>{title}</span>
      {showChevron && <ChevronDown />}
    </Button>
  );
}
