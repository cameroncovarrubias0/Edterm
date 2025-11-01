import { Star } from 'lucide-react';
export default function StarRating({ value = 4.8 }: { value?: number }) {
  const filled = Math.round(Math.min(5, Math.max(0, value)));
  return (
    <div className='flex items-center gap-1'>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < filled ? 'fill-brand-accent text-brand-accent' : 'text-black/20'
          }
        />
      ))}
      <span className='small ml-1'>{value.toFixed(1)}</span>
    </div>
  );
}
