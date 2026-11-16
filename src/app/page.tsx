import { InternalLinkButton } from '@/components/buttons/LinkButtons';
import { Hero } from '@/components/feature/landing/Hero';

export default function Home() {
  // TODO: Add a concise intro: who i am, what i build, and what i am looking for.
  // TODO: Add a small featured-projects section.
  // TODO: Include one prominent contact or "let's talk" link.
  return (
    <main
      id='main'
      className='relative mx-auto w-full'
    >
      <Hero />
      <div>
        <section className='max-w-3/4 mx-auto'>
          <h2>Featured Projects</h2>
          <p>Some of my recent work.</p>
        </section>
        <section className='max-w-3/4 mx-auto'>
          <h2>Accessibility is not optional</h2>
          <p>I focus on building inclusive web experiences.</p>
        </section>
        <section className='max-w-3/4 mx-auto'>
          <h2>Let&apos;s Talk</h2>
          <InternalLinkButton Path='/contact' Text='Contact' />
        </section>
      </div>
    </main>
  );
}
