import Link from 'next/link';
import { BsArchiveFill } from "react-icons/bs";

interface LogoProps {
  className?: string;
}

// TODO: Swap icon for actual logo
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href='/'
      className={`
        group flex items-center mr-2 hover:text-portfolio-accent
        ${className}
      `}
    >
      <BsArchiveFill
        className='h-6 w-6'
        aria-label='Logo'
      />
    </Link>
  )
}
