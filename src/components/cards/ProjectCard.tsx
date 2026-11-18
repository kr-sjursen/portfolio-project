import { InternalLinkButton } from '@/components/buttons/LinkButtons'

interface ProjectCardProps {
  Title: string;
  Tech?: string[];
  Desc?: string;
  Link?: string;
  CaseLink?: string;
}

export function ProjectCard({
  Title, Tech, Desc, Link, CaseLink
}: ProjectCardProps) {
  const id = Title.toLowerCase().replace(/\s+/g, '-');
  return (
    <section
      aria-labelledby={id}
      className='flex flex-col gap-2 w-full'
    >
      <h3 id={id}>{Title}</h3>
      <ul>
        {Tech?.map(t =>
          <li key={t}>
            {t}
          </li>
        )}
      </ul>
      <p>{Desc}</p>
      {Link && <InternalLinkButton 
        Text='View project'
        Path={Link}
      />}
      {CaseLink && <InternalLinkButton 
        Text='Case study'
        Path={CaseLink}
      />}
    </section>
  )
}
