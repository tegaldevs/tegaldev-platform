import { signOut, useSession } from 'next-auth/react';
import { UserProfile } from './UserProfile';
import { AuthButton } from './AuthButton';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuthenticatedUserSectionProps {
  onClose: () => void;
}

export function AuthenticatedUserSection({
  onClose,
}: AuthenticatedUserSectionProps) {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="flex flex-col gap-5">
      <UserProfile />
      <AuthButton
        icon={LogOut}
        label="Sign Out"
        onClick={() => {
          signOut();
          onClose();
        }}
        variant="outline"
        className={cn(
          `border-red-500
          text-red-500
          hover:text-red-500
          hover:bg-white/90`,
        )}
      />
    </div>
  );
}
