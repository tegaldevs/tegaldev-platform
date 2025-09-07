import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MobileNavigationContent } from './MobileNavigationContent';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className={cn(
            `bg-black/40 backdrop-blur-md border-white/10 text-white`,
          )}
        >
          <MobileNavigationContent onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
