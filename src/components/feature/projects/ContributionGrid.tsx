'use client';

import { useEffect, useId, useRef, useState } from 'react';

type ContributionDay = {
  date: string;
  weekday: number;
  contributionCount: number;
  color: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

export function ContributionGrid({ weeks }: { weeks: Week[] }) {
  const [weekLimit, setWeekLimit] = useState(24);
  const visibleWeeks = weeks.slice(-weekLimit);
  const days = visibleWeeks.flatMap((week) => week.contributionDays);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [position, setPosition] = useState<{
    left: number;
    top: number;
    above: boolean;
    width: number;
  } | null>(null);

  const active = dismissed ? null : hovered ?? focused;

  useEffect(() => {
    if (active === null) return;

    function updatePosition() {
      const button = buttons.current[active!];
      const container = containerRef.current;
      if (!button || !container) return;

      const rect = button.getBoundingClientRect();
      const bounds = container.getBoundingClientRect();

      if (rect.right <= bounds.left || rect.left >= bounds.right) {
        setPosition(null);
        return;
      }

      const width = Math.min(208, window.innerWidth - 16);
      const left = Math.max(
        8,
        Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - 8)
      );
      const above = rect.top >= 80;

      setPosition({
        left,
        top: above ? rect.top : rect.bottom,
        above,
        width,
      });
    }

    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [active]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setDismissed(true);
    }

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const offsets: Record<string, number> = {
      ArrowLeft: -7,
      ArrowRight: 7,
      ArrowUp: -1,
      ArrowDown: 1,
    };

    const offset = offsets[event.key];
    if (offset === undefined) return;

    event.preventDefault();
    const next = index + offset;
    if (next >= 0 && next < days.length) {
      buttons.current[next]?.focus();
    }
  }

  useEffect(() => {
  const media = window.matchMedia('(max-width: 639px)');

  function updateWeekLimit() {
    setWeekLimit(media.matches ? 16 : 24);
    setCursor(0);
    setHovered(null);
    setFocused(null);
  }

  updateWeekLimit();
    media.addEventListener('change', updateWeekLimit);
    return () => media.removeEventListener('change', updateWeekLimit);
  }, []);

  // TODO: Clean up divs where possible for simpler and/or more semantic structure.
  // TODO: Get rid of the buttons!
  return (
    <div ref={containerRef} className='relative order-1 mb-2'>
      <div className='overflow-x-auto'>
        <div className='flex w-max gap-1' aria-label='Daily GitHub contributions'>
          {visibleWeeks.map((week) => (
            <div key={week.contributionDays[0].date} className='grid grid-rows-7 gap-1'>
              {week.contributionDays.map((day) => {
                const index = days.findIndex((item) => item.date === day.date);

                return (
                  <button
                    key={day.date}
                    ref={(element) => { buttons.current[index] = element; }}
                    type='button'
                    tabIndex={cursor === index ? 0 : -1}
                    aria-label={`${day.contributionCount} contributions on ${day.date}`}
                    aria-describedby={active === index && position ? tooltipId : undefined}
                    className='h-3 w-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                    style={{ backgroundColor: day.color, gridRowStart: day.weekday + 1 }}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    onFocus={() => {
                      setCursor(index);
                      setFocused(index);
                      setDismissed(false);
                    }}
                    onBlur={() => setFocused(null)}
                    onMouseEnter={() => {
                      setHovered(index);
                      setDismissed(false);
                    }}
                    onMouseLeave={(event) => {
                      if (!tooltipRef.current?.contains(event.relatedTarget as Node | null)) {
                        setHovered(null);
                      }
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {active !== null && position && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role='tooltip'
          className='fixed z-50 rounded-md border border-[#444c56] bg-[#2d333b] px-3 py-2 text-center text-xs text-white shadow-lg'
          style={{
            left: position.left,
            top: position.top,
            width: position.width,
            transform: position.above ? 'translateY(-100%)' : undefined,
          }}
          onMouseLeave={() => setHovered(null)}
        >
          <strong>
            {days[active].contributionCount}{' '}
            {days[active].contributionCount === 1 ? 'contribution' : 'contributions'}
          </strong>
          <div className='text-[#adbac7]'>{days[active].date}</div>
        </div>
      )}
    </div>
  );
}
