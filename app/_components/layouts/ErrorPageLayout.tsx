import { ReactNode } from 'react';

interface ErrorPageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function ErrorPageLayout({
  children,
  className = '',
}: ErrorPageLayoutProps) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-black to-blue-800 flex items-center justify-center px-4 ${className}`}
    >
      <div className="text-center space-y-6 max-w-md">{children}</div>
    </div>
  );
}
