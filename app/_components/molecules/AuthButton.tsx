import { LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface AuthButtonProps {
  href?: string;
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?:
    | 'outline'
    | 'default'
    | 'destructive'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function AuthButton({
  href,
  icon: Icon,
  label,
  onClick,
  variant = 'outline',
  size = 'default',
  className = '',
}: AuthButtonProps) {
  const buttonContent = (
    <Button
      variant={variant}
      size={size}
      onClick={!href ? onClick : undefined}
      className={`w-full justify-start py-3 ${className}`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
