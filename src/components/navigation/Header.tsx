'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { Logo } from '@/components/Logo';
// import { ThemeSelect } from '@/components/navigation/ThemeSelect';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
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

  // TODO: Style mobile menu
  // TODO: Implement focus trap for mobile menu
  // TODO: Return focus to menu button on close
  // TODO: Close menu on outside click
  return (
    <header className='flex flex-row w-full top-0 px-4 sm:pr-8 bg-portfolio-primary text-kv-white text-lg shadow-md shadow-portfolio-primary/50 sticky z-98 border-b border-portfolio-tertiary'>
      <Link
        href='#main'
        className='absolute left-0 top-0 bg-portfolio-accent py-2 px-4 z-99 transform -translate-y-full focus:translate-y-0 transition focus:bg-portfolio-accent focus:text-kv-black'
      >
        Skip to content
      </Link>
      <nav className='flex grow flex-wrap items-center gap-2 my-1 sm:my-3 sm:flex-nowrap'>
        <div className='group flex flex-row gap-2 *:rounded-xs *:focus:outline-1 *:focus:outline-offset-3 *:focus:outline-portfolio-accent'>
          <Logo className='group-hover:text-portfolio-accent' />
          <Link
            href='/'
            onClick={() => setMenuOpen(false)}
            className='hover:underline hover:underline-offset-3 hover:decoration-portfolio-accent'
          >
            My Portfolio
          </Link>
        </div>

        <button
          type='button'
          className='ml-auto flex h-11 w-11 items-center justify-center sm:hidden hover:text-portfolio-accent rounded-xs focus:outline-1 focus:outline-offset-3 focus:outline-portfolio-accent'
          title={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls='primary-navigation'
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen
            ? <LuX
              className='h-6 w-6'
              aria-hidden='true'
            />
            : <LuMenu
              className='h-6 w-6'
              aria-hidden='true'
            />
          }
        </button>

        <ul
          id='primary-navigation'
          className={`
            absolute left-0 top-full w-full flex-col gap-0 justify-end text-center
            bg-portfolio-primary
            border-y border-portfolio-tertiary sm:border-none
            sm:static sm:flex sm:w-auto sm:grow sm:flex-row sm:gap-6
            ${menuOpen ? 'flex' : 'hidden'}
          `}
        >
          {links.map(({ href, label }) => (
            <li
              key={href}
              className={`
                group px-4 py-2
                not-first:border-t border-portfolio-tertiary
                hover:bg-portfolio-tertiary sm:hover:bg-transparent
                sm:border-none sm:p-0 *:rounded-xs *:focus:outline-1 *:focus:outline-offset-3 *:focus:outline-portfolio-accent
                ${href === '/' ? 'sm:grow' : ''}
              `}
            >
              <Link
                href={href}
                className='group-hover:underline group-hover:underline-offset-2 group-hover:decoration-portfolio-accent py-1 px-2'
                //onClick={() => setMenuOpen(false)}
                onClick={(event) => {
                  if (
                    event.defaultPrevented ||
                    event.button !== 0 ||
                    event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
                  ) return;

                  setMenuOpen(false);

                  if (window.location.hash === href) {
                    const target = document.getElementById(href.slice(1));
                    if (target) {
                      event.preventDefault();
                      target.scrollIntoView();
                    }
                  }
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
