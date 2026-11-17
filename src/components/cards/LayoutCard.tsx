interface LayoutCardProps {
  Title: string;
  Content?: React.ReactNode;
  Style?: string;
}

export function LayoutCard({ Title, Content, Style }: LayoutCardProps) {
  const id = Title.toLowerCase().replace(/\s+/g, '-');
  return (
  <section
    className={`
      flex flex-col gap-2 max-w-3/4 mx-auto mb-4 p-4
      bg-portfolio-primary rounded-xl
      text-kv-white
      shadow-md shadow-portfolio-primary/25
      ${Style || ''}
    `}
    aria-labelledby={id}
  >
    <h2 id={id}>
      {Title}
    </h2>
    {Content}
  </section>
  )
}