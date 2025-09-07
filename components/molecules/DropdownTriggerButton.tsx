import { ChevronDown, LucideIcon } from 'lucide-react';
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
    <button
      className={cn(
        `flex
        items-center
        gap-2
        text-gray-300
        hover:text-white
        hover:bg-white/10
        px-3 py-2
        rounded-md
        cursor-pointer
        transition-colors
        border-none
        bg-transparent`,
        className,
      )}
    >
      <TriggerIcon />
      <span>{title}</span>
      {showChevron && <ChevronDown />}
    </button>
  );
}
