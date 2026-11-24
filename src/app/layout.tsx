// Styling
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Roboto } from 'next/font/google'
import '@/assets/global.css';
import { ScreenSizeMarker } from '@/components/ScreenSizeMarker';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sjursen\'s Portfolio',
    template: '%s | Sjursen\'s Portfolio'
  },
  description: 'Portfolio website of Kristian Sjursen',
};

// Globals

// Components
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';

// TODO: Add a "scroll to top" button
// TODO: Ensure that there is more white space around sections
// TODO: Ensure that links to sections can be clicked multiple times, and still work
// TODO: Componentize more parts of the website.
/**
 * Notes:
 * - Avoid loading screens (obviously).
 * - Keep it fast and lightweight.
 * - Avoid big distractions.
 * - No pop-ups or chat boxes.
 * - Any animations should either be subtle, or have a toggle.
 * 
 * - Consider a space-themed variant as a theme.
 * - Do a snow effect for winter theme.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  const isDev = process.env.NODE_ENV === 'development';
  return (
    <html
      lang='en'
      className={`${roboto.className} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-portfolio-secondary'>
        <Header />
        {children}
        {isDev && <ScreenSizeMarker />}
        <Footer />
      </body>
    </html>
  );
}
