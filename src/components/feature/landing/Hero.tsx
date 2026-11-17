import { CTAButton } from '@/components/buttons/LinkButtons'
import { FaGithub } from 'react-icons/fa';

export function Hero() {
  return (
  <section
    className='
      flex flex-col gap-2 max-w-[98%] mx-auto
      px-8 py-12 mb-8
      bg-portfolio-primary rounded-xl 
      text-kv-white
      shadow-md shadow-portfolio-primary/25
    '
    aria-labelledby='hero'
  >
    <h1 id='hero'>
      Hello, I&apos;m <span className='font-bold'>Kristian Sjursen</span>
    </h1>
    <div className='flex gap-2 order-first text-sm'>
      <span>Web developer</span>
      <span aria-hidden='true'>·</span>
      <span>Accessibility-focused</span>
    </div>
    <div className='mb-4'>
      <p>I&apos;m a web developer specializing in responsive, accessible interfaces, with experience in React, Next.js, JavaScript, and PHP.</p>
      <p>Based in Bergen, Norway</p>
    </div>
    <div className='flex flex-row gap-4'>
      <CTAButton
        Path='https://github.com/kr-sjursen'
        Text='GitHub'
        Icon={<FaGithub />}
      />
      <CTAButton Path='/contact' Text='Contact me' />
    </div>
  </section>
  )
}