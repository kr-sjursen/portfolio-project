export function AboutHero() {
  return (
    <section
      className='
        flex flex-col gap-2 max-w-[98%] mx-auto
        px-8 py-12 mb-4
        bg-portfolio-primary rounded-xl 
        text-kv-white
        shadow-md shadow-portfolio-primary/25
      '
      aria-labelledby='about-hero'
    >
      <h1 id='about-hero'>About Me</h1>
      <p>Hi, I&apos;m Kristian.</p>
      <p>I build web apps.</p>
      <p>Focused on accessibility.</p>
      <p>I have a bachelor&apos;s degree in Digital Culture, with focus on web development.</p>
      <p>On my free time, I enjoy coding, putting together modlists for games, and reading.</p>
    </section>
  )
}