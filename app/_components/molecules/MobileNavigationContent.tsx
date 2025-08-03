import Link from 'next/link';
import { SheetHeader, SheetTitle } from '../ui/sheet';
import Image from 'next/image';
import { MobileNavigationSection } from './MobileNavigationSection';
import {
  activitiesLinks,
  contentLinks,
  shopLinks,
} from '@/app/_lib/navigation-data';
import { MobileAuthSection } from './MobileAuthSection';

interface MobileNavigationContentProps {
  onClose: () => void;
}

export function MobileNavigationContent({
  onClose,
}: MobileNavigationContentProps) {
  return (
    <>
      <SheetHeader>
        <SheetTitle>
          <Link href="/">
            <Image
              src="/Tegal.dev-AAA.png"
              alt="TegalDev Logo"
              width={48}
              height={48}
            />
          </Link>
        </SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-3 px-4">
        <MobileNavigationSection
          title="Activities"
          items={activitiesLinks}
          onClose={onClose}
        />
        <MobileNavigationSection
          title="Content"
          items={contentLinks}
          onClose={onClose}
        />
        <MobileNavigationSection
          title="Shop"
          items={shopLinks}
          onClose={onClose}
        />
        <MobileAuthSection onClose={onClose} />
      </div>
    </>
  );
}
