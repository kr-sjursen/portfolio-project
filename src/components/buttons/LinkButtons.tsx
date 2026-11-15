import Link from 'next/link';

interface ButtonProps {
  Path: string;
  Text?: string;
  Icon?: React.ReactNode;
  Style?: string;
};

export function LinkButton({ Path, Text, Icon, Style }: ButtonProps) {
  return (
    <Link href={Path}
      className={`
        flex items-center justify-center
        bg-portfolio-primary px-4 pt-1 pb-2 rounded-xl
        hover:bg-portfolio-accent hover:text-black
        text-white shadow-md shadow-portfolio-primary/25
        ${Style}
      `}
    >
      {Text}
      {Icon}
    </Link>
  )
}
