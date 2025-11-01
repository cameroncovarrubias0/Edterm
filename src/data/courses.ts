export type CourseTone = 'indigo' | 'green' | 'purple' | 'blue' | 'orange' | 'teal';

export type Course = {
  slug: string;
  title: string;
  provider: string;
  category: string;
  rating: number;
  hours: string;
  tone: CourseTone;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

export const courses: Course[] = [
  {
    slug: 'generative-ai-foundations',
    title: 'Generative AI Foundations',
    provider: 'Coursera',
    category: 'AI & Data',
    rating: 4.8,
    hours: '95-140',
    tone: 'indigo',
    level: 'Intermediate',
  },
  {
    slug: 'prompt-engineering-lab',
    title: 'Prompt Engineering Lab',
    provider: 'Udemy',
    category: 'AI & Data',
    rating: 4.7,
    hours: '20-35',
    tone: 'purple',
    level: 'Beginner',
  },
  {
    slug: 'ethical-ai-systems',
    title: 'Ethical AI Systems',
    provider: 'edX',
    category: 'AI & Data',
    rating: 4.6,
    hours: '30-48',
    tone: 'blue',
    level: 'Intermediate',
  },
  {
    slug: 'sustainable-tech-innovation',
    title: 'Sustainable Tech Innovation',
    provider: 'FutureLearn',
    category: 'Sustainability',
    rating: 4.9,
    hours: '25-40',
    tone: 'green',
    level: 'Beginner',
  },
  {
    slug: 'climate-action-design',
    title: 'Climate Action Design Sprint',
    provider: 'General Assembly',
    category: 'Sustainability',
    rating: 4.8,
    hours: '18-24',
    tone: 'teal',
    level: 'Intermediate',
  },
  {
    slug: 'cyberbiosecurity-essentials',
    title: 'Cyberbiosecurity Essentials',
    provider: 'Coursera',
    category: 'Life Sciences',
    rating: 4.7,
    hours: '40-60',
    tone: 'orange',
    level: 'Intermediate',
  },
  {
    slug: 'digital-lab-defense',
    title: 'Digital Lab Defense',
    provider: 'Pluralsight',
    category: 'Life Sciences',
    rating: 4.5,
    hours: '22-30',
    tone: 'blue',
    level: 'Advanced',
  },
  {
    slug: 'remote-leadership-studio',
    title: 'Remote Leadership Studio',
    provider: 'LinkedIn Learning',
    category: 'Leadership',
    rating: 4.6,
    hours: '12-18',
    tone: 'indigo',
    level: 'Intermediate',
  },
  {
    slug: 'human-centered-strategy',
    title: 'Human-Centered Strategy',
    provider: 'IDEO U',
    category: 'Leadership',
    rating: 4.9,
    hours: '16-22',
    tone: 'purple',
    level: 'Advanced',
  },
  {
    slug: 'no-code-product-sprints',
    title: 'No-Code Product Sprints',
    provider: 'Makerpad',
    category: 'Product & Design',
    rating: 4.7,
    hours: '15-28',
    tone: 'orange',
    level: 'Beginner',
  },
  {
    slug: 'immersive-ui-design',
    title: 'Immersive UI Design',
    provider: 'Skillshare',
    category: 'Product & Design',
    rating: 4.8,
    hours: '24-36',
    tone: 'blue',
    level: 'Intermediate',
  },
  {
    slug: 'mindful-product-management',
    title: 'Mindful Product Management',
    provider: 'Udacity',
    category: 'Product & Design',
    rating: 4.5,
    hours: '34-48',
    tone: 'teal',
    level: 'Advanced',
  },
];
