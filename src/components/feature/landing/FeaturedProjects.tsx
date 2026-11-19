import { InternalLinkButton, ExternalLinkButton } from '@/components/buttons/LinkButtons'
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link'

export function FeaturedProjects() {
  return (
    <section
      id='featured-projects'
      className='
        flex flex-col gap-2 max-w-300
        mx-auto mb-8 px-8
      '
      aria-labelledby='featured-projects-title'
    >
      <h2
        id='featured-projects-title'
        className='text-3xl'
      >
        Featured Projects
      </h2>
      <p>Some projects i have worked on.</p>
      <ul className='
        flex flex-row justify-around gap-4 content-stretch
      '>
        <li
          className='
            flex flex-col gap-2 w-full pb-4
            border border-portfolio-tertiary rounded-lg
          '
          aria-labelledby='project-1'
        >
          <div className='flex flex-col gap-2 w-full grow px-4'>
            <h3
              id='project-1'
              className='text-2xl'
            >
              Project 1
            </h3>
            <p className='grow'>Short description.</p>
            <ul className=''>
              <li>Tech stack here</li>
            </ul>
            <div className='flex gap-2 justify-center'>
              <ExternalLinkButton
                Path='/project1'
                Text='View project'
              />
              <InternalLinkButton
                Path='/project1-case-study'
                Text='Read case study'
              />
            </div>
          </div>
          <div className='
            flex justify-center content-center order-first
            aspect-3/2 w-full max-h-65 mb-2
            bg-portfolio-primary rounded-t-lg
          '>
            <p className='self-center'>Image</p>
          </div>
        </li>
        <li
          className='
            flex flex-col gap-2 w-full pb-4
            border border-portfolio-tertiary rounded-lg
          '
          aria-labelledby='project-2'
        >
          <div className='flex flex-col gap-2 w-full grow px-4'>
            <h3
              id='project-2'
              className='text-2xl'
            >
              Jobloop
            </h3>
            <p className='grow'>I got to work on improving the accessibility of this site. This included a more semantic structure, proper labels, and easier navigation.</p>
            <ul className=''>
              <li>Tech stack here</li>
            </ul>
            <div className='flex gap-2 justify-center'>
              <ExternalLinkButton
                Path='https://www.jobloop.no/'
                Text='View website'
              />
              <InternalLinkButton
                Path='/project2-case-study'
                Text='Read case study'
              />
            </div>
          </div>
          <div className='
            flex justify-center content-center order-first
            aspect-3/2 w-full max-h-65 mb-2
            bg-portfolio-primary rounded-t-lg
          '>
            <p className='self-center'>Image</p>
          </div>
        </li>
      </ul>
      <div className='flex flex-col gap-2'>
        <p>Find more of my projects on my GitHub:</p>
        <Link
          className='
            inline-flex items-center gap-1 w-fit px-4 py-2
            bg-portfolio-accent text-kv-black rounded-lg
            hover:bg-portfolio-primary hover:text-kv-white
            border border-portfolio-primary/25
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
