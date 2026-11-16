import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

interface ButtonProps {
  Path: string;
  Text?: string;
  Icon?: React.ReactNode; // TODO: Use IconType instead.
  Style?: string;
};

export function InternalLinkButton({ Path, Text, Icon, Style }: ButtonProps) {
  return (
    <Link href={Path}
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
    <a href={Path}
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
      <BsArrowUpRight aria-hidden='true' />
    </a>
  )
}
