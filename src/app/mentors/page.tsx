import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import MentorForm from '@/components/mentor-form';

export const metadata: Metadata = {
  title: 'Shell-less Mentors | EdTerm',
  description:
    'Join EdTerm’s Shell-less Mentors program and pass on your expertise to lifelong learners across the globe.',
  keywords: [
    'Shell-less Mentors',
    'EdTerm mentors',
    'mentor program',
    'lifelong learning',
    'human wisdom engine',
  ],
  alternates: {
    canonical: '/mentors',
  },
  openGraph: {
    title: 'Shell-less Mentors | EdTerm',
    description:
      'Fuel the Human Wisdom Engine by guiding learners through pivotal choices with your lived experience.',
    url: 'https://edterm.com/mentors',
    type: 'website',
  },
};

const steps = [
  {
    title: 'Share your background',
    detail:
      'Tell us what industries, communities, or missions you have served. Your lived experiences matter most.',
  },
  {
    title: 'Match with learners',
    detail:
      'We route requests that align with your values, making each session purposeful whether it is live or async.',
  },
  {
    title: 'Capture wisdom',
    detail:
      'Conversations and insights are distilled into EdTerm’s Human Wisdom Engine so more learners benefit.',
  },
];

const mentorBenefits = [
  'Flexible scheduling that respects retirement, travel, or service commitments.',
  'Cohort briefings, facilitation prompts, and reflection tools to keep sessions impactful.',
  'Stipends or donations routed to missions you care about for select activations.',
];

const learnerBenefits = [
  'Ground advice in decades of frontline experience, not generic internet scripts.',
  'Receive asynchronous notes or real-time guidance tailored to age, region, and ambition.',
  'Build confidence by hearing how veterans, builders, and educators navigated similar obstacles.',
];

export default function MentorsPage() {
  return (
    <div className='space-y-20 py-16 md:py-24'>
      <section className='section'>
        <div className='grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center'>
          <div className='text-center md:text-left'>
            <p className='small font-semibold uppercase tracking-[0.3em] text-brand-accent'>
              Shell-less Mentors Program
            </p>
            <h1 className='h1 mt-3 text-balance'>Teach without a classroom. Lead without a shell.</h1>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              EdTerm pairs veterans, retired professionals, and lifelong experts with learners who
              need grounded advice. Every mentoring moment captures practical wisdom that powers the
              Human Wisdom Engine inside Tero.
            </p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Mentors guide critical decisions across careers, civic action, and wellbeing.',
                'Learners worldwide gain culturally aware advice that keeps AI guidance human.',
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
              <Link
                href='/partners'
                className='inline-flex rounded-full border border-transparent bg-brand-accent px-6 py-3 font-semibold text-white transition hover:opacity-90'
              >
                Explore Partner Models
              </Link>
              <Link href='/foundation' className='small text-brand-accent hover:underline'>
                Learn about the Foundation
              </Link>
            </div>
          </div>
          <Card className='mx-auto flex h-full min-h-[260px] w-full max-w-md flex-col justify-center rounded-3xl border border-dashed border-black/10 bg-white/90 p-8 text-left shadow-sm md:max-w-none'>
            <p className='text-sm font-semibold uppercase tracking-wide text-brand-accent'>
              Program Snapshot
            </p>
            <ul className='mt-4 space-y-3 text-sm text-brand-muted'>
              <li>✔️ 3,400+ mentor hours captured in 2024 pilots</li>
              <li>✔️ Supabase stores all submissions; Resend alerts the team instantly</li>
              <li>✔️ Focus on underserved regions and mission-aligned communities</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className='section space-y-8 rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm md:p-12'>
        <div className='text-center md:text-left'>
          <h2 className='h2'>How it works</h2>
          <p className='p mt-2 max-w-3xl'>
            The Shell-less Mentors pipeline makes it easy to share your story once and impact
            hundreds of learners through facilitated sessions and curated knowledge drops.
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-3'>
          {steps.map((step, index) => (
            <Card key={step.title} className='rounded-2xl border border-black/5 bg-white p-6 text-left shadow-sm'>
              <span className='text-sm font-semibold text-brand-accent'>Step {index + 1}</span>
              <h3 className='mt-2 text-lg font-semibold text-black'>{step.title}</h3>
              <p className='mt-2 text-sm text-brand-muted'>{step.detail}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className='section grid gap-8 lg:grid-cols-2'>
        <Card className='rounded-3xl border border-brand-accent/20 bg-brand-accent/5 p-8 shadow-sm'>
          <h2 className='h2'>Benefits for mentors</h2>
          <ul className='mt-4 space-y-4 text-sm text-brand-muted'>
            {mentorBenefits.map((benefit) => (
              <li key={benefit} className='flex items-start gap-3'>
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-accent' />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className='rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm'>
          <h2 className='h2'>Benefits for learners</h2>
          <ul className='mt-4 space-y-4 text-sm text-brand-muted'>
            {learnerBenefits.map((benefit) => (
              <li key={benefit} className='flex items-start gap-3'>
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-accent' />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className='section'>
        <div className='grid gap-12 rounded-3xl border border-black/5 bg-white/90 px-6 py-10 shadow-sm md:grid-cols-[1.05fr_.95fr] md:px-10 md:py-12'>
          <div className='text-center md:text-left'>
            <h2 className='h2 text-balance'>Join the Shell-less Mentor roster</h2>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              Complete the form and our partnerships team will review your experience before
              scheduling a welcome call. Submissions are saved to the Supabase{' '}
              <code className='rounded bg-black/5 px-2 py-1 text-xs font-semibold'>mentor_submissions</code>{' '}
              table and trigger an email notification via Resend to partners@edterm.com for rapid
              follow up.
            </p>
            <div className='mt-6 grid gap-3 text-sm text-brand-muted'>
              <div className='rounded-2xl border border-dashed border-brand-accent/30 bg-brand-accent/5 px-4 py-3'>
                Ideal for veterans, accomplished parents, teachers, social innovators, and builders.
              </div>
              <div className='rounded-2xl border border-dashed border-brand-accent/30 bg-brand-accent/5 px-4 py-3'>
                Sessions can be virtual, asynchronous, or embedded in on-the-ground activations.
              </div>
            </div>
          </div>
          <MentorForm />
        </div>
      </section>
    </div>
  );
}
