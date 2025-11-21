import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import MentorForm from '@/components/mentor-form';

export const metadata: Metadata = {
  title: 'Shell-less Mentors | EdTerm',
  description:
    'Contribute your experience to EdTerm’s Human Wisdom Database for Tero and keep guidance human for future generations.',
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
      'Contribute your lived experience to Tero’s Human Wisdom Database so guidance stays human for generations.',
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
    title: 'Match with needs',
    detail: 'We route prompts and requests that align with your values so your advice stays focused.',
  },
  {
    title: 'Capture wisdom for Tero',
    detail:
      'Your guidance fuels the Human Wisdom Database so future learners benefit from authentic experience.',
  },
];

const whyItMatters = [
  'Tero learns from verified human experience, not scraped content.',
  'Learners receive grounded guidance that respects culture and context.',
  'Your stories are preserved so the next generation can build with real wisdom.',
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
            <h1 className='h1 mt-3 text-balance'>Fuel the Human Wisdom Database for Tero.</h1>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              EdTerm captures lived expertise from veterans, retired professionals, and lifelong
              experts. Your submission feeds Tero’s Human Wisdom Database so guidance stays human,
              contextual, and ready for generations to come.
            </p>
            <div className='mt-6 grid gap-3 text-sm text-brand-muted'>
              {whyItMatters.map((item) => (
                <Card
                  key={item}
                  className='rounded-2xl border border-brand-accent/20 bg-white/80 p-4 text-left'
                >
                  {item}
                </Card>
              ))}
            </div>
          </div>
          <Card className='mx-auto flex h-full min-h-[260px] w-full max-w-md flex-col justify-center rounded-3xl border border-black/10 bg-white/95 p-8 text-left shadow-sm md:max-w-none'>
            <p className='text-sm font-semibold uppercase tracking-wide text-brand-accent'>
              What happens with your submission
            </p>
            <p className='mt-3 text-sm text-brand-muted'>
              We review, structure, and add your experience to the Human Wisdom Database powering
              Tero. It keeps answers grounded in real lives—not scraped web content—while preserving
              attribution.
            </p>
            <p className='mt-4 text-sm text-brand-muted'>
              Ready to contribute? Share your details below. It is streamlined and call-free.
            </p>
          </Card>
        </div>
      </section>

      <section className='section space-y-8 rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm md:p-12'>
        <div className='text-center md:text-left'>
          <h2 className='h2'>How it works</h2>
          <p className='p mt-2 max-w-3xl'>
            A simple path to add your experience to the Human Wisdom Database. No scheduling calls—
            just your expertise captured and put to work.
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

      <section className='section'>
        <div className='grid gap-12 rounded-3xl border border-black/5 bg-white/90 px-6 py-10 shadow-sm md:grid-cols-[1.05fr_.95fr] md:px-10 md:py-12'>
          <div className='text-center md:text-left'>
            <h2 className='h2 text-balance'>Join the Shell-less Mentor roster</h2>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              Complete the form to add your expertise to the Human Wisdom Database. Submissions are
              saved to the Supabase{' '}
              <code className='rounded bg-black/5 px-2 py-1 text-xs font-semibold'>mentor_submissions</code>{' '}
              table and trigger an email notification via Resend to partners@edterm.com for rapid
              inclusion.
            </p>
            <div className='mt-6 grid gap-3 text-sm text-brand-muted'>
              <div className='rounded-2xl border border-dashed border-brand-accent/30 bg-brand-accent/5 px-4 py-3'>
                Ideal for veterans, accomplished parents, teachers, social innovators, and builders.
              </div>
              <div className='rounded-2xl border border-dashed border-brand-accent/30 bg-brand-accent/5 px-4 py-3'>
                Contributions can be live, asynchronous, or shared as written reflections.
              </div>
            </div>
          </div>
          <MentorForm />
        </div>
      </section>
    </div>
  );
}
