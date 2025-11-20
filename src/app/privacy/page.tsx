import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Privacy Policy | EdTerm',
  description:
    'Learn how EdTerm collects, stores, and protects personal data, plus how to exercise your GDPR rights.',
  keywords: [
    'EdTerm privacy policy',
    'GDPR compliance',
    'data protection',
    'cookies',
    'affiliate disclosure',
  ],
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'EdTerm Privacy Policy',
    description:
      'Details on data collection, storage, retention, and how to exercise your privacy rights with EdTerm.',
    url: 'https://edterm.com/privacy',
    type: 'article',
  },
};

const policyHighlights = [
  {
    title: 'Transparency first',
    description:
      'We collect only the information needed to deliver courses, match mentors, and improve your experience.',
  },
  {
    title: 'Secure infrastructure',
    description:
      'Supabase-managed databases, encrypted connections, and strict access controls safeguard every record.',
  },
  {
    title: 'You stay in control',
    description:
      'Request access, corrections, or deletion at any time, and we will respond within 30 days per GDPR.',
  },
];

const gdprSections = [
  {
    title: 'Data collection',
    body:
      'We gather profile details, learning preferences, mentor submissions, and payment history directly from you. ' +
      'We also generate technical logs (device, browser, IP, and usage patterns) to keep the platform secure.',
  },
  {
    title: 'Data storage & transfers',
    body:
      'All primary data lives in Supabase data centers located in the EU and U.S. Data is encrypted in transit with TLS ' +
      'and at rest with AES-256. Limited sub-processors assist with monitoring and backups under strict DPAs.',
  },
  {
    title: 'User rights under GDPR',
    body:
      'You may access a copy of your records, request corrections for inaccurate data, withdraw consent, object to processing, or ask for deletion. ' +
      'Contact partners@edterm.com and we will verify your identity before fulfilling the request.',
  },
];

const thirdParties = [
  {
    name: 'Supabase',
    purpose: 'Host databases, authentication, and mentor submissions.',
    data: 'Profile details, mentor form inputs, course preferences.',
  },
  {
    name: 'Google Analytics',
    purpose: 'Measure site traffic and improve product experience.',
    data: 'Pseudonymous usage data, device/browser information, aggregate engagement metrics.',
  },
  {
    name: 'Resend',
    purpose: 'Send operational messages such as mentor submission alerts.',
    data: 'Sender name, sender email, message body required to deliver notifications.',
  },
];

const userRights = [
  'Access – request a copy of the personal data stored about you.',
  'Correction – fix inaccurate or incomplete details (e.g., mentor profile, contact information).',
  'Deletion – ask us to remove your account or mentor submission when it is no longer needed.',
  'Restriction – pause processing whilst we verify disputes or legal obligations.',
  'Portability – receive your information in a machine-readable format when feasible.',
  'Objection – opt out of marketing messages and certain processing activities based on legitimate interests.',
];

