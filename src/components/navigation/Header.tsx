import Link from 'next/link';
import { Logo } from '@/components/Logo';
// import { ThemeSelect } from '@/components/navigation/ThemeSelect';

export function Header() {
  const links = [
    {
      href: '/',
      label: 'My Portfolio',
    },
    {
      href: '#about',
      label: 'About',
    },
    {
      href: '#accessibility',
      label: 'Accessibility',
    },
    {
      href: '#projects',
      label: 'Projects',
    },
    {
      href: '#contact',
      label: 'Contact',
    }
  ];

  return (
    <header className='
      flex flex-row w-full top-0 p-2 py-3 mb-2 bg-portfolio-primary
      text-kv-white text-lg px-4 pr-8 shadow-md shadow-portfolio-primary/50
      sticky z-98 border-b border-portfolio-tertiary
    '>
      <Link
        href='#main'
        className='
          absolute left-0 top-0 bg-portfolio-accent py-2 px-4 z-99
          transform -translate-y-full focus:translate-y-0 transition
          focus:bg-portfolio-accent focus:text-kv-black
        '
      >
        Skip to content
      </Link>
      <nav className='grow'>
        <ul className='flex space-x-4 gap-2'>
          <li className='
            hover:underline hover:underline-offset-2
            hover:decoration-portfolio-accent
            mr-1
          '>
            <Logo />
          </li>
          {links.map(({ href, label }) => (
            <li
              key={href}
              className='
                hover:underline hover:underline-offset-2
                hover:decoration-portfolio-accent
                nth-2:grow
              '
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <ThemeSelect /> */}
    </header>
  );
}
