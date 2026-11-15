import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { ThemeSelect } from '@/components/navigation/ThemeSelect';
// TODO: Swap out with actual logo icon

export function Header() {
  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/projects',
      label: 'Projects',
    },
    {
      href: '/about',
      label: 'About',
    },
    {
      href: '/contact',
      label: 'Contact',
    }
  ];

  // TODO: Have the header not expand on menu open
  // TODO: Have header fixed on top

  return (
    <header className='
      flex flex-row relative w-full top-0 p-2 mb-2 bg-portfolio-primary
      text-kv-white text-lg px-4 pr-8 shadow-md shadow-portfolio-primary/20
    '>
      <Link
        href='#main'
        className='
          absolute left-0 top-0 bg-jobloop-primary-green py-2 px-4 z-50
          transform -translate-y-full focus:translate-y-0 transition
          focus:bg-black focus:text-white
        '
      >
        Skip to content
      </Link>
      <nav className='grow'>
        <ul className='flex space-x-4 gap-2'>
          <Logo />
          {links.map(({ href, label }) => (
            <li
              key={href}
              className='hover:underline hover:underline-offset-2 hover:decoration-portfolio-accent'
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSelect />
    </header>
  );
}
