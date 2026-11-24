import { projects } from '@/util/projects';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { LinkButton } from '@/components/buttons/LinkButtons';
import { FaGithub } from 'react-icons/fa';

export function FeaturedProjects() {
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
        flex flex-row flex-wrap lg:flex-nowrap justify-around gap-4 content-stretch
      '>
        {projects.length === 0 && (
          <section
            id='no-projects'
            className='
              px-4 py-6 bg-portfolio-secondary
              border border-portfolio-tertiary rounded-lg
            '
            aria-labelledby='no-projects-title'
          >
            <h3
              id='no-projects-title'
              className='text-center text-xl mb-2'
            >
              No projects found
            </h3>
            <p className='text-center'>
              There seems to be a problem loading my projects, please consider taking a look at my GitHub or try again later.
            </p>
          </section>
        )}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            Title={project.title}
            Description={project.description}
            Tech={project.stack}
            Href={project.projectLink}
            CaseLink={project.caseStudyPath}
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
