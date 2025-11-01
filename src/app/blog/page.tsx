import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import FallbackImage from '@/components/fallback-image';
import { blogPosts } from '@/data/blog-posts';
import BlogPostCard from '@/components/blog-post-card';

export const metadata: Metadata = {
  title: 'EdTerm Blog — Lifelong Learning Insights',
  description:
    'Read the latest stories from Education Terminal. Explore learning pathways, mentor spotlights, and product updates that shape the EdTerm experience.',
};

export default function BlogIndex() {
  const posts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <section className='section pt-16 pb-12 md:pt-24 md:pb-20'>
        <div className='grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]'>
          <div className='text-center md:text-left'>
            <p className='small font-semibold uppercase tracking-[0.2em] text-brand-muted'>
              Education Terminal
            </p>
            <h1 className='h1 text-balance'>Stories from the EdTerm team.</h1>
            <p className='p mx-auto mt-4 max-w-2xl md:mx-0'>
              Dive into learning pathways, mentor spotlights, and the product
              roadmap that brings Education Terminal to life. Final client copy
              can replace these placeholders as soon as it is ready.
            </p>
          </div>
          <Card className='relative mx-auto flex h-[300px] w-full max-w-sm items-center justify-center rounded-3xl border border-black/10 bg-gradient-to-br from-[#eef2ff] via-white to-[#f9f5ff] shadow-[0_20px_45px_rgba(36,45,90,0.15)] md:max-w-none md:h-[340px]'>
            <div className='relative h-[240px] w-full max-w-md md:h-[280px]'>
              <FallbackImage
                src='/images/tero.png'
                alt='Tero mentor illustration'
                fill
                className='object-contain drop-shadow-lg'
                priority
              />
            </div>
          </Card>
        </div>
      </section>

      <section className='section pb-20'>
        <div className='mx-auto mb-8 text-center md:text-left'>
          <h2 className='h2'>Latest posts</h2>
          <p className='small mt-2 text-brand-muted'>
            The stories below use placeholder copy until the final blog drafts
            arrive from the client.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {posts.map((post, index) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              imagePriority={index === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
