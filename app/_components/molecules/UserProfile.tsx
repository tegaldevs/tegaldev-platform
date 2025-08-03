import { cn } from '@/app/_lib/utils';
import { useSession } from 'next-auth/react';

interface UserProfileProps {
  showWelcomeMessage?: boolean;
  avatarSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function UserProfile({
  showWelcomeMessage = true,
  avatarSize = 'sm',
  className = '',
}: UserProfileProps) {
  const { data: session } = useSession();

  if (!session) return null;

  const getUserInitials = () => {
    const name = session.user.name || session.user.username || '';
    const nameParts = name.split(' ');
    if (nameParts.length >= 2)
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  const getAvatarSize = () => {
    switch (avatarSize) {
      case 'sm':
        return 'w-5 h-5 text-xs';
      case 'md':
        return 'w-8 h-8 text-sm';
      case 'lg':
        return 'w-12 h-12 text-base';
      default:
        return 'w-5 h-5 text-xs';
    }
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          `${getAvatarSize()}
          bg-gradient-to-r
          from-purple-600
          to-blue-600
          rounded-full
          flex
          items-center
          justify-center
          text-white
          font-semibold`,
        )}
      >
        {getUserInitials()}
      </div>
      {showWelcomeMessage && (
        <span className="text-sm font-medium text-gray-300">
          Welcome, {session.user.name || session.user.username}!
        </span>
      )}
    </div>
  );
}
