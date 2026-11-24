import { Education } from '@/components/feature/about/Education';
import { Skills } from '@/components/feature/about/Skills';

export function About() {
  /**
   * Notes:
   * - Add a section on what roles i am looking for.
   * - Add a section that can display my Github activity.
   *   - Maybe with a streak count?
   *   - Have it link to my Github profile.
   * - Consider adding hobbies or interests.
   * - Maybe add a photo.
   * - Consider a timeline of experience.
   * - Consider a tech-tree showing how different skills connect.
   * - Maybe something about what i like about web development.
   * - What is my favourite thing to build?
   * - What is something i want to learn next?
   * - What do i want to create next?
   */
  // TODO: Consider adding a Leetcode link?
  // TODO: Add something about how i keep adding TODOs to my code, like this one?
  // TODO: Consider adding something about what i do when not coding.
  return (
    <section
      id='about'
      className='
        flex flex-col gap-2 max-w-300
        mx-auto mb-8 px-8 py-6
        bg-portfolio-primary rounded-lg
        border border-portfolio-tertiary
      '
      aria-labelledby='about-title'
    >

      <h2
        id='about-title'
        className='text-3xl text-center'
      >
        About Me
      </h2>
      <p>
        I build accessible web experiences. I enjoy creating user-friendly
        websites. I focus on accessibility.
      </p>
      <p className='mb-4'>
        I also enjoy studying Digital Culture, which has shaped my view on
        technology and how society uses it. Once I started, I couldn&apos;t stop
        learning new things about how technology has shaped society, and
        culture.
      </p>
      <Education />
      <Skills />
    </section>
  )
}
