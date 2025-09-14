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
    <div
      className={cn(
        `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-gray-300
        hover:text-white
        hover:bg-white/10
        transition-colors
        bg-transparent`,
        className,
      )}
    >
      <TriggerIcon className="h-4 w-4" />
      <span>{title}</span>
      {showChevron && <ChevronDown className="h-4 w-4" />}
    </div>
  );
}
