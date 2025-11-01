import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  Globe,
  Layers3,
  Search,
  Users,
  HeartHandshake,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FallbackImage from '@/components/fallback-image';
import { Input } from '@/components/ui/input';
import CourseCard from '@/components/course-card';
import { blogPosts } from '@/data/blog-posts';
import BlogPostCard from '@/components/blog-post-card';
import { courses as catalogCourses } from '@/data/courses';

export const metadata: Metadata = {
  title: 'EdTerm | The Terminal for Lifelong Learning',
  description:
    'Discover Tero, Shell-less Mentors, and the EdTerm Foundation. Explore courses, compare programs, and partner with us to expand lifelong learning.',
  openGraph: {
    title: 'EdTerm | The Terminal for Lifelong Learning',
    description:
      'EdTerm blends human wisdom with adaptive AI mentorship. Explore courses, meet Tero, and connect with the Shell-less Mentors initiative.',
    url: 'https://www.edterm.com',
    type: 'website',
  },
};

const quickLinks = [
  { label: 'Learn About Tero', href: '/tero' },
  { label: 'Shell-less Mentors', href: '/mentors' },
  { label: 'The Foundation', href: '/foundation' },
] as const;

const howItWorks = [
  {
    icon: Search,
    title: 'Search what you want to learn',
    copy: 'Surface programs, mentors, and providers in a single place.',
  },
  {
    icon: Layers3,
    title: 'Compare top courses',
    copy: 'Ratings, time, and outcomes displayed side by side.',
  },
  {
    icon: CheckCircle,
    title: 'Enroll instantly',
    copy: 'Jump straight to trusted providers to start learning.',
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className='section pt-16 pb-12 md:pt-24 md:pb-20'>
        <div className='grid items-center gap-12 md:grid-cols-[1.05fr_.95fr]'>
          <div className='text-center md:text-left'>
            <p className='small font-semibold uppercase tracking-[0.2em] text-brand-muted'>
              Education Terminal
            </p>
            <h1 className='h1 text-balance'>
              The Terminal for Lifelong Learning.
            </h1>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              What do you want to learn today? Blend human wisdom with adaptive
              AI mentorship to find the right path forward.
            </p>
            <div className='mt-8 flex flex-col gap-4'>
              <div className='mx-auto flex w-full max-w-xl items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm transition focus-within:border-black/20 focus-within:ring-2 focus-within:ring-brand-accent/20 md:mx-0'>
                <Search className='size-5 text-black/40' aria-hidden='true' />
                <Input
                  aria-label='Search courses'
                  className='border-0 p-0 text-base shadow-none focus-visible:ring-0'
                  placeholder='Search thousands of courses, mentors, and topics'
                />
                <Button className='px-4 py-2 text-sm font-semibold'>
                  Search
                </Button>
              </div>
              <div className='flex flex-wrap items-center justify-center gap-2 md:justify-start'>
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='inline-flex'
                  >
                    <Button
                      variant='ghost'
                      className='rounded-full px-4 py-2 text-xs font-medium'
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Card className='relative mx-auto flex h-[300px] w-full max-w-sm items-center justify-center rounded-3xl border border-black/10 bg-gradient-to-br from-[#eef2ff] via-white to-[#f9f5ff] shadow-[0_20px_45px_rgba(36,45,90,0.15)] md:max-w-none md:h-[380px]'>
            <div className='relative h-[240px] w-full max-w-md md:h-[320px]'>
              <FallbackImage
                src='/images/tero.png'
                alt='Tero digital mentor illustration'
                fill
                className='object-contain drop-shadow-lg'
                priority
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Course Discovery */}
      <section className='section pb-16'>
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <h2 className='h2'>Course Discovery</h2>
          <Link
            href='/courses'
            className='small text-brand-accent hover:underline'
          >
            Explore all courses
          </Link>
        </div>
        <div className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
          {catalogCourses.slice(0, 6).map((course) => (
            <CourseCard
              key={course.slug}
              title={course.title}
              rating={course.rating}
              hours={course.hours}
              tone={course.tone}
            />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className='section pb-16'>
        <h2 className='h2 mb-6'>How It Works</h2>
        <div className='grid gap-4 md:grid-cols-3'>
          {howItWorks.map(({ icon: Icon, title, copy }) => (
            <Card
              key={title}
              className='flex flex-col gap-3 rounded-3xl border border-black/5 p-6 shadow-sm'
            >
              <span className='inline-flex size-10 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent'>
                <Icon className='size-5' aria-hidden='true' />
              </span>
              <div>
                <h3 className='text-base font-semibold text-black'>{title}</h3>
                <p className='small mt-1'>{copy}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why EdTerm */}
      <section className='section pb-16'>
        <div className='grid gap-12 md:grid-cols-[1.2fr_.8fr] md:items-center'>
          <div className='text-center md:text-left'>
            <h2 className='h2 mb-3'>Why EdTerm Exists</h2>
            <p className='p mx-auto max-w-xl md:mx-0'>
              EdTerm is a smart learning search engine—helping learners navigate
              thousands of courses across every subject. Our mission is to make
              discovery as seamless as booking a flight and connect the world
              with the best destinations for knowledge.
            </p>
            <div className='mt-6 flex flex-wrap justify-center gap-3 md:justify-start'>
              <Link href='/partners'>
                <Button className='min-w-[180px]'>Join as a Partner</Button>
              </Link>
              <Link
                href='/foundation'
                className='small text-brand-accent hover:underline'
              >
                Learn about the Foundation
              </Link>
            </div>
          </div>
          <Card className='mx-auto grid w-full max-w-md grid-cols-2 gap-4 rounded-3xl border border-black/5 bg-white px-6 py-8 text-center shadow-sm md:max-w-none md:grid-cols-3'>
            {['Coursera', 'Skillshare', 'Udemy'].map((name) => (
              <div
                key={name}
                className='flex h-16 items-center justify-center rounded-2xl border border-dashed border-black/10 text-sm font-medium text-brand-muted'
              >
                {name}
              </div>
            ))}
            <div className='col-span-2 flex h-16 items-center justify-center rounded-2xl border border-dashed border-black/10 text-sm font-medium text-brand-muted md:col-span-3'>
              More partner logos coming soon.
            </div>
          </Card>
        </div>
      </section>

      {/* Tero spotlight */}
      <section className='section pb-16'>
        <Card className='grid gap-8 rounded-3xl border border-black/5 bg-gradient-to-br from-[#f5f2ff] via-white to-[#eef7ff] px-6 py-10 shadow-sm md:grid-cols-[1.2fr_.8fr] md:px-10 md:py-12'>
          <div className='text-center md:text-left'>
            <span className='small font-medium uppercase tracking-wide text-brand-accent'>
              Tero mentors
            </span>
            <h2 className='h2 mt-2'>Tero — AI mentor spotlight</h2>
            <p className='p mx-auto mt-4 max-w-xl md:mx-0'>
              Tero learns from Shell-less Mentors to guide learners with empathy
              and adaptive insight. Replace this placeholder copy once the final
              narrative and assets arrive.
            </p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Key benefit placeholder copy will go here.',
                'Second highlight reserved for the client write-up.',
              ].map((text) => (
                <div
                  key={text}
                  className='rounded-2xl border border-dashed border-brand-accent/40 bg-white/70 p-4 text-sm text-brand-muted'
                >
                  {text}
                </div>
              ))}
            </div>
            <Link
              href='/tero'
              className='mt-6 inline-flex justify-center md:justify-start'
            >
              <Button className='min-w-[160px]' variant='outline'>
                Learn about Tero
              </Button>
            </Link>
          </div>
          <div className='relative flex h-[260px] w-full items-center justify-center rounded-3xl border border-black/5 bg-white/70 p-6 shadow-[0_18px_40px_rgba(36,45,90,0.12)]'>
            <FallbackImage
              src='/images/tero.png'
              alt='Tero mentor illustration'
              fill
              className='object-contain drop-shadow-lg'
            />
          </div>
        </Card>
      </section>

      {/* Shell-less Mentors */}
      <section className='section pb-16'>
        <Card className='grid gap-8 rounded-3xl border border-black/5 bg-white px-6 py-10 shadow-sm md:grid-cols-[.9fr_1.1fr] md:px-10 md:py-12'>
          <div className='relative mx-auto h-[260px] w-full max-w-md rounded-3xl border border-dashed border-black/15 bg-white/70 md:mx-0 md:max-w-none'>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-sm text-brand-muted'>
              Shell-less Mentors visual placeholder.
              <br />
              Swap in final asset once delivered.
            </div>
          </div>
          <div className='text-center md:text-left'>
            <span className='small font-medium uppercase tracking-wide text-brand-accent'>
              Shell-less mentors
            </span>
            <h2 className='h2 mt-2'>Wisdom Beyond the Shell</h2>
            <p className='p mx-auto mt-4 max-w-xl md:mx-0'>
              The Shell-less Mentors initiative connects retired professionals,
              veterans, and lifelong experts with learners worldwide. Their
              insights form the Human Wisdom Engine—the emotional core of Tero
              and EdTerm.
            </p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                {
                  heading: 'Story prompt',
                  body: 'Add the origin story or mission statement when ready.',
                },
                {
                  heading: 'Impact teaser',
                  body: 'Reserve this space for quick stats or mentor quotes.',
                },
              ].map(({ heading, body }) => (
                <div
                  key={heading}
                  className='rounded-2xl border border-dashed border-brand-accent/30 bg-white/70 p-4'
                >
                  <p className='text-sm font-semibold text-black'>{heading}</p>
                  <p className='small mt-1'>{body}</p>
                </div>
              ))}
            </div>
            <Link
              href='/mentors'
              className='mt-6 inline-flex justify-center md:justify-start'
            >
              <Button className='min-w-[170px]'>Become a Mentor</Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Foundation CTA */}
      <section className='section pb-16'>
        <Card className='grid gap-8 rounded-3xl border border-black/5 bg-white px-6 py-10 shadow-sm md:grid-cols-[1.1fr_.9fr] md:px-10 md:py-12'>
          <div className='text-center md:text-left'>
            <span className='small font-medium uppercase tracking-wide text-brand-accent'>
              EdTerm Foundation
            </span>
            <h2 className='h2 mt-2'>The EdTerm Foundation</h2>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              The EdTerm Foundation expands global access to mentorship and
              lifelong learning. We partner with educators, veterans, and
              innovators to make learning more human, accessible, and
              purpose-driven.
            </p>
            <div className='mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start'>
              <Link href='/foundation' className='inline-flex'>
                <Button className='min-w-[160px]'>Learn More</Button>
              </Link>
              <div className='flex items-center gap-2 rounded-2xl border border-brand-accent/20 bg-white/70 px-4 py-2 text-sm text-brand-muted'>
                <HeartHandshake
                  className='size-4 text-brand-accent'
                  aria-hidden='true'
                />
                <span>Built on partnership & purpose</span>
              </div>
            </div>
          </div>
          <div className='relative mx-auto h-[260px] w-full max-w-md rounded-3xl border border-dashed border-black/15 bg-white/70 md:mx-0 md:max-w-none'>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-sm text-brand-muted'>
              Placeholder for upcoming foundation imagery.
              <br />
              Replace once assets arrive.
            </div>
          </div>
        </Card>
      </section>

      {/* Blog */}
      <section className='section pb-16'>
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <h2 className='h2'>From the Blog</h2>
          <Link
            href='/blog'
            className='small text-brand-accent hover:underline'
          >
            View all updates
          </Link>
        </div>
        <div className='mt-6 grid gap-6 md:grid-cols-3'>
          {[...blogPosts]
            .sort(
              (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime(),
            )
            .slice(0, 3)
            .map((post, index) => (
              <BlogPostCard
                key={post.slug}
                post={post}
                imagePriority={index === 0}
              />
            ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section className='section pb-20'>
        <Card className='rounded-3xl border border-black/5 bg-gradient-to-br from-[#ede7ff] via-white to-[#f4f8ff] px-6 py-12 shadow-sm md:px-10'>
          <div className='grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-center'>
            <div>
              <span className='small font-medium uppercase tracking-wide text-brand-accent'>
                Affiliates & Partners
              </span>
              <h2 className='h2 mt-2'>Partner With Purpose</h2>
              <p className='p mt-4 max-w-xl'>
                Join the EdTerm Affiliate Network and help us grow access to
                mentorship and learning. Early partners gain recognition and
                first access to future Tero tools.
              </p>
            </div>
            <div className='flex flex-col items-start gap-4 md:items-end'>
              <Link href='/partners' className='inline-flex'>
                <Button className='min-w-[200px]'>
                  Join the Affiliate Network
                </Button>
              </Link>
              <div className='flex items-center gap-2 text-sm text-brand-muted md:text-right'>
                <Globe
                  className='size-4 text-brand-accent'
                  aria-hidden='true'
                />
                <span>Global-ready, mobile responsive, built for launch.</span>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
