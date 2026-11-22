import type { Metadata } from 'next';

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
    </main>
  );
}
