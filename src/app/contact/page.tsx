import type { Metadata } from 'next';
import { CTAButton, InternalLinkButton, ExternalLinkButton } from '@/components/buttons/LinkButtons'

export const metadata: Metadata = {
  title: 'Contact'
};

export default function Contact() {
  // TODO: Make the contact page useful.
  // TODO: Provide a direct email link and relevant professional/social profiles.
  // TODO: Consider how to handle a contact form (do i need a CMS?).
  return (
    <main
      id='main'
      className='mx-auto max-w-3/4 flex flex-col gap-4 justify-center'
    >
      <h1>Let&apos;s connect</h1>
      <p>I&apos;m open to opportunities.</p>
      <ul className='flex flex-col gap-4'>
        <li className='flex flex-row gap-2 items-baseline'>
          Email:
          <ExternalLinkButton
            Text='Email me'
            Path='mailto:example@example.com'
            Style='max-w-xs'
          />
        </li>
        <li className='flex flex-row gap-2 items-baseline'>
          GitHub:
          <ExternalLinkButton
            Text='GitHub'
            Path='https://github.com/kr-sjursen/'
            Style='max-w-xs'
          />
        </li>
        <li className='flex flex-row gap-2 items-baseline'>
          LinkedIn:
          <ExternalLinkButton
            Text='LinkedIn'
            Path='https://linkedin.com'
            Style='max-w-xs'
          />
        </li>
      </ul>
    </main>
  );
}
