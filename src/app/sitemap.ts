import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.edterm.com';

const routes = ['/', '/foundation', '/partners', '/mentors', '/tero'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
