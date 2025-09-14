'use client';

import { Mail } from 'lucide-react';
import Link from 'next/link';

interface CollaborationButtonProps {
  href?: string;
  subject?: string;
  body?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CollaborationButton({
  href = 'mailto:contact@tegal.dev',
  subject = 'Collaboration Request',
  body = 'Hi Tegal Dev Team,%0A%0AI would like to collaborate on a project. Here are the details:%0A%0AProject Idea:%0A%0AMy Background:%0A%0AContact Information:%0A%0AThank you!',
  className = '',
  children = 'Send Collaboration Request'
}: CollaborationButtonProps) {
  const mailtoUrl = `${href}?subject=${encodeURIComponent(subject)}&body=${body}`;

  return (
    <Link
      href={mailtoUrl}
      className={`inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      <Mail className="h-5 w-5" />
      {children}
    </Link>
  );
}