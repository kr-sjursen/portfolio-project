import { InternalLinkButton, ExternalLinkButton } from '@/components/buttons/LinkButtons'
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link'
import Image from 'next/image'

export function FeaturedProjects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Short description.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Next', 'Git', 'GitHub'],
      link: '/project1',
      caseStudy: '/project1-case-study',
      image: null,
      github: 'https://github.com/kr-sjursen/'
    },
    {
      title: 'Jobloop',
      description: 'I got to work on improving the accessibility of this site. This included a more semantic structure, proper labels, and easier navigation.',
      tech: ['Next', 'React', 'Tailwind'],
      link: 'https://www.jobloop.no/',
      caseStudy: null,
      image: null,
      github: 'https://github.com/Kodeverket-AS/Project-Jobloop'
    }
  ];
  /**
   * Notes:
   * - Consider a "load more projects" button at the end?
   */
  return (
    <section
      id='projects'
      className='
        flex flex-col gap-2 max-w-300
        mx-auto mb-8 px-10 py-8
        bg-portfolio-primary rounded-lg
        border border-portfolio-tertiary
      '
      aria-labelledby='featured-projects-title'
    >
      <h2
        id='featured-projects-title'
        className='text-3xl text-center'
      >
        Featured Projects
      </h2>
      <p className='text-center mb-2'>Some projects i have worked on.</p>
      <ul className='
        flex flex-row justify-around gap-4 content-stretch
      '>
        {projects.map((project, index) => (
          <li
            key={index}
            className='
              flex flex-col gap-2 w-full pb-4
              bg-portfolio-secondary
              border border-portfolio-tertiary rounded-lg
            '
          >
            <div className='flex flex-col gap-2 w-full grow px-4'>
              <h3 className='text-2xl'>{project.title}</h3>
              <p className='grow'>{project.description}</p>
              <ul className='flex flex-row gap-2 mb-2'>
                {project.tech.map((t, i) => (
                  <li // TODO: Consider linking tech to docs for easy access
                    key={i}
                    className='
                      bg-portfolio-tertiary px-2 py-1 rounded
                      text-sm
                      hover:bg-portfolio-accent hover:text-kv-black
                    '
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className='flex flex-row gap-2 justify-between'>
                {project.link &&
                  <a href={project.link}>View</a>
                }
                {project.github &&
                  <a href={project.github}>GitHub</a>
                }
                {project.caseStudy &&
                  <a href={project.caseStudy}>Case study</a>
                }
              </div>
            </div>
            <div className='
              flex justify-center content-center order-first
              aspect-3/2 w-full max-h-65 mb-2
              bg-portfolio-primary rounded-t-lg
            '>
              {project.image ?
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                />
                : <p className='self-center'>No image</p>
              }
            </div>
          </li>
        ))}
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
