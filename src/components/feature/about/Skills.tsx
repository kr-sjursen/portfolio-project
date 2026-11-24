export function Skills() {

  // TODO: Add more skills.
  // TODO: Give examples!
  // TODO: Consider mentioning SEO basics?
  return (
    <section
      id='technical-skills'
      className='
        flex flex-col gap-2 px-4 py-6
        bg-portfolio-secondary
        border border-portfolio-tertiary rounded-lg
      '
      aria-labelledby='technical-skills-title'
    >
      <h3
        id='technical-skills-title'
        className='text-2xl mb-2'
      >
        Technical Skills
      </h3>
      <ul className='flex flex-col gap-2'>
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
  );
}
