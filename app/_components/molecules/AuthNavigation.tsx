import { signOut, useSession } from 'next-auth/react';
import { UserProfile } from './UserProfile';
import { AuthButton } from './AuthButton';
import { LogOut, User, Users } from 'lucide-react';
import { cn } from '@/app/_lib/utils';

export default function AuthNavigation() {
  const { data: session, status } = useSession();

  return (
    <div className="hidden md:flex items-center space-x-2">
      {session ? (
        <>
          <UserProfile
            className="flex items-center space-x-2 mr-1 mb-0"
            avatarSize="sm"
          />
          <AuthButton
            icon={LogOut}
            label="Sign Out"
            onClick={() => signOut()}
            variant="outline"
            size="sm"
            className={cn(
              `flex
              items-center
              space-x-1
              px-3
              border-white/20
              text-red-500
              hover:text-red-500
              hover:bg-red-white/70
              text-sm`,
            )}
          />
        </>
      ) : status === 'loading' ? (
        <>
          <div
            className={cn(
              `w-26 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse`,
            )}
          />
          <div
            className={cn(
              `w-36 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse`,
            )}
          />
        </>
      ) : (
        <>
          <AuthButton
            href="/auth/login"
            icon={User}
            label="Sign In"
            variant="outline"
            size="sm"
            className={cn(
              `flex
              items-center
              space-x-1
              px-3
              border-white/20
              hover:bg-white/70
              text-sm`,
            )}
          />
          <AuthButton
            href="/auth/register"
            icon={Users}
            label="Join Community"
            variant="default"
            size="sm"
            className={cn(
              `bg-gradient-to-r
              from-purple-600
              to-blue-600
              hover:from-purple-700
              hover:to-blue-700
              text-white
              px-4
              flex
              items-center
              space-x-1
              text-sm`,
            )}
          />
        </>
      )}
    </div>
  );
}
