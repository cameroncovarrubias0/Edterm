import type { Metadata } from 'next';
import FallbackImage from '@/components/fallback-image';
import { Card } from '@/components/ui/card';
import PartnerForm from '@/components/partner-form';

export const metadata: Metadata = {
  title: 'EdTerm Foundation | Empowering Human Wisdom Worldwide',
  description:
    'The EdTerm Foundation advances mentorship access, human-centered AI, and community impact for lifelong learning.',
  openGraph: {
    title: 'EdTerm Foundation | Empowering Human Wisdom Worldwide',
    description:
      'Discover how the EdTerm Foundation connects human experience, mentorship, and technology to expand lifelong learning.',
    url: 'https://www.edterm.com/foundation',
    type: 'website',
  },
};

export default function FoundationPage() {
  return (
    <>
      <section className='section pt-16 pb-12 md:pt-24 md:pb-16'>
        <div className='grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]'>
          <div className='text-center md:text-left'>
            <span className='small font-medium uppercase tracking-wide text-brand-accent'>
              EdTerm Foundation
            </span>
            <h1 className='h1 mt-2 text-balance'>Empowering Human Wisdom Worldwide.</h1>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              The EdTerm Foundation is the social-impact arm of EdTerm, focused
              on extending mentorship access and lifelong learning opportunities
              to communities everywhere.
            </p>
          </div>
          <Card className='relative mx-auto grid h-[280px] w-full max-w-md place-items-center overflow-hidden rounded-3xl border border-black bg-black text-white shadow-[0_20px_45px_rgba(0,0,0,0.35)] md:max-w-none md:h-[340px]'>
            <div className='relative flex w-full max-w-md flex-col items-center gap-6 px-6 text-center text-sm text-white/80'>
              <div className='relative h-[160px] w-full max-w-[220px]'>
                <FallbackImage
                  src='/images/tero.png'
                  alt='Tero mentor illustration'
                  fill
                  className='object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]'
                  priority
                />
              </div>
              <p>
                Placeholder area for combined Tero + Shell-less Mentors artwork.
                Replace when final assets land.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className='section pb-16' id='mission'>
        <Card className='rounded-3xl border border-black/5 bg-white px-6 py-10 text-center shadow-sm md:px-10 md:text-left'>
          <h2 className='h2 text-center md:text-left'>Our Mission</h2>
          <p className='p mx-auto mt-4 max-w-3xl md:mx-0'>
            The EdTerm Foundation drives our social mission—connecting human
            experience, mentorship, and technology to inspire lifelong learning
            and global opportunity.
          </p>
          <div className='mt-6 grid gap-4 sm:grid-cols-3'>
            {[
              'Champion human wisdom as the core of adaptive learning.',
              'Deliver mentorship programs that reach learners everywhere.',
              'Invest in technology that keeps education purpose-driven.',
            ].map((item) => (
              <div
                key={item}
                className='rounded-2xl border border-dashed border-brand-accent/30 bg-white/70 p-4 text-sm text-brand-muted'
              >
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className='section pb-16' id='programs'>
        <h2 className='h2 mb-4 text-center md:text-left'>Programs We Are Launching</h2>
        <p className='p mx-auto max-w-3xl text-center md:mx-0 md:text-left'>
          These initiatives outline how the foundation will activate community
          partnerships and extend access. Each card holds a placeholder summary
          until detailed program copy arrives.
        </p>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {[
            {
              title: 'Shell-less Mentors Initiative',
              body: 'Expand human wisdom capture, mentor onboarding, and storytelling across regions.',
            },
            {
              title: 'AI-integrated Learning Access',
              body: 'Deploy responsible AI tools like Tero to underserved communities and schools.',
            },
            {
              title: 'Community Impact Partnerships',
              body: 'Collaborate with educators, veterans, and innovators to scale lifelong learning programs.',
            },
          ].map((program) => (
            <Card
              key={program.title}
              className='rounded-3xl border border-black/5 bg-white px-6 py-8 shadow-sm'
            >
              <h3 className='text-lg font-semibold text-black'>{program.title}</h3>
              <p className='small mt-2'>{program.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className='section pb-20' id='get-involved'>
        <div className='grid gap-10 md:grid-cols-[.9fr_1.1fr] md:items-start'>
          <Card className='rounded-3xl border border-black/5 bg-white px-6 py-8 text-center shadow-sm md:px-10 md:py-10 md:text-left'>
            <h2 className='h2'>Get Involved</h2>
            <p className='p mx-auto mt-4 max-w-xl md:mx-0'>
              Share how you would like to support the foundation—whether as a
              sponsor, mentor, or community connector. Submissions are stored in
              Supabase for easy follow-up. Email automation will be added in a
              future release.
            </p>
            <p className='small mt-4 text-brand-muted'>
              Suggestions: add grant timelines, program calendars, or regional
              updates here when they are available.
            </p>
          </Card>
          <Card className='rounded-3xl border border-black/5 bg-white px-6 py-8 shadow-sm md:px-10 md:py-10'>
            <PartnerForm cta='Send interest' />
          </Card>
        </div>
      </section>
    </>
  );
}
