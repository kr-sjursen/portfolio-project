import { LinkButton } from '@/components/buttons/LinkButtons';

export function Hero() {
  /**
   * Notes:
   * - Have an image or illustration of either myself or something representative of me.
   */
  return (
  <section
    id='hero'
    className='
      flex flex-col gap-2 mx-6
      px-8 py-12 mt-6 mb-8
      bg-portfolio-primary rounded-lg
      border border-portfolio-tertiary
      shadow-md shadow-portfolio-primary/25
    '
    aria-labelledby='hero-title'
  >
    <h1
      id='hero-title'
      className='text-4xl my-2'
    >
      Hello, I&apos;m <span className='font-bold'>Kristian Sjursen</span>
    </h1>
    <div className='
      flex flex-col sm:flex-row gap-2 order-first text-sm hover:cursor-default
      text-portfolio-accent *:hover:text-portfolio-accent-light
      *:not-aria-hidden:hover:underline *:hover:decoration-portfolio-accent
      *:hover:underline-offset-2 font-mono
    '>
      <span>Web developer</span>
      <span className='hidden sm:inline' aria-hidden='true'>·</span>
      <span>Accessibility-focused</span>
    </div>
    <div className='flex flex-col gap-4 mb-4'>
      <p>I&apos;m a web developer specializing in responsive, accessible interfaces, with experience in React, Next.js, JavaScript, and PHP.</p>
      <p className='text-sm text-kv-white/70'>Based in Bergen, Norway</p>
    </div>
    <div className='flex flex-col sm:flex-row gap-4'>
      <LinkButton
        Path='#projects'
        Text='View my projects'
      />
      <LinkButton
        Path='#contact'
        Text='Contact me'
        Style='bg-portfolio-primary! hover:bg-portfolio-secondary! text-kv-white! border-portfolio-tertiary! hover:border-portfolio-accent!'
      />
    </div>
  </section>
  )
}
