import { BookOpen, Calendar, ShoppingBag } from 'lucide-react';
import { NavigationDropdown } from './NavigationDropdown';
import { activitiesLinks, contentLinks } from '@/lib/navigation-data';
import { NavigationLink } from './NavigationLink';

export default function DesktopNavigation() {
  return (
    <nav className="hidden md:flex items-center gap-2">
      <NavigationDropdown
        title="Activities"
        icon={Calendar}
        items={activitiesLinks}
      />
      <NavigationDropdown
        title="Content"
        icon={BookOpen}
        items={contentLinks}
      />
      <NavigationLink href="/merchandise" title="Store" icon={ShoppingBag} />
    </nav>
  );
}
