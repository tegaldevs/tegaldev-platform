import { BookOpen, Calendar, ChevronDown, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DesktopNavigation({
  activitiesLinks,
  contentLinks,
}: {
  activitiesLinks: {
    href: string;
    label: string;
    icon: React.FC;
    description: string;
  }[];
  contentLinks: {
    href: string;
    label: string;
    icon: React.FC;
    description: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 text-gray-300 hover:text-white hover:bg-white/10"
          >
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Activities</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-64 bg-black/95 backdrop-blur-md border-white/20"
        >
          {activitiesLinks.map(({ href, label, icon: Icon, description }) => {
            const isActive = pathname === href;
            return (
              <DropdownMenuItem key={href} asChild>
                <Link
                  href={href}
                  className={`flex items-start gap-3 p-3 hover:bg-white/10 rounded-md cursor-pointer ${
                    isActive ? 'bg-white/20 text-white' : 'text-gray-300'
                  }`}
                >
                  <div className="h-5 w-5 mt-0.5">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{label}</span>
                    <span className="text-xs text-gray-400">{description}</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-1 text-gray-300 hover:text-white hover:bg-white/10"
          >
            <BookOpen className="h-4 w-4" />
            <span className="text-sm">Content</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-64 bg-black/95 backdrop-blur-md border-white/20"
        >
          {contentLinks.map(({ href, label, icon: Icon, description }) => {
            const isActive = pathname === href;
            return (
              <DropdownMenuItem key={href} asChild>
                <Link
                  href={href}
                  className={`flex items-start gap-3 p-3 hover:bg-white/10 rounded-md cursor-pointer ${
                    isActive ? 'bg-white/20 text-white' : 'text-gray-300'
                  }`}
                >
                  <div className="h-5 w-5 mt-0.5">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{label}</span>
                    <span className="text-xs text-gray-400">{description}</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Store Link */}
      <Link href="/merchandise">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center space-x-1 relative ${
            pathname === '/merchandise'
              ? 'text-white bg-white/20 border-b-2 border-purple-400'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="text-sm">Store</span>
          {pathname === '/merchandise' && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
          )}
        </Button>
      </Link>
    </nav>
  );
}
