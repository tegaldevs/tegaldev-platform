'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '../organisms/Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Hide navbar on dashboard pages
  const isDashboardPage = pathname?.startsWith('/dashboard');

  if (isDashboardPage) {
    return null;
  }

  return <Navbar />;
}
