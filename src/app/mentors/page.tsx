import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MentorForm from '@/components/mentor-form';

export const metadata: Metadata = {
  title: 'Shell-less Mentors | EdTerm',
  description:
    'Discover how Shell-less Mentors capture human wisdom to power EdTerm’s Human Wisdom Engine.',
};

export default function MentorsPage() {
  return (
    <div className='space-y-20 py-16 md:py-24'>
      <section className='section'>
        <div className='grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center'>
          <div className='text-center md:text-left'>
            <span className='small font-medium uppercase tracking-wide text-brand-accent'>
              Shell-less Mentors
            </span>
            <h1 className='h1 mt-2 text-balance'>Wisdom Beyond the Shell.</h1>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              This page will host mentor spotlights, program details, and onboarding guidelines once
              the full content package arrives. Until then, it provides a concise overview for
              partners and affiliates.
            </p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Connect retired professionals, veterans, and lifelong experts with global learners.',
                'Fuel the Human Wisdom Engine that keeps Tero grounded in lived experience.',
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
              <Link href='/partners' className='inline-flex'>
                <Button className='min-w-[160px]'>Partner With EdTerm</Button>
              </Link>
              <Link href='/' className='small text-brand-accent hover:underline'>
                Return to the homepage
              </Link>
            </div>
          </div>
          <Card className='mx-auto flex h-[260px] w-full max-w-md items-center justify-center rounded-3xl border border-dashed border-black/15 bg-white/70 shadow-sm md:h-[320px] md:max-w-none'>
            <div className='text-center text-sm text-brand-muted'>
              Placeholder illustration area for Shell-less Mentors visuals.
              <br />
              Swap in final artwork once delivered.
            </div>
          </Card>
        </div>
      </section>

      <section className='section'>
        <div className='grid gap-12 rounded-3xl border border-black/5 bg-white px-6 py-10 shadow-sm md:grid-cols-[1.1fr_.9fr] md:px-10 md:py-12'>
          <div className='text-center md:text-left'>
            <h2 className='h2 text-balance'>Become a Shell-less Mentor</h2>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              Share your interest below and the EdTerm partnerships team will review your experience
              before scheduling an introductory conversation. Submissions are securely stored in
              Supabase and trigger an instant alert for the team.
            </p>
            <div className='mt-6 grid gap-3 text-sm text-brand-muted'>
              <div className='rounded-2xl border border-dashed border-brand-accent/30 bg-brand-accent/5 px-4 py-3'>
                Help learners navigate pivotal decisions with your lived experience.
              </div>
              <div className='rounded-2xl border border-dashed border-brand-accent/30 bg-brand-accent/5 px-4 py-3'>
                Flexible opportunities for veterans, retirees, and domain experts.
              </div>
            </div>
          </div>
          <MentorForm />
        </div>
      </section>
    </div>
  );
}
