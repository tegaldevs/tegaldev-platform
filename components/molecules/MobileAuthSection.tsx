import { useSession } from 'next-auth/react';
import { AuthenticatedUserSection } from './AuthenticatedUserSection';
import { cn } from '@/lib/utils';
import { AuthButton } from './AuthButton';
import { User, Users } from 'lucide-react';

interface MobileAuthSectionProps {
  onClose: () => void;
}

export function MobileAuthSection({ onClose }: MobileAuthSectionProps) {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col gap-5">
      <div className="border-t border-white/20" />
      <div className="flex flex-col gap-3">
        {session ? (
          <AuthenticatedUserSection onClose={onClose} />
        ) : status === 'loading' ? (
          <>
            <div
              className={cn(
                `w-full
                h-8
                bg-gray-200
                dark:bg-gray-700
                rounded
                animate-pulse`,
              )}
            />
            <div
              className={cn(
                `w-full
                h-8
                bg-gray-200
                dark:bg-gray-700
                rounded
                animate-pulse`,
              )}
            />
          </>
        ) : (
          <>
            <AuthButton
              href="/auth/login"
              icon={User}
              label="Sign In"
              onClick={onClose}
              variant="outline"
              className={cn(
                `border-white/20
                hover:bg-white/70
                text-black`,
              )}
            />
            <AuthButton
              href="/auth/register"
              icon={Users}
              label="Join Community"
              onClick={onClose}
              variant="default"
              className={cn(
                `bg-gradient-to-r
                from-purple-600
                to-blue-600
                hover:from-purple-700
                hover:to-blue-700`,
              )}
            />
          </>
        )}
      </div>
    </div>
  );
}
