import { InternalLinkButton } from '@/components/buttons/LinkButtons'
import { FaGithub } from "react-icons/fa";

export function Hero() {
  return (
  <section className='
    flex flex-col gap-2
    px-8 py-12
    bg-portfolio-primary rounded-xl 
    text-kv-white
  '>
    <h1>Hello, I&apos;m Kristian Sjursen</h1>
    <p>Full-stack developer</p>
    <p>Accessibility focused</p>
    <p>Based in Bergen, Norway</p>
    <div className='flex flex-row gap-4'>
      <InternalLinkButton Path='/projects' Text='See my work' />
      <InternalLinkButton Path='/cv' Text='View CV' />
    </div>
  </section>
  )
}