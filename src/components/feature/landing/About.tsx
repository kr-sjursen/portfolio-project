export function About() {
  return (
    <section
      id='about'
      className='
        flex flex-col gap-2
        mb-8 px-8
      '
      aria-labelledby='about-title'
    >
      <h2 id='about-title'>About Me</h2>
      <p>Hi, I&apos;m a web developer.</p>
      <p>
        I build accessible web experiences. I enjoy creating user-friendly
        websites. I focus on accessibility.
      </p>
      <p>
        I also enjoy studying Digital Culture, which has shaped my view on
        technology and how society uses it. Once I started, I couldn&apos;t stop
        learning new things about how technology has shaped society, and
        culture.
      </p>
      <section>
        <h3>Education</h3>
        <ul>
          <li>
            <h4>Bachelor in Digital Culture</h4>
            <p>I studied at the University of Bergen and graduated in 2025.</p>
            <p>Relevant courses: PHP, history of the digital age, culture</p>
          </li>
          <li>
            <h4>Folkehøgskole</h4>
            <p>I spent a year at <a href='https://risoy.fhs.no/' rel='noopener' target='_blank'>Risør Folkehøgskole</a>, attending their <span className='italic'>Tegne, Male, Reise</span> course.</p>
            <p>I made the yearbook for that year&apos;s classes, using Adobe InDesign.</p>
            <p>Relevant knowledge: art and design basics, color theory, history of art and architecture</p>
          </li>
          <li>
            <h4>High School</h4>
            <p>I studied <span className='italic'>media og kommunikasjon</span> at Garnes VGS for two years, followed by a year of <span className='italic'>General studies</span> to receive my <span className='italic'>General University Admissions Certification</span> at Åsane VGS.</p>
            <p>Relevant courses: media studies, communication, design</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>Technical Skills</h3>
        <ul>
          <li>
            <h4>Accessibility</h4>
            <p>
              Screen reader support, keyboard navigation, focus management,
              color contrast, etc.
            </p>
          </li>
          <li>
            <h4>HTML, CSS, JavaScript</h4>
            <p>Building semantic HTML and responsive layouts.</p>
          </li>
          <li>
            <h4>Apache, PHP, MySQL</h4>
            <p>Server and database management.</p>
          </li>
          <li>
            <h4>Next.js, React, Tailwind</h4>
            <p>Building modern web apps.</p>
          </li>
          <li>
            <h4>Git, GitHub, VS Code, Docker</h4>
            <p>Version control and development tools.</p>
          </li>
        </ul>
      </section>
    </section>
  )
}
