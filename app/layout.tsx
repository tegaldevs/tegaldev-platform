import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SessionProvider } from '@/app/_components/providers/SessionProvider';
import { ProgressProvider } from '@/app/_components/providers/ProgressProvider';
import SmoothScrollProvider from '@/app/_components/providers/SmoothScrollProvider';
import { CartProvider } from '@/app/_components/providers/CartProvider';
import { CartSidebar } from '@/app/_components/molecules/CartSidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tegal Dev - Software Engineer Community Platform',
  description:
    'Join Tegal Dev, the premier software engineer community based in Tegal, Central Java, Indonesia. Connect, collaborate, and grow with fellow developers through projects, knowledge sharing, and networking opportunities.',
  keywords: [
    'software engineer',
    'developer community',
    'Tegal',
    'Indonesia',
    'programming',
    'coding',
    'tech community',
    'collaboration',
    'networking',
    'web development',
    'mobile development',
    'open source',
  ],
  authors: [{ name: 'Tegal Dev Community' }],
  creator: 'Tegal Dev',
  publisher: 'Tegal Dev',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tegal.dev',
    siteName: 'Tegal Dev',
    title: 'Tegal Dev - Software Engineer Community Platform',
    description:
      'Join Tegal Dev, the premier software engineer community based in Tegal, Central Java, Indonesia. Connect, collaborate, and grow with fellow developers.',
    images: [
      {
        url: '/Tegal.dev-AAA.png',
        width: 1200,
        height: 630,
        alt: 'Tegal Dev Community Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tegal Dev - Software Engineer Community Platform',
    description:
      'Join Tegal Dev, the premier software engineer community based in Tegal, Central Java, Indonesia. Connect, collaborate, and grow with fellow developers.',
    images: ['/Tegal.dev-AAA.png'],
    creator: '@tegaldev',
  },

  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  other: {
    'apple-mobile-web-app-title': 'Tegal Dev',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

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
        <Suspense fallback={null}>
          <SmoothScrollProvider>
            <ProgressProvider>
              <SessionProvider>
                <CartProvider>
                  {children}
                  <CartSidebar />
                </CartProvider>
              </SessionProvider>
            </ProgressProvider>
          </SmoothScrollProvider>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
