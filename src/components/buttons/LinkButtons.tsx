import Link from 'next/link';

type CommonProps = {
  Text: string;
  Icon?: React.ReactNode;
  Style?: string;
};

type LinkProps = CommonProps & {
  Path: string;
  IsExternal?: boolean;
  IsButton?: false;
};

type ButtonProps = CommonProps & {
  IsButton: true;
  Type?: 'button' | 'submit' | 'reset';
  OnClick?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * Notes:
 * - <Link> is used for internal links.
 * - <a> is used for external links.
 * - IsButton determines if it's a button or link.
 * TODO: Split into separate Link and Button components for clarity and maintainability.
 */
export function LinkButton(props: LinkProps | ButtonProps) {
  const { Text, Icon, Style } = props;
  const className = `
    flex flex-row gap-1 justify-center items-center
    px-4 py-2 rounded-lg
    bg-portfolio-accent-dark
    text-black text-base
    border border-portfolio-primary
    hover:bg-portfolio-accent
    focus:bg-portfolio-accent
    focus:outline-2 focus:outline-portfolio-accent-dark
    focus:-outline-offset-2
    ${Style ?? ''}
  `;

  const content = (
    <>
      {Text}
      {Icon && (
        <span className='order-first' aria-hidden='true'>
          {Icon}
        </span>
      )}
    </>
  );

  if (props.IsButton) {
    return (
      <button
        type={props.Type ?? 'button'}
        onClick={props.OnClick}
        className={className}
      >
        {content}
      </button>
    );
  }

  const Element = props.IsExternal ? 'a' : Link;

  return (
    <Element
      href={props.Path}
      target={props.IsExternal ? '_blank' : undefined}
      rel={props.IsExternal ? 'noopener' : undefined}
      className={className}
    >
      {content}
    </Element>
  );
}
