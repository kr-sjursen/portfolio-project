'use client';

import { useState, useEffect } from 'react';

// TODO: When select is closed, show the disabled option to return it to looking like a button that says "Theme". Find out if this is reasonable with regards to accessibility first.
// TODO: Ensure that no flash of default theme occurs on load
// TODO: Add a theme that is purely HTML, no CSS.
export function ThemeSelect() {
  const themes = [
    'default',
    'light',
    'dark'
  ];
  const [theme, setTheme] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest('#themeSelect')) setMenuOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, []);

  return (
    <div>
      <button
        id='themeSelect'
        className='relative w-full hover:underline hover:decoration-portfolio-accent'
        type='button'
        aria-expanded={menuOpen}
        aria-controls='theme-menu'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Theme
      </button>
      <ul
        id='theme-menu'
        className={`
          absolute top-full right-0 z-60 flex flex-col gap-2 py-2 min-w-25
          border-t border-portfolio-accent
          bg-portfolio-primary shadow-md shadow-portfolio-primary/20
          text-kv-white text-lg
          ${menuOpen ? '' : 'hidden'}
        `}
      >
        {themes.map(theme => (
          <li
            key={theme}
            className='group'
          >
            <button
              type='button'
              data-theme={theme}
              aria-pressed='false'
              aria-label={`Set ${theme} theme`}
              className='mx-4 group-hover:underline group-hover:decoration-portfolio-accent'
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
