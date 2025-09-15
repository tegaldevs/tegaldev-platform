import { cn } from '@/lib/utils';
import { Footer } from '../organisms/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div
      className={cn(
        `bg-gradient-to-br
      from-black
      to-blue-800`,
      )}
    >
      <div className={cn('container mx-auto pt-36 pb-16 px-5', className)}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
