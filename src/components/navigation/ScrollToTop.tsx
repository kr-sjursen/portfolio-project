'use client';

import { useEffect, useState } from 'react';
import { LuArrowUp } from 'react-icons/lu';

// TODO: Add smooth scroll effect
// TODO: Hide button when at top of page
// TODO: Add icon.
// TODO: Ensure it is accessible

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottom, setBottom] = useState(16);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) {
      console.error('ScrollToTop: site footer not found');
      return;
    }

    function updatePosition() {
      setIsVisible(window.scrollY > 100);
      const footerTop = footer!.getBoundingClientRect().top;
      setBottom(Math.max(16, window.innerHeight - footerTop + 16));
    }

    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'instant' : 'smooth',
    });
  }

  if (!isVisible) return null;

  // TODO: Add animation on appear and disappear
  return (
    <div
      className='fixed right-6 sm:right-4 z-99'
      style={{ bottom: `max(1.5rem, ${bottom}px)` }}
    >
      <button
        onClick={scrollToTop}
        title='Scroll to top'
        className='
          flex flex-row justify-center items-center p-2
          bg-portfolio-accent-dark
          text-black text-base
          border-2 border-portfolio-accent-dark
          hover:bg-portfolio-accent
          focus:bg-portfolio-accent
          focus:outline-2 focus:outline-portfolio-accent-dark
          focus:-outline-offset-2
          rounded-full! w-14 h-14 sm:w-18 sm:h-18
        '
      >
        <LuArrowUp
          className='w-8 h-8'
          aria-hidden='true'
        />
      </button>
    </div>
  );
}
