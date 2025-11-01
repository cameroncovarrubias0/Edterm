import type { Metadata } from 'next';
import { BookOpenCheck, GraduationCap, Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/course-card';
import { courses } from '@/data/courses';

const categories = Array.from(new Set(courses.map((course) => course.category)));
const levels = Array.from(new Set(courses.map((course) => course.level)));

export const metadata: Metadata = {
  title: 'Explore Courses | Education Terminal',
  description:
    'Browse high-impact online programs across AI, sustainability, life sciences, product design, and leadership. Curated by Education Terminal for lifelong learners.',
};

export default function CoursesPage() {
  return (
    <>
      <section className='section pt-16 pb-12 md:pt-24 md:pb-20'>
        <div className='grid items-center gap-12 md:grid-cols-[1.05fr_.95fr]'>
          <div className='text-center md:text-left'>
            <p className='small font-semibold uppercase tracking-[0.2em] text-brand-muted'>
              Course Library
            </p>
            <h1 className='h1 text-balance'>Curated paths for every learner.</h1>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              Education Terminal scouts the web for courses that pair adaptive AI mentorship with
              human wisdom. Use the quick filters below to explore new skills, industries, and
              impact-driven fields—each with ratings, time commitments, and suggested next steps.
            </p>
            <div className='mt-8 flex flex-col gap-4'>
              <div className='mx-auto flex w-full max-w-xl items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm transition focus-within:border-black/20 focus-within:ring-2 focus-within:ring-brand-accent/20 md:mx-0'>
                <Search className='size-5 text-black/40' aria-hidden='true' />
                <Input
                  aria-label='Search courses'
                  className='border-0 p-0 text-base shadow-none focus-visible:ring-0'
                  placeholder='Search course titles, categories, or providers'
                />
                <Button className='px-4 py-2 text-sm font-semibold'>Search</Button>
              </div>
              <div className='flex flex-wrap items-center justify-center gap-3 text-xs font-medium md:justify-start'>
                <span className='inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-black'>
                  <BookOpenCheck className='size-4' aria-hidden='true' />
                  Hand-picked catalogs
                </span>
                <span className='inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-black'>
                  <GraduationCap className='size-4' aria-hidden='true' />
                  Mentor-aligned outcomes
                </span>
              </div>
            </div>
          </div>
          <div className='rounded-3xl border border-black/10 bg-gradient-to-br from-[#eef2ff] via-white to-[#f4f8ff] p-6 shadow-[0_20px_45px_rgba(36,45,90,0.12)]'>
            <h2 className='text-lg font-semibold text-black'>How to use this library</h2>
            <p className='small mt-3 text-brand-muted'>
              Pick a category to surface niche courses, compare time commitments, then jump to the
              provider to enroll. Each selection pairs well with the Shell-less Mentor pathways for
              deeper guidance.
            </p>
            <div className='mt-6 grid gap-3 text-sm'>
              <div className='rounded-2xl border border-black/10 bg-white/80 px-4 py-3'>
                Step 1 — Choose an emerging field or skill track.
              </div>
              <div className='rounded-2xl border border-black/10 bg-white/80 px-4 py-3'>
                Step 2 — Review hours & level to match your capacity.
              </div>
              <div className='rounded-2xl border border-black/10 bg-white/80 px-4 py-3'>
                Step 3 — Pair with a mentor session for accountability.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section pb-20'>
        <div className='flex flex-col gap-4 rounded-3xl border border-black/5 bg-white px-5 py-6 shadow-sm md:flex-row md:items-center md:justify-between md:px-8'>
          <div className='flex flex-wrap items-center gap-3'>
            <Button variant='outline' className='inline-flex items-center gap-2'>
              <SlidersHorizontal className='size-4' aria-hidden='true' />
              All filters
            </Button>
            {categories.map((category) => (
              <Button key={category} variant='ghost' className='rounded-full border border-black/10'>
                {category}
              </Button>
            ))}
          </div>
          <div className='flex flex-wrap items-center gap-3'>
            {levels.map((level) => (
              <Button key={level} variant='ghost' className='rounded-full border border-black/10'>
                {level}
              </Button>
            ))}
          </div>
        </div>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {courses.map((course) => (
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
    </>
  );
}
