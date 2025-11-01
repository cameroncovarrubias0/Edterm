import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import FallbackImage from '@/components/fallback-image';
import { blogPosts } from '@/data/blog-posts';

type BlogPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = blogPosts.find(({ slug }) => slug === params.slug);
  if (!post) {
    return {
      title: 'Blog post not found — Education Terminal',
    };
  }

  return {
    title: `${post.title} | EdTerm Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find(({ slug }) => slug === params.slug);

  if (!post) {
    notFound();
  }

  const publishedOn = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className='section space-y-12 py-16 md:py-24'>
      <header className='mx-auto max-w-3xl space-y-6'>
        <div>
          <p className='small font-semibold uppercase tracking-[0.2em] text-brand-muted'>
            {post.category}
          </p>
          <h1 className='mt-3 text-4xl font-semibold tracking-tight text-black md:text-5xl'>
            {post.title}
          </h1>
        </div>
        <div className='flex flex-wrap items-center gap-3 text-sm text-brand-muted'>
          <span>{publishedOn}</span>
          <span aria-hidden='true'>•</span>
          <span className='inline-flex items-center gap-2 text-brand-accent'>
            <Sparkles className='size-4' aria-hidden='true' />
            {post.readingTime}
          </span>
        </div>
      </header>

      <div className='mx-auto max-w-3xl space-y-8 text-base leading-7 text-brand-muted'>
        <Card className='overflow-hidden border-black/5 bg-gradient-to-br from-[#eef2ff] via-white to-[#f9f5ff] p-0 shadow-sm'>
          <div className='relative aspect-[16/10] bg-white/40 sm:aspect-[5/3]'>
            <FallbackImage
              src={post.imageSrc}
              alt={post.title}
              fill
              sizes='(min-width: 1024px) 720px, 100vw'
              className='object-contain drop-shadow-lg sm:p-12'
              priority
            />
          </div>
        </Card>

        <div className='space-y-6'>
          {post.content.map((block, index) => {
            const key = `${post.slug}-block-${index}`;
            if (block.type === 'heading') {
              return (
                <h2
                  key={key}
                  className='text-2xl font-semibold tracking-tight text-black'
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'list') {
              return (
                <ul
                  key={key}
                  className='list-disc space-y-2 pl-6 text-brand-muted'
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={`${key}-item-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={key}>{block.text}</p>;
          })}
        </div>
      </div>
    </article>
  );
}
