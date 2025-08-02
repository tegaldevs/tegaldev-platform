import AuthNavigation from './AuthNavigation';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export function Navigation() {
  return (
    <div className="flex items-center gap-5">
      <DesktopNavigation />
      <MobileNavigation />
      <AuthNavigation />
    </div>
  );
}
