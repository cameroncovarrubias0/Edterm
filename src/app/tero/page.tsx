import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FallbackImage from '@/components/fallback-image';

export const metadata: Metadata = {
  title: 'Meet Tero | EdTerm',
  description:
    'Tero is EdTerm’s adaptive AI mentor, shaped by human wisdom gathered from the Shell-less Mentors community.',
  openGraph: {
    title: 'Meet Tero | EdTerm',
    description:
      'Learn how Tero blends AI adaptability with human experience to guide lifelong learning.',
    url: 'https://www.edterm.com/tero',
    type: 'website',
  },
};

export default function TeroPage() {
  return (
    <section className='section py-16 md:py-24'>
      <div className='grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center'>
        <div className='text-center md:text-left'>
          <span className='small font-medium uppercase tracking-wide text-brand-accent'>
            Meet Tero
          </span>
          <h1 className='h1 mt-2 text-balance'>The Human Wisdom Engine in Action.</h1>
          <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
            Tero is EdTerm’s adaptive AI mentor. This page will soon feature the
            full narrative, feature list, and interactive demo once the launch
            assets arrive. For now, it gives a credible overview of Tero’s role
            in the platform.
          </p>
          <div className='mt-6 grid gap-4 sm:grid-cols-2'>
            {[
              'Learns continuously from Shell-less Mentors to stay empathetic and relevant.',
              'Guides learners through evolving identities, matching goals with mentorship.',
            ].map((item) => (
              <Card
                key={item}
                className='rounded-2xl border border-brand-accent/20 bg-white/80 p-4 text-sm text-brand-muted'
              >
                {item}
              </Card>
            ))}
          </div>
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start'>
            <Link href='/foundation' className='inline-flex'>
              <Button className='min-w-[160px]'>Explore the Foundation</Button>
            </Link>
            <Link href='/mentors' className='small text-brand-accent hover:underline'>
              Discover Shell-less Mentors
            </Link>
          </div>
        </div>
        <Card className='relative mx-auto flex h-[280px] w-full max-w-md items-center justify-center rounded-3xl border border-black bg-black shadow-[0_20px_45px_rgba(0,0,0,0.35)] md:h-[360px] md:max-w-none'>
          <div className='relative h-[240px] w-full max-w-md md:h-[300px]'>
            <FallbackImage
              src='/images/tero.png'
              alt='Tero digital mentor illustration'
              fill
              className='object-contain drop-shadow-lg'
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
