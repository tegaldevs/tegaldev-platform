import { useSession } from 'next-auth/react';
import { User, Users } from 'lucide-react';
import { AuthButton } from './AuthButton';
import { AuthenticatedUserSection } from './AuthenticatedUserSection';

interface MobileAuthSectionProps {
  onClose: () => void;
}

export function MobileAuthSection({ onClose }: MobileAuthSectionProps) {
  const { data: session, status } = useSession();

  return (
    <div className="border-t border-white/20 pt-6 mt-3">
      {session ? (
        <AuthenticatedUserSection onClose={onClose} />
      ) : status === 'loading' ? (
        <div className="flex flex-col gap-3">
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      ) : (
        <>
          <AuthButton
            href="/auth/login"
            icon={User}
            label="Sign In"
            onClick={onClose}
            variant="outline"
            className="mb-3 border-white/20 hover:bg-white/70 text-black"
          />
          <AuthButton
            href="/auth/register"
            icon={Users}
            label="Join Community"
            onClick={onClose}
            variant="default"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          />
        </>
      )}
    </div>
  );
}
