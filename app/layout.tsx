import { Geist, Geist_Mono } from 'next/font/google';
import { metadata, viewport } from '../lib/metadata';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';
import { ProgressProvider } from '@/providers/ProgressProvider';
import { SessionProvider } from '@/providers/SessionProvider';
import ConditionalNavbar from '@/components/organisms/ConditionalNavbar';
import { CartSidebar } from '@/components/molecules/CartSidebar';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export { metadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <ProgressProvider>
            <SessionProvider>
              <ConditionalNavbar />
              {children}
              <CartSidebar />
            </SessionProvider>
          </ProgressProvider>
        </SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
