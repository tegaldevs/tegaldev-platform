'use client';

import { AlertCircle } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
}

export function ErrorAlert({ message }: ErrorAlertProps) {
  if (!message) return null;

  return (
    <div className="bg-red-500/10 border border-red-400/30 text-red-200 px-4 py-3 rounded-md text-sm backdrop-blur-sm flex items-center space-x-2">
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
}
