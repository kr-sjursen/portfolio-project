import { ProjectCard } from '@/components/cards/ProjectCard'

export function ProjectShowcase() {
  return (
    <section
      className='
        flex flex-col gap-2
        mx-auto px-8 py-10 mb-8 max-w-[95%]
        bg-portfolio-primary text-kv-white rounded-xl shadow-md shadow-bg-primary/20
      '
      aria-labelledby='featured-projects'
    >
      <h2 id='featured-projects'>Featured Projects</h2>
      <p>Some of my recent work.</p>
      <ul className='
        flex flex-row gap-4
        *:not-first:border-l *:not-first:pl-8
      '>
        <li className='w-full'>
          <ProjectCard
            Title='My Project'
            Tech={['React']}
            Desc='A project that took time.'
            Link='/my-project'
            CaseLink='/my-project-case'
          />
        </li>
        <li className='w-full'>
          <ProjectCard
            Title='Another Project'
            Tech={['Next.js']}
            Desc='Another project that also took time, but longer. So it required a longer description, which lets me ensure that this component works with long text descriptions.'
            Link='/another-project'
          />
        </li>
      </ul>
    </section>
  )
}