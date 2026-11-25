'use client';

import { useEffect, useState } from 'react';
import { LinkButton } from '@/components/buttons/LinkButtons';

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
      setIsVisible(window.scrollY > window.innerHeight);
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

  return (
    <div className='fixed right-4 z-99' style={{ bottom }}>
      <LinkButton
        IsButton
        OnClick={scrollToTop}
        Text='Scroll to top'
        Style='rounded-full! w-20 h-20'
      />
    </div>
  );
}
