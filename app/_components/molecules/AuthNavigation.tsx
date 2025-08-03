import { signOut, useSession } from 'next-auth/react';
import { UserProfile } from './UserProfile';
import { AuthButton } from './AuthButton';
import { LogOut, User, Users } from 'lucide-react';
import { cn } from '@/app/_lib/utils';

export default function AuthNavigation() {
  const { data: session, status } = useSession();

  return (
    <div className="hidden md:flex items-center gap-3">
      {session ? (
        <div className="flex items-center gap-5">
          <UserProfile />
          <AuthButton
            icon={LogOut}
            label="Sign Out"
            onClick={() => signOut()}
            variant="outline"
            size="sm"
            className={cn(
              `w-fit
              border-red-500
              text-red-500
              hover:text-red-500
              hover:bg-white/90`,
            )}
          />
        </div>
      ) : status === 'loading' ? (
        <>
          <div
            className={cn(
              `w-22
              h-8
              bg-gray-200 dark:bg-gray-700
              rounded-md
              animate-pulse`,
            )}
          />
          <div
            className={cn(
              `w-36
              h-8
              bg-gray-200 dark:bg-gray-700
              rounded-md
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
            variant="outline"
            size="sm"
            className="hover:bg-white/70"
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
              hover:to-blue-700`,
            )}
          />
        </>
      )}
    </div>
  );
}
