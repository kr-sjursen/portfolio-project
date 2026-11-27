import { RefObject, useEffect } from 'react';

type FocusTrapOptions = {
  containerRef: RefObject<HTMLElement | null>;
  isActive: boolean;
  onEscape?: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

// TODO: Implement focus trap logic function
