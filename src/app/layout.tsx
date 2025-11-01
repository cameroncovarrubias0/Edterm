import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import FallbackImage from '@/components/fallback-image';

export const metadata: Metadata = {
  title: 'EdTerm — Where Human Wisdom Meets AI Evolution',
  description:
    'EdTerm blends adaptive AI mentorship with human wisdom to create accessible, lifelong learning pathways.',
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className='sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70'>
          <div className='section flex items-center justify-between py-4'>
            <Link
              href='/'
              aria-label='EdTerm Home'
              className='flex items-center gap-2'
            >
              <FallbackImage
                src='/images/logo.png'
                alt='EdTerm'
                width={132}
                height={32}
                priority
                className='h-8 w-auto'
              />
            </Link>
            <nav className='flex flex-wrap items-center gap-3 text-sm md:flex-nowrap md:gap-6'>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
              <Link href='/courses' className='hover:underline'>
                Courses
              </Link>
              <Link href='/blog' className='hover:underline'>
                Blog
              </Link>
              <Link href='/partners' className='hover:underline'>
                Partner
              </Link>
              <Link
                href='/courses'
                className='rounded-2xl bg-brand-accent px-4 py-2 text-white transition hover:opacity-90'
              >
                Explore Course
              </Link>
            </nav>
          </div>
        </header>

        <main className='flex-1'>{children}</main>

        <footer className='border-t'>
          <div className='section flex flex-col gap-4 py-10 text-sm md:flex-row md:items-center md:justify-between'>
            <div className='space-y-1'>
              <p className='text-sm font-semibold text-black'>
                EdTerm — Where Human Wisdom Meets AI Evolution.
              </p>
              <p className='small text-brand-muted'>© {new Date().getFullYear()} EdTerm</p>
            </div>
            <div className='flex flex-col items-start gap-2 md:items-end'>
              <nav className='flex flex-wrap items-center gap-4'>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
                <Link href='/foundation' className='hover:underline'>
                  Foundation
                </Link>
                <Link href='/partners' className='hover:underline'>
                  Partners
                </Link>
                <a href='mailto:partners@edterm.com' className='hover:underline'>
                  Contact
                </a>
              </nav>
              <p className='small text-brand-muted'>partners@edterm.com</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
