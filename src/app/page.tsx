import { LinkButton } from '@/components/buttons/LinkButtons';

export default function Home() {
  // TODO: Add a concise intro: who i am, what i build, and what i am looking for.
  // TODO: Add a small featured-projects section.
  // TODO: Include one prominent contact or "let's talk" link.
  return (
    <main
      id='main'
      className='mx-auto w-3/4'
    >
      <h1>Kristian Sjursen&apos;s Portfolio</h1>
      <p>Full-stack developer</p>
      <p>Detail oriented</p>
      <p>Accessibility focused</p>
      <section>
        <h2>Featured Projects</h2>
        <p>Some of my recent work.</p>
      </section>
      <section>
        <h2>Education</h2>
      </section>
      <section>
        <h2>Let&apos;s Talk</h2>
        <LinkButton Path='/contact' Text='Contact' />
      </section>
    </main>
  );
}
