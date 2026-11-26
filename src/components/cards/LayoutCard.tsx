interface LayoutCardProps {
  Title: string;
  Content?: React.ReactNode;
  Style?: string;
  Heading?: number;
}

export function LayoutCard({ Title, Content, Style, Heading }: LayoutCardProps) {
  const id = Title.toLowerCase().replace(/\s+/g, '-');

  // TODO: Add support for different heading levels
  return (
  <section
    className={`
      flex flex-col gap-6 max-w-300
      mx-auto mb-8 px-10 py-8
      bg-portfolio-primary rounded-lg
      border border-portfolio-tertiary
      ${Style || ''}
    `}
    aria-labelledby={id}
  >
    <h2
      id={id}
      className='text-4xl'
    >
      {Title}
    </h2>
    {Content}
  </section>
  )
}
