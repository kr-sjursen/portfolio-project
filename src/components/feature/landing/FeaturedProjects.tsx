import { InternalLinkButton, ExternalLinkButton } from '@/components/buttons/LinkButtons'
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link'

export function FeaturedProjects() {
  return (
    <section
      id='featured-projects'
      className='
        flex flex-col gap-2
        mb-8 px-8
      '
      aria-labelledby='featured-projects-title'
    >
      <h2 id='featured-projects-title'>Featured Projects</h2>
      <p>Some projects i have worked on.</p>
      <ul className='flex flex-row justify-around gap-4'>
        <li
          className='flex flex-col w-full'
          aria-labelledby='project-1'
        >
          <h3
            id='project-1'
            className='text-lg text-center'
          >
            Project 1
          </h3>
          <p>Short description.</p>
          <p>Image here.</p>
          <ExternalLinkButton
            Path='/project1'
            Text='View'
          />
          <InternalLinkButton
            Path='/project1-case-study'
            Text='Read case study'
          />
        </li>
        <li
          className='flex flex-col w-full'
          aria-labelledby='project-2'
        >
          <h3
            id='project-2'
            className='text-lg text-center'
          >
            Project 2
          </h3>
          <p>Short description.</p>
          <p>Image here.</p>
          <ExternalLinkButton
            Path='/project2'
            Text='View'
          />
          <InternalLinkButton
            Path='/project2-case-study'
            Text='Read case study'
          />
        </li>
      </ul>
      <div className=''>
      <p>Find more of my projects on my GitHub:</p>
      <Link
        className='
          inline-flex items-center gap-1 w-fit px-4 py-2
          bg-portfolio-accent text-kv-black rounded-lg
          hover:bg-portfolio-primary hover:text-kv-white
          shadow-md shadow-portfolio-primary/25
        '
        href='https://github.com/kr-sjursen'
      >
        My GitHub
        <FaGithub
          className='inline order-first'
        /> 
      </Link>
      </div>
    </section>
  )
}
