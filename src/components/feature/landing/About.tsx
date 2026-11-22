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
  // TODO: Consider splitting the education and skills into separate sections ("my toolkit" or similar?).
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
        className='text-3xl'
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
      <div className='
        flex flex-row gap-4 justify-around
      '>
        <section
          id='education'
          className='basis-[40%]'
          aria-labelledby='education-title'
        >
          <h3
            id='education-title'
            className='text-2xl mb-2'
          >
            Education
          </h3>
          <ul className='flex flex-col gap-2 list-disc'>
            {/* TODO: Correct the dates where needed */}
            <li>
              <h4 className='text-xl'>Bachelor in Digital Culture</h4>
              <p className='text-sm font-light'>2021-2025</p>
              <p>I studied at the University of Bergen and graduated in 2025.</p>
              <p>Relevant courses: PHP, history of the digital age, culture</p>
            </li>
            <li>
              <h4 className='text-xl'>Folkehøgskole</h4>
              <p className='text-sm font-light'>2020-2021</p>
              <p>I spent a year at <a href='https://risoy.fhs.no/' rel='noopener' target='_blank'>Risør Folkehøgskole</a>, attending their <span className='italic'>Tegne, Male, Reise</span> course.</p>
              <p>I made the yearbook for that year&apos;s classes, using Adobe InDesign.</p>
              <p>Relevant knowledge: art and design basics, color theory, history of art and architecture</p>
            </li>
            <li>
              <h4 className='text-xl'>High School</h4>
              <p className='text-sm font-light'>2017-2020</p>
              <p>I studied <span className='italic'>media og kommunikasjon</span> at Garnes VGS for two years, followed by a year of <span className='italic'>General studies</span> to receive my <span className='italic'>General University Admissions Certification</span> at Åsane VGS.</p>
              <p>Relevant courses: media studies, communication, design</p>
            </li>
          </ul>
        </section>
        <section
          id='technical-skills'
          className='basis-[40%]'
          aria-labelledby='technical-skills-title'
        >
          <h3
            id='technical-skills-title'
            className='text-2xl mb-2'
          >
            Technical Skills
          </h3>
          <ul className='flex flex-col gap-2 list-disc'>
            <li>
              <h4 className='text-lg'>Accessibility</h4>
              <p>
                Screen reader support, keyboard navigation, focus management,
                color contrast, etc.
              </p>
            </li>
            <li>
              <h4 className='text-lg'>HTML, CSS, JavaScript</h4>
              <p>Building semantic HTML and responsive layouts.</p>
            </li>
            <li>
              <h4 className='text-lg'>Apache, PHP, MySQL</h4>
              <p>Server and database management.</p>
            </li>
            <li>
              <h4 className='text-lg'>Next.js, React, Tailwind</h4>
              <p>Building modern web apps.</p>
            </li>
            <li>
              <h4 className='text-lg'>Git, GitHub, VS Code, Docker</h4>
              <p>Version control and development tools.</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  )
}
