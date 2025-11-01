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
  country: z.string().optional(),
  message: z.string().optional(),
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
      country: '',
      message: '',
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (values: MentorFormValues) => {
    setError(null);
    setSuccess(false);

    const res = await fetch('/api/mentor-submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
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
    reset();
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
          <label htmlFor='mentor-country' className='mb-1 block text-sm font-medium text-black'>
            Country (optional)
          </label>
          <Input
            id='mentor-country'
            placeholder='e.g. Pakistan'
            autoComplete='country-name'
            {...register('country')}
          />
        </div>
        <div>
          <label htmlFor='mentor-message' className='mb-1 block text-sm font-medium text-black'>
            Notes or context (optional)
          </label>
          <Textarea
            id='mentor-message'
            rows={4}
            placeholder='Share a little about your background or interests.'
            {...register('message')}
          />
        </div>
        <div className='flex items-center gap-3'>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Submitting…' : 'Join the mentor list'}
          </Button>
          {error && <p className='small text-red-600'>{error}</p>}
        </div>
      </form>
      {success && (
        <Card className='mt-4 rounded-2xl border border-brand-accent/20 bg-brand-accent/10 p-4'>
          <p className='small text-brand-accent'>
            Thanks! We&apos;ve stored your details and alerted the EdTerm team. Expect a reply soon.
          </p>
        </Card>
      )}
    </div>
  );
}
