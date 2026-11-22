import Link from 'next/link';

interface ButtonProps {
  Path: string;
  IsExternal?: boolean;
  IsButton?: boolean;
  OnClick?: () => void;
  Text?: string;
  Icon?: React.ReactNode; // TODO: Use IconType instead.
  Style?: string;
};

/**
 * Notes:
 * - <Link> is used for internal links.
 * - <a> is used for external links.
 */
export function LinkButton({
  IsExternal = false,
  Path,
  Text,
  Icon,
  Style
}: ButtonProps) {
  const Element = IsExternal ? 'a' : Link;
  const props = IsExternal ? { href: Path, target: '_blank', rel: 'noopener' }
    : { href: Path };

  // TODO: Add support for actual button with onClick and/or type
  return (
    <Element
      className={`
        flex flex-row gap-1 justify-center items-center
        px-4 py-2 rounded-lg
        bg-portfolio-accent-dark
        text-black text-base
        border border-portfolio-primary
        hover:bg-portfolio-accent
        focus:bg-portfolio-accent
        focus:outline-2 focus:outline-portfolio-accent-dark
        focus:-outline-offset-2
        ${Style}
      `}
      {...props}
    >
      {Text}
      {Icon &&
        <span
          className='order-first'
          aria-hidden='true'
        >
          {Icon}
        </span>
      }
    </Element>
  )
}

export function CTAButton({ Path, Text, Icon, Style }: ButtonProps) {
  return (
    <Link
      href={Path}
      className={`
        flex items-center justify-center gap-1
        bg-portfolio-accent px-4 py-2 rounded-xl
        text-kv-black
        shadow-md shadow-portfolio-primary/25
        hover:bg-portfolio-secondary hover:text-kv-white
        ${Style}
      `}
    >
      {Text}
      <span
        className='order-first mb-0.5'
        aria-hidden='true'
      >
        {Icon}
      </span>
    </Link>
  )
}
