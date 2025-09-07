'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

interface ErrorActionsProps {
  showHomeButton?: boolean;
  showBackButton?: boolean;
  homeHref?: string;
  homeLabel?: string;
  backLabel?: string;
  onBackClick?: () => void;
  className?: string;
}

export default function ErrorActions({
  showHomeButton = true,
  showBackButton = true,
  homeHref = '/',
  homeLabel = 'Go Home',
  backLabel = 'Go Back',
  onBackClick = () => window.history.back(),
  className = 'flex flex-col sm:flex-row gap-4 justify-center',
}: ErrorActionsProps) {
  return (
    <div className={className}>
      {showHomeButton && (
        <Link href={homeHref}>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center gap-2">
            <Home className="h-4 w-4" />
            {homeLabel}
          </Button>
        </Link>
      )}
      {showBackButton && (
        <Button
          variant="outline"
          onClick={onBackClick}
          className="border-gray-300 dark:border-gray-600 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Button>
      )}
    </div>
  );
}
