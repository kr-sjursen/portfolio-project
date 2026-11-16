import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';

interface ButtonProps {
  Path: string;
  Text?: string;
  Icon?: React.ReactNode; // TODO: Use IconType instead.
  Style?: string;
};

export function InternalLinkButton({ Path, Text, Icon, Style }: ButtonProps) {
  return (
    <Link
      href={Path}
      className={`
        flex items-baseline justify-center 
        bg-portfolio-primary px-4 py-2 rounded-xl
        hover:bg-portfolio-accent hover:text-black
        text-white shadow-md shadow-portfolio-primary/25
        ${Style}
      `}
    >
      {Text}
      <span aria-hidden='true'>
        {Icon}
      </span>
    </Link>
  )
}

export function ExternalLinkButton({ Path, Text, Icon, Style }: ButtonProps) {
  return (
    <a
      href={Path}
      target='_blank'
      rel='noopener noreferrer'
      className={`
        flex items-baseline justify-center 
        bg-portfolio-primary px-4 py-2 pl-6 rounded-xl
        hover:bg-portfolio-accent hover:text-black
        text-white shadow-md shadow-portfolio-primary/25
        ${Style}
      `}
    >
      {Text}
      <span aria-hidden='true'>
        {Icon}
      </span>
      <BsBoxArrowUpRight
        className='ml-1 h-[50%] self-start'
        aria-hidden='true'
      />
    </a>
  )
}
