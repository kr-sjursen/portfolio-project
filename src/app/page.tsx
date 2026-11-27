import { Hero } from '@/components/feature/landing/Hero';
import { GithubGraph } from '@/components/feature/projects/GithubGraph';
import { FeaturedProjects } from '@/components/feature/landing/FeaturedProjects';
import { About } from '@/components/feature/landing/About';
import { Accessibility } from '@/components/feature/landing/Accessibility';
import { ContactCTA } from '@/components/feature/landing/ContactCTA';
import { Suspense } from 'react';

export default function Home() {
  // TODO: Add a concise intro: who i am, what i build, and what i am looking for.
  // TODO: Include one prominent contact or "let's talk" link in hero
  // TODO: Consider adding a playground page for small experimental stuff.
  // TODO: Move the graph to a separate section (currently just there for testing)
  return (
    <main
      id='main'
      className='relative mx-auto w-full max-w-[98%] text-kv-white'
    >
      <Hero />
      <Suspense fallback={<p>Loading GitHub contributions…</p>}>
        <GithubGraph />
      </Suspense>
      <About />
      <Accessibility />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  );
}
