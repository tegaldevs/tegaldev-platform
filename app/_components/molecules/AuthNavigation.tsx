import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { LogOut, User, Users } from 'lucide-react';
import Link from 'next/link';

export default function AuthNavigation() {
  const { data: session, status } = useSession();

  return (
    <div className="hidden md:flex items-center space-x-2">
      {session ? (
        <>
          <div className="flex items-center space-x-2 mr-1">
            <Image
              src="/Tegal.dev-AAA.png"
              alt="TegalDev Logo"
              width={20}
              height={20}
              className="rounded-md"
            />
            <span className="text-sm font-medium text-gray-300">
              Welcome, {session.user.name || session.user.username}!
            </span>
          </div>
          <Button
            onClick={() => signOut()}
            variant="outline"
            size="sm"
            className="flex items-center space-x-1 px-3 border-white/20 text-white hover:bg-white/10"
          >
            <LogOut className="h-4 w-4" />
            <span className="text-sm">Sign Out</span>
          </Button>
        </>
      ) : status === 'loading' ? (
        <>
          <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </>
      ) : (
        <>
          <Link href="/auth/login">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-1 px-3 border-white/20 hover:bg-white/70"
            >
              <User className="h-4 w-4" />
              <span className="text-sm">Sign In</span>
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 flex items-center space-x-1"
            >
              <Users className="h-4 w-4" />
              <span className="text-sm">Join Community</span>
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
