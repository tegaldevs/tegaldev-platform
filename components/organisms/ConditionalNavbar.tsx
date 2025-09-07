'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isDashboardPage = pathname?.startsWith('/dashboard');

  if (isDashboardPage) return null;

  return <Navbar />;
}
