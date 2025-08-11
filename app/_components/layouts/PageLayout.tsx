import { cn } from '@/app/_lib/utils';
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
        className,
      )}
    >
      <div className="container max-w-5xl mx-auto pt-32 pb-16">{children}</div>
      <Footer />
    </div>
  );
}
