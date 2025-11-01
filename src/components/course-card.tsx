import StarRating from './star-rating';
import { Button } from './ui/button';
import { Card } from './ui/card';

type Tone = 'indigo' | 'green' | 'purple' | 'blue' | 'orange' | 'teal';
const toneStyles: Record<Tone, string> = {
  indigo: 'from-[#dee3ff] via-[#eef1ff] to-[#f6f7ff]',
  green: 'from-[#dff6ea] via-[#ebfbf2] to-[#f6fef9]',
  purple: 'from-[#f0e6ff] via-[#f6f0ff] to-[#fbf7ff]',
  blue: 'from-[#d9f0ff] via-[#eaf7ff] to-[#f5fbff]',
  orange: 'from-[#ffe9d6] via-[#fff3e6] to-[#fff9f3]',
  teal: 'from-[#d9fbf7] via-[#ecfffb] to-[#f5fffd]',
};

type Props = {
  title: string;
  rating: number;
  hours: string;
  tone?: Tone;
};

export default function CourseCard({ title, rating, hours, tone = 'indigo' }: Props) {
  return (
    <Card className='group flex h-full flex-col gap-3 rounded-3xl border border-black/5 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
      <div
        className={`relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${toneStyles[tone]}`}
      >
        <div className='absolute -left-8 top-6 h-28 w-28 rounded-full bg-white/60' />
        <div className='absolute right-4 -bottom-10 h-36 w-36 rounded-[40px] bg-white/40' />
        <div className='absolute inset-0 bg-black/5 opacity-0 transition duration-300 group-hover:opacity-100' />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-start justify-between gap-3'>
          <h4 className='text-base font-semibold text-black'>{title}</h4>
          <Button className='rounded-xl px-3 py-1 text-xs font-medium' variant='primary'>
            Enroll
          </Button>
        </div>
        <div className='flex items-center justify-between'>
          <StarRating value={rating} />
          <span className='small'>{hours} hrs</span>
        </div>
      </div>
    </Card>
  );
}
