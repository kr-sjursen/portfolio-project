import { LinkButton } from '@/components/buttons/LinkButtons';

// TODO: Add smooth scroll effect
// TODO: Hide button when at top of page
// TODO: Add icon.
// TODO: Ensure it is accessible
export function ScrollToTop() {
  return (
    <LinkButton
      Path='#main'
      Text='Scroll to top'
      Style='fixed bottom-4 right-4 rounded-full! w-20 h-20 z-99'
    />
  );
}
