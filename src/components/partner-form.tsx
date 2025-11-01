'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { supabaseBrowser } from '@/lib/supabase-browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().optional(),
  message: z.string().optional(),
});
type Values = z.infer<typeof Schema>;

export default function PartnerForm({ cta = 'Submit' }: { cta?: string }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Values>();
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async (values: Values) => {
    setErr(null);
    const { error } = await supabaseBrowser.from('partners').insert(values);
    if (error) return setErr(error.message);
    setOk(true);
  };

  return (
    <div className='max-w-xl'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label className='block text-sm mb-1'>Name</label>
          <Input
            placeholder='Your name'
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <label className='block text-sm mb-1'>Email</label>
          <Input
            type='email'
            placeholder='you@domain.com'
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <label className='block text-sm mb-1'>Country (optional)</label>
          <Input placeholder='e.g. Pakistan' {...register('country')} />
        </div>
        <div>
          <label className='block text-sm mb-1'>Message (optional)</label>
          <textarea
            className='w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30'
            rows={4}
            {...register('message')}
          />
        </div>
        <div className='flex items-center gap-3'>
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting…' : cta}
          </Button>
          {err && <p className='small text-red-600'>{err}</p>}
        </div>
      </form>
      {ok && (
        <Card className='p-4 mt-4 bg-green-400/15'>
          <p className='small'>
            Thanks! We’ve received your interest. We’ll be in touch soon.
          </p>
        </Card>
      )}
    </div>
  );
}
