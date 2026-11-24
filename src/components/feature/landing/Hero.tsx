import { LinkButton } from '@/components/buttons/LinkButtons'
import { FaGithub } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

export function Hero() {
  /**
   * Notes:
   * - Consider having h1 say something like "I build websites to be accessible", or "I make the web usable for everyone".
   * - Consider letting the hero cover the full initial viewport.
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
      flex gap-2 order-first text-sm hover:cursor-default
      *:not-aria-hidden:hover:underline *:hover:decoration-portfolio-accent
      *:hover:underline-offset-2
    '>
      <span>Web developer</span>
      <span aria-hidden='true'>·</span>
      <span>Accessibility-focused</span>
    </div>
    <div className='flex flex-col gap-4 mb-4'>
      <p>I&apos;m a web developer specializing in responsive, accessible interfaces, with experience in React, Next.js, JavaScript, and PHP.</p>
      <p>
        <LuMapPin
          className='inline mr-1'
          aria-hidden='true'
        />
        Based in Bergen, Norway &#x1F1F3;&#x1F1F4;
      </p>
    </div>
    <div className='flex flex-row gap-4'>
      <LinkButton
        Path='https://github.com/kr-sjursen'
        Text='GitHub'
        Icon={<FaGithub />}
      />
      <LinkButton Path='#contact' Text='Contact me' />
    </div>
  </section>
  )
}
