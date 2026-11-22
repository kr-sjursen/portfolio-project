import { ProjectCard } from '@/components/cards/ProjectCard'
import { LinkButton } from '@/components/buttons/LinkButtons'
import { FaGithub } from 'react-icons/fa';

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
          <ProjectCard
            key={index}
            Title={project.title}
            Description={project.description}
            Tech={project.tech}
            Href={project.link}
            CaseLink={project.caseStudy}
            Github={project.github}
          />
        ))}
      </ul>
      <div className='flex flex-col gap-2'>
        <p>Find more of my projects on my GitHub:</p>
        <LinkButton
          Path='https://github.com/kr-sjursen'
          Text='My GitHub'
          Icon={<FaGithub />}
          IsExternal
        />
      </div>
    </section>
  )
}
