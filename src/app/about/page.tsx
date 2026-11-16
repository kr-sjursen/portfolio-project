import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About'
};

export default function About() {
  // TODO: Add a brief bio. Cover my background, skills and experience.
  // TODO: Add my studies and references here.
  // TODO: Prefer concrete examples of how i use skills over a long list of technologies.
  return (
    <main
      id='main'
      className='mx-auto w-3/4'
    >
      <h1>About</h1>
      <h2>Education</h2>
      <h2>Experience</h2>
      <h2>Technical skills</h2>
      <h2>My philosophy</h2>
      <h2>Why accessibility matters to me</h2>
    </main>
  );
}
