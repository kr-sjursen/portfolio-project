import type { Metadata } from 'next';
import { AboutHero } from '@/components/feature/about/AboutHero';
import { Technologies } from '@/components/feature/about/Technologies';
import { LayoutCard } from '@/components/cards/LayoutCard';

export const metadata: Metadata = {
  title: 'About'
};

const aboutContent = {
  education: {
    Title: 'Education',
    Content: "Studied Digital Culture for my bachelor's degree at the University of Bergen. Among other things, Digital Culture helps not only understanding how the World Wide Web works, but also its impact on society."
  },
  experience: {
    Title: 'Experience',
    Content: 'Currently working for JobLoop as an accessibility specialist.'
  },
  philosophy: {
    Title: 'My philosophy',
    Content: 'Keep it simple.'
  },
  accessibility: {
    Title: 'Why accessibility matters',
    Content: 'It helps everyone.'
  }
};

export default function About() {
  // TODO: Add a brief bio. Cover my background, skills and experience.
  // TODO: Add my studies and references here.
  // TODO: Prefer concrete examples of how i use skills over a long list of technologies.
  return (
    <main
      id='main'
      className='mx-auto'
    >
      <AboutHero />
      <LayoutCard Title='Education' Content={aboutContent.education.Content} />
      <LayoutCard Title='Experience' Content={aboutContent.experience.Content} />
      <Technologies />
      <LayoutCard Title='Philosophy' Content={aboutContent.philosophy.Content} />
      <LayoutCard Title='Accessibility' Content={aboutContent.accessibility.Content} />
    </main>
  );
}
