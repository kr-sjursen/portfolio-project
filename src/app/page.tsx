// import { InternalLinkButton } from '@/components/buttons/LinkButtons';
// import { LayoutCard } from '@/components/cards/LayoutCard';
import { Hero } from '@/components/feature/landing/Hero';
// import { ProjectShowcase } from '@/components/feature/landing/ProjectShowcase';
import { FeaturedProjects } from '@/components/feature/landing/FeaturedProjects';
import { About } from '@/components/feature/landing/About';
import { Accessibility } from '@/components/feature/landing/Accessibility';
import { ContactCTA } from '@/components/feature/landing/ContactCTA';

const landingContent = {
  accessibility: {
    Title: 'Accessibility is not optional',
    Content: 'I focus on building inclusive web experiences.'
  },
  contact: {
    Title: "Let's Talk",
    Content: 'Contact me.'
  }
}

export default function Home() {
  // TODO: Add a concise intro: who i am, what i build, and what i am looking for.
  // TODO: Add a small featured-projects section.
  // TODO: Include one prominent contact or "let's talk" link.
  return (
    <main
      id='main'
      className='relative mx-auto w-full max-w-[98%]'
    >
      <Hero />
      <About />
      <Accessibility />
      <FeaturedProjects />
      <ContactCTA />
      {/*<ProjectShowcase />
      <LayoutCard {...landingContent.accessibility} />
      <LayoutCard {...landingContent.contact} />*/}
    </main>
  );
}
