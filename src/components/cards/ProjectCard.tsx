import Image from 'next/image'
import { LinkButton } from '@/components/buttons/LinkButtons'

interface ProjectCardProps {
  Title: string;
  Description?: string;
  Tech?: string[];
  ImageSrc?: string | null;
  Href?: string | null;
  CaseLink?: string | null;
  Github?: string | null;
  key?: number;
}

export function ProjectCard({
  Title, Description, Tech, ImageSrc, Href, CaseLink, Github, key
}: ProjectCardProps) {
  const id = Title.toLowerCase().replace(/\s+/g, '-');
  const links = [
    { href: Href, text: 'View', isExternal: true },
    { href: Github, text: 'GitHub', isExternal: true },
    { href: CaseLink, text: 'Case study', isExternal: false },
  ].filter((link): link is { href: string; text: string; isExternal: boolean } => !!link.href);
  // TODO: Make tech pill component
  // TODO: Use link button component
  return (
    <li
      id={id}
      key={key}
      className='
        flex flex-col gap-2 w-full pb-4
        bg-portfolio-secondary
        border border-portfolio-tertiary rounded-lg
      '
    >
      <div className='flex flex-col gap-2 w-full grow px-4'>
        <h3 className='text-2xl'>{Title}</h3>
        <p className='grow'>{Description}</p>
        {Tech &&
          <ul className='flex flex-row gap-2 mb-2'>
            {Tech.map(t =>
              <li
                key={t}
                className='
                  bg-portfolio-tertiary px-2 py-1 rounded
                  text-sm
                  hover:bg-portfolio-accent hover:text-kv-black
                '
              >
                {t}
              </li>
            )}
          </ul>
        }
        <div className='flex flex-row gap-2 justify-between'>
          {links.map(link => (
            <LinkButton
              key={link.text}
              Path={link.href}
              Text={link.text}
              IsExternal={link.isExternal}
            />
          ))}
        </div>
      </div>
      <div className='
        flex justify-center content-center order-first
        aspect-3/2 w-full max-h-65 mb-2
        bg-portfolio-primary rounded-t-lg
      '>
        {ImageSrc ?
          <Image
            src={ImageSrc}
            alt={Title}
            width={300}
            height={200}
          />
        :
          <p className='self-center'>No image</p>
        }
      </div>
    </li>
  )
}
