import PartnerForm from '@/components/partner-form';

export default function PartnersPage() {
  return (
    <section className='section py-16 text-center md:text-left'>
      <h2 className='h2 mb-3'>Get Involved</h2>
      <p className='p mx-auto mb-6 max-w-prose md:mx-0'>
        Share your interest and we’ll reach out with ways to participate.
      </p>
      <div className='mx-auto max-w-xl md:mx-0'>
        <PartnerForm cta='Send' />
      </div>
    </section>
  );
}
