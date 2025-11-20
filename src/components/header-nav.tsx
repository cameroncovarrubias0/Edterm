'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/mentors', label: 'Mentors' },
  { href: '/partners', label: 'Partners' },
  { href: '/privacy', label: 'Privacy' },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className='relative flex items-center gap-2 md:gap-4'>
      <nav className='hidden items-center gap-4 text-sm md:flex md:flex-nowrap md:gap-6'>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className='hover:underline'>
            {link.label}
          </Link>
        ))}
        <Link
          href='/courses'
          className='rounded-2xl bg-brand-accent px-4 py-2 text-white transition hover:opacity-90'
        >
          Explore Courses
        </Link>
      </nav>

      <button
        type='button'
        className='inline-flex items-center justify-center rounded-full border border-black/10 p-2 text-black md:hidden'
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={clsx(
          'absolute right-0 top-full z-30 mt-4 w-[calc(100vw-2rem)] max-w-xs rounded-3xl border border-black/10 bg-white p-5 text-sm shadow-xl transition-all duration-200 md:hidden',
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        )}
      >
        <nav className='flex flex-col gap-2'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='rounded-xl px-3 py-2 text-black transition hover:bg-brand-accent/5'
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/courses'
            className='mt-2 rounded-2xl bg-brand-accent px-4 py-2 text-center font-semibold text-white transition hover:opacity-90'
            onClick={closeMenu}
          >
            Explore Courses
          </Link>
        </nav>
      </div>
    </div>
  );
}
