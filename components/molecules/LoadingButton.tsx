'use client';

import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface LoadingButtonProps {
  isLoading: boolean;
  loadingText: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export function LoadingButton({
  isLoading,
  loadingText,
  children,
  icon: Icon,
  type = 'button',
  className = '',
  disabled = false,
}: LoadingButtonProps) {
  return (
    <Button
      type={type}
      className={`w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 ${className}`}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>{loadingText}</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <span>{children}</span>
          {Icon && <Icon className="h-4 w-4" />}
        </div>
      )}
    </Button>
  );
}