export default function PrivacyPage() {
  return (
    <div className='space-y-20 py-16 md:py-24'>
      <section className='section text-center'>
        <p className='small font-semibold uppercase tracking-[0.2em] text-brand-accent'>
          Privacy & Compliance
        </p>
        <h1 className='h1 mt-3 text-balance'>EdTerm Privacy Policy</h1>
        <p className='p mx-auto mt-4 max-w-3xl'>
          This policy explains how EdTerm collects, uses, shares, and protects personal data for
          learners, Shell-less Mentors, and partners. The policy follows GDPR and other global
          privacy standards, ensuring you stay in control of your information across every touch
          point of the platform.
        </p>
      </section>

      <section className='section grid gap-6 md:grid-cols-3'>
        {policyHighlights.map((item) => (
          <Card
            key={item.title}
            className='h-full rounded-3xl border border-black/5 bg-white/80 p-6 text-left shadow-sm'
          >
            <h3 className='text-lg font-semibold text-black'>{item.title}</h3>
            <p className='mt-2 text-sm text-brand-muted'>{item.description}</p>
          </Card>
        ))}
      </section>

      <section className='section space-y-10 rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm md:p-12'>
        <div className='space-y-3 text-center md:text-left'>
          <h2 className='h2'>GDPR alignment</h2>
          <p className='p max-w-3xl'>
            We map every process to a lawful basis (contract, legitimate interest, or consent) and
            limit retention to what is necessary for learning, community management, or regulatory
            compliance.
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-3'>
          {gdprSections.map((section) => (
            <div key={section.title} className='space-y-2 rounded-2xl border border-black/5 bg-brand-accent/5 p-5'>
              <h3 className='text-base font-semibold text-black'>{section.title}</h3>
              <p className='text-sm text-brand-muted'>{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='section grid gap-10 lg:grid-cols-2'>
        <Card className='rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm'>
          <h2 className='h2'>Cookie usage policy</h2>
          <p className='p mt-3'>
            EdTerm uses essential cookies to keep you signed in, remember language preferences, and
            protect forms against abuse. Analytics cookies (via Google Analytics) help us understand
            which lessons and mentor resources resonate; they do not store identifiable
            information. You can update cookie preferences through your browser settings or by
            emailing us for assistance. Declining analytics cookies will not block access to core
            learning tools.
          </p>
        </Card>
        <Card className='rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm'>
          <h2 className='h2'>Affiliate link disclosure</h2>
          <p className='p mt-3'>
            Certain blog posts, newsletters, or partner landing pages may include affiliate links to
            recommended learning tools. Clicking these links can generate a small commission for
            EdTerm with no additional cost to you. Affiliate partnerships never influence our
            curriculum roadmap, mentor matching, or editorial policy. We mark affiliate content with
            descriptors such as “affiliate,” “sponsored,” or “partner” where applicable.
          </p>
        </Card>
      </section>

      <section className='section space-y-6'>
        <div>
          <h2 className='h2'>Trusted third-party services</h2>
          <p className='p mt-2 max-w-3xl'>
            We work with a short list of vendors who meet our security and privacy standards. Each
            service signs a Data Processing Agreement and only processes the minimum data required.
          </p>
        </div>
        <div className='grid gap-4'>
          {thirdParties.map((service) => (
            <Card key={service.name} className='rounded-2xl border border-black/5 bg-white/90 p-5'>
              <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                <h3 className='text-lg font-semibold text-black'>{service.name}</h3>
                <p className='small font-medium uppercase tracking-wide text-brand-accent'>
                  {service.purpose}
                </p>
              </div>
              <p className='mt-3 text-sm text-brand-muted'>
                <span className='font-semibold text-black'>Data processed:</span> {service.data}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className='section grid gap-10 lg:grid-cols-2'>
        <Card className='rounded-3xl border border-brand-accent/20 bg-brand-accent/5 p-8 shadow-sm'>
          <h2 className='h2'>Data retention</h2>
          <p className='p mt-3'>
            Active learner accounts, mentor submissions, and payment records remain on file while
            you use EdTerm services or for the duration needed to comply with tax and audit
            obligations (typically seven years). When you deactivate your account, records are
            archived and purged on a quarterly schedule unless a legal requirement mandates
            retention.
          </p>
          <p className='p mt-3'>
            Security logs, analytics events, and support transcripts are stored for up to 24 months
            to help detect fraud and improve service quality, after which they are anonymized or
            deleted.
          </p>
        </Card>
        <Card className='rounded-3xl border border-brand-accent/20 bg-brand-accent/5 p-8 shadow-sm'>
          <h2 className='h2'>Your rights & requests</h2>
          <ul className='mt-4 space-y-3'>
            {userRights.map((right) => (
              <li key={right} className='flex items-start gap-3 text-sm text-brand-muted'>
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-accent' />
                <span>{right}</span>
              </li>
            ))}
          </ul>
          <p className='p mt-4'>
            Submit any request to{' '}
            <Link href='mailto:partners@edterm.com' className='text-brand-accent underline'>
              partners@edterm.com
            </Link>{' '}
            with the email address associated with your account or submission.
          </p>
        </Card>
      </section>

      <section className='section rounded-3xl border border-black/5 bg-white/90 p-8 text-center shadow-sm md:p-12'>
        <h2 className='h2'>Questions or concerns?</h2>
        <p className='p mx-auto mt-3 max-w-3xl'>
          We respond to privacy and data-protection emails in under five business days. If you
          believe your rights have not been respected, you may also contact your local supervisory
          authority. Keeping learners, mentors, and partners safe is core to the Shell-less Mentor
          mission.
        </p>
        <Link
          href='mailto:partners@edterm.com'
          className='mt-6 inline-flex rounded-full bg-brand-accent px-6 py-3 font-semibold text-white shadow-sm transition hover:opacity-90'
        >
          partners@edterm.com
        </Link>
      </section>
    </div>
  );
}
