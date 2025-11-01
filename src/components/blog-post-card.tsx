import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import FallbackImage from '@/components/fallback-image';
import type { BlogPost } from '@/data/blog-posts';

type BlogPostCardProps = {
  post: BlogPost;
  imagePriority?: boolean;
};

export default function BlogPostCard({
  post,
  imagePriority = false,
}: BlogPostCardProps) {
  const publishedOn = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className='group'>
      <Card className='flex h-full flex-col overflow-hidden border-black/5 bg-white p-0 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md'>
        <div className='px-4 pt-4'>
          <Card className='relative aspect-[14/12] overflow-hidden border-black/10 bg-gradient-to-br from-[#eef2ff] via-white to-[#f9f5ff] p-0 shadow-none transition duration-200 group-hover:shadow-md'>
            <FallbackImage
              src={post.imageSrc}
              alt={post.title}
              fill
              priority={imagePriority}
              sizes='(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw'
              className=' object-cover  drop-shadow-lg'
            />
          </Card>
        </div>
        <div className='flex flex-1 flex-col p-6'>
          <span className='small font-medium uppercase tracking-wide text-brand-accent'>
            {post.category}
          </span>
          <h3 className='mt-3 text-lg font-semibold text-black'>
            {post.title}
          </h3>
          <p className='small mt-2 flex-1 text-brand-muted'>{post.excerpt}</p>
          <div className='small mt-6 flex items-center gap-2 text-brand-accent'>
            <Sparkles className='size-4' aria-hidden='true' />
            <span>
              {publishedOn} · {post.readingTime}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
