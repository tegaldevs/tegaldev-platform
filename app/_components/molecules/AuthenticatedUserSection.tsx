import { signOut, useSession } from 'next-auth/react';
import { UserProfile } from './UserProfile';
import { AuthButton } from './AuthButton';
import { LogOut } from 'lucide-react';

interface AuthenticatedUserSectionProps {
  onClose: () => void;
}

export function AuthenticatedUserSection({
  onClose,
}: AuthenticatedUserSectionProps) {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <>
      <UserProfile />
      <AuthButton
        icon={LogOut}
        label="Sign Out"
        onClick={() => {
          signOut();
          onClose();
        }}
        variant="outline"
        className="border-white/20 text-white hover:bg-white/10"
      />
    </>
  );
}
