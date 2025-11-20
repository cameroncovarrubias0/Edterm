/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const Schema = z.object({
  name: z.string().min(2, 'Please share your full name.'),
  email: z.string().email('A valid email helps us reply quickly.'),
  expertise: z.string().min(2, 'Let us know your primary area of expertise.'),
  experienceYears: z
    .number()
    .refine(
      (val) => Number.isFinite(val) && Number.isInteger(val),
      'Enter your total years of experience.'
    )
    .min(0, { message: 'Enter your total years of experience.' })
    .max(80, { message: 'Please enter a realistic number of years.' }),
  linkedin: z
    .union([z.string().url('Add a valid LinkedIn URL.'), z.literal('')])
    .optional(),
  message: z
    .string()
    .min(20, 'Share a short note about why you would like to mentor.'),
});

type MentorFormValues = z.infer<typeof Schema>;

export default function MentorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MentorFormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: '',
      email: '',
      expertise: '',
      experienceYears: undefined,
      linkedin: '',
      message: '',
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (values: MentorFormValues) => {
    setError(null);
    setSuccess(false);

    const payload = {
      name: values.name,
      email: values.email,
      expertise: values.expertise,
      experience_years: values.experienceYears,
      linkedin: values.linkedin?.trim() ? values.linkedin.trim() : null,
      message: values.message,
    };

    const res = await fetch('/api/mentor-submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      const message =
        typeof data?.error === 'string'
          ? data.error
          : 'Something went wrong while submitting. Please try again.';
      setError(message);
      return;
    }

    setSuccess(true);
    reset({
      name: '',
      email: '',
      expertise: '',
      experienceYears: undefined,
      linkedin: '',
      message: '',
    });
  };

  return (
    <div className='max-w-xl'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label htmlFor='mentor-name' className='mb-1 block text-sm font-medium text-black'>
            Full name
          </label>
          <Input
            id='mentor-name'
            placeholder='Your name'
            autoComplete='name'
            {...register('name')}
          />
          {errors.name && <p className='small mt-1 text-red-600'>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor='mentor-email' className='mb-1 block text-sm font-medium text-black'>
            Email
          </label>
          <Input
            id='mentor-email'
            type='email'
            placeholder='you@domain.com'
            autoComplete='email'
            {...register('email')}
          />
          {errors.email && <p className='small mt-1 text-red-600'>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor='mentor-expertise' className='mb-1 block text-sm font-medium text-black'>
            Area of expertise
          </label>
          <Input
            id='mentor-expertise'
            placeholder='e.g. Urban planning, Special education, Agriculture'
            autoComplete='organization-title'
            {...register('expertise')}
          />
          {errors.expertise && <p className='small mt-1 text-red-600'>{errors.expertise.message}</p>}
        </div>
        <div>
          <label
            htmlFor='mentor-experience'
            className='mb-1 block text-sm font-medium text-black'
          >
            Years of experience
          </label>
          <Input
            id='mentor-experience'
            type='number'
            min={0}
            max={80}
            placeholder='Select the closest number'
            {...register('experienceYears', { valueAsNumber: true })}
          />
          {errors.experienceYears && (
            <p className='small mt-1 text-red-600'>{errors.experienceYears.message}</p>
          )}
        </div>
        <div>
          <label htmlFor='mentor-linkedin' className='mb-1 block text-sm font-medium text-black'>
            LinkedIn (optional)
          </label>
          <Input
            id='mentor-linkedin'
            type='url'
            placeholder='https://www.linkedin.com/in/yourprofile'
            autoComplete='url'
            {...register('linkedin')}
          />
          {errors.linkedin && <p className='small mt-1 text-red-600'>{errors.linkedin.message}</p>}
        </div>
        <div>
          <label htmlFor='mentor-message' className='mb-1 block text-sm font-medium text-black'>
            Message or motivation
          </label>
          <Textarea
            id='mentor-message'
            rows={4}
            placeholder='Share why you want to support Shell-less Mentors and the communities you care about.'
            {...register('message')}
          />
          {errors.message && <p className='small mt-1 text-red-600'>{errors.message.message}</p>}
        </div>
        <div className='flex items-center gap-3'>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Submitting…' : 'Submit interest'}
          </Button>
          {error && <p className='small text-red-600'>{error}</p>}
        </div>
      </form>
      {success && (
        <Card className='mt-4 rounded-2xl border border-brand-accent/20 bg-brand-accent/10 p-4'>
          <p className='small text-brand-accent'>
            Thank you! Your submission is now in our mentor_submissions table and the partnerships
            team has been notified via email. Expect a response within three business days.
          </p>
        </Card>
      )}
    </div>
  );
}
