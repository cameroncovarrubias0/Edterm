export type BlogPostContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  imageSrc: string;
  excerpt: string;
  content: BlogPostContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'emerging-fields-you-can-learn-online',
    title: '3 Emerging Fields You Can Learn Online',
    category: 'Future Skills',
    publishedAt: '2024-06-12',
    readingTime: '7 min read',
    imageSrc: '/images/blog/1.png',
    excerpt:
      'Explore generative AI, cyberbiosecurity, and sustainable tech—three high-impact fields that learners can start mastering from home.',
    content: [
      {
        type: 'paragraph',
        text: 'By Education Terminal (EdTerm)',
      },
      {
        type: 'heading',
        text: '1. Generative AI and Prompt Engineering: The Next Online Learning Frontier',
      },
      {
        type: 'paragraph',
        text: 'Generative AI refers to systems that create fresh content—text, images, code, or video—based on patterns they have learned. Prompt engineering is the craft of asking the right questions so those systems produce meaningful outputs. As teams embed AI tools across every function, knowing how to command, refine, and apply them is becoming an essential career skill.',
      },
      {
        type: 'paragraph',
        text: 'Why learn it online? Platforms like Coursera, Udemy, and edX let you start from scratch through guided tracks, hands-on projects, and case studies. Even learners with no programming background can build a foundation in artificial intelligence and begin experimenting with creative applications.',
      },
      {
        type: 'paragraph',
        text: 'How to get started:',
      },
      {
        type: 'list',
        items: [
          'Choose a beginner course in AI and machine learning.',
          'Take a focused class on prompt engineering and generative models.',
          'Build a small portfolio with sample outputs—text, designs, or automations.',
          'Apply your skills to real-world problems or freelance opportunities.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Generative AI and prompt engineering are accessible yet high-impact learning paths. If you want a skill that is both future-proof and creative, this is the perfect time to start.',
      },
      {
        type: 'heading',
        text: '2. Cyberbiosecurity: Where Life Sciences Meet Digital Defense',
      },
      {
        type: 'paragraph',
        text: 'Cyberbiosecurity sits at the intersection of biology, data, and cybersecurity. As biotechnology becomes increasingly digital, protecting genetic data, lab systems, and research workflows is critical. Because cyberbiosecurity blends multiple disciplines, online learning is ideal for exploring the field at your own pace.',
      },
      {
        type: 'paragraph',
        text: 'Learning path:',
      },
      {
        type: 'list',
        items: [
          'Start with a foundational biology or bioinformatics course.',
          'Study core cybersecurity and network defense concepts.',
          'Complete a focused class in biosecurity or biotech risk management.',
          'Create a capstone project, like a digital threat analysis for a biotech workflow.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Cyberbiosecurity is not yet mainstream—but that is what makes it exciting. For learners who want to stand out, it bridges two critical industries: technology and the life sciences.',
      },
      {
        type: 'heading',
        text: '3. Sustainable Tech and Green Innovation: Learning the Future of Our Planet Online',
      },
      {
        type: 'paragraph',
        text: 'Sustainable technology uses innovation to solve environmental challenges—optimizing renewable energy, designing eco-friendly products, and managing data for greener cities. You do not need to work for a large energy company to contribute; online programs make sustainability accessible to everyone.',
      },
      {
        type: 'paragraph',
        text: 'How to get started:',
      },
      {
        type: 'list',
        items: [
          'Begin with an introductory sustainability or climate-action course.',
          'Explore topics like renewable energy, green design, or eco-entrepreneurship.',
          'Join an online community where learners share climate-positive projects.',
          'Launch a local initiative—analyzing energy use, reducing waste, or creating a recycling plan.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Sustainability is not just a career—it is a mindset. By learning how technology can protect the planet, you are preparing for the future while making a tangible impact today.',
      },
    ],
  },
  {
    slug: 'building-momentum-without-burnout',
    title: 'Building Momentum Without Burnout',
    category: 'Learning Pathways',
    publishedAt: '2024-06-01',
    readingTime: '4 min read',
    imageSrc: '/images/tero_copy.png',
    excerpt:
      'Balance consistency and rest with practical routines that keep your learning goals on track without sacrificing well-being.',
    content: [
      {
        type: 'paragraph',
        text: 'Momentum thrives on small, consistent wins. This guide explores a sustainable rhythm that keeps your curiosity alive while protecting your energy.',
      },
      {
        type: 'heading',
        text: 'Identify your sustainable cadence',
      },
      {
        type: 'paragraph',
        text: 'Set weekly or biweekly checkpoints instead of rigid daily quotas. Allow flexibility for busier weeks so you remain motivated even when life interrupts.',
      },
      {
        type: 'heading',
        text: 'Design rituals that signal focus',
      },
      {
        type: 'paragraph',
        text: 'Simple rituals—a specific playlist, a workspace refresh, or a five-minute intention journal—can train your brain to enter a productive state quickly.',
      },
      {
        type: 'heading',
        text: 'Plan for recovery as seriously as work',
      },
      {
        type: 'paragraph',
        text: 'Schedule deliberate rest so you return to your learning path with clarity. Active recovery, such as taking a walk or chatting with peers, often unlocks new insights.',
      },
    ],
  },
  {
    slug: 'human-wisdom-in-a-digital-shell',
    title: 'Human Wisdom in a Digital Shell',
    category: 'Mentor Stories',
    publishedAt: '2024-05-18',
    readingTime: '6 min read',
    imageSrc: '/images/tero_copy.png',
    excerpt:
      'Shell-less Mentors infuse Tero with empathy and experience, creating AI guidance that still feels human.',
    content: [
      {
        type: 'paragraph',
        text: 'Shell-less Mentors contribute lived wisdom to help shape every learner interaction with Tero. Their stories ensure EdTerm feels personal, not prescriptive.',
      },
      {
        type: 'heading',
        text: 'Mentorship that scales with care',
      },
      {
        type: 'paragraph',
        text: 'Each mentor engagement is documented, anonymized, and then transformed into coaching patterns. Those patterns fuel Tero, enabling millions of learners to benefit from shared human insight.',
      },
      {
        type: 'heading',
        text: 'Continuous feedback loops',
      },
      {
        type: 'paragraph',
        text: 'Mentors regularly review conversations, flag nuance that AI might miss, and fine-tune tone. The result is adaptive guidance that feels supportive rather than algorithmic.',
      },
      {
        type: 'heading',
        text: 'Honoring the humans behind the interface',
      },
      {
        type: 'paragraph',
        text: 'A Shell-less Mentor’s journey is as important as the model itself. We spotlight their stories throughout the platform, reminding learners that technology amplifies human care—it never replaces it.',
      },
    ],
  },
  {
    slug: 'charting-the-next-release',
    title: 'Charting the Next Release',
    category: 'Product Updates',
    publishedAt: '2024-05-04',
    readingTime: '3 min read',
    imageSrc: '/images/tero_copy.png',
    excerpt:
      'A behind-the-scenes look at the roadmap powering EdTerm’s next milestone features and refinements.',
    content: [
      {
        type: 'paragraph',
        text: 'Our product roadmap is designed around learner feedback, mentor insights, and partner priorities. Here is what we are building for the next release.',
      },
      {
        type: 'heading',
        text: 'Smarter course recommendations',
      },
      {
        type: 'paragraph',
        text: 'We are refining discovery with contextual signals—career goals, time commitment, and preferred learning style—to deliver more relevant course matches.',
      },
      {
        type: 'heading',
        text: 'Deeper mentor matchmaking',
      },
      {
        type: 'paragraph',
        text: 'Upcoming updates streamline mentor availability and introduce video-first introductions so learners can meet their guide before the first session.',
      },
      {
        type: 'heading',
        text: 'Transparent partner insights',
      },
      {
        type: 'paragraph',
        text: 'Partners will soon access dashboards summarizing learner engagement and outcomes, helping them refine their offerings alongside EdTerm’s growth.',
      },
    ],
  },
];
