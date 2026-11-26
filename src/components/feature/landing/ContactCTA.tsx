import { ContactForm } from '@/components/feature/contact/ContactForm';
import { ContactCard } from '@/components/feature/contact/ContactCard';

const contactInfo = [
  {
    Contact: 'kr.sjursen@gmail.com',
    Type: 'Email',
    Subtitle: 'Reach me anytime'
  },
  {
    Contact: 'https://www.linkedin.com/in/kristian-sjursen-785436390/',
    Type: 'LinkedIn',
    Subtitle: 'Connect with me'
  },
  {
    Contact: 'Bergen, Norway',
    Type: 'Location',
    Subtitle: 'Remote work available'
  }
];

/**
 * Inspiration observations:
 * - Some add contact info in cards.
 *   - Consider adding timezone info.
 *   - State that i am available for remote work.
 * - Add backend for the contact form
 * - Set up a CMS for managing form responses.
 * - Improve title to be more engaging (like "Let's build something" but less generic)
 * - Consider adding a subtitle for context? (like "Have a project in mind? I'd love to hear about it.")
 */
export function ContactCTA() {
  // TODO: Wrap section on smaller screens
  return (
    <section
      id='contact'
      className='
        flex flex-col gap-6 max-w-300
        mx-auto mb-8 px-10 py-8
      '
      aria-labelledby='contact-title'
    >
      <div className='
        flex flex-col gap-4 mb-2
        text-center
      '>
        <h2
          id='contact-title'
          className='text-4xl'
        >
          Let&apos;s Talk!
        </h2>
        <p>
          I&apos;m always looking to connect and help make the web more
          accessible, one website at a time. 
        </p>
        <p>I can be reached via email or LinkedIn, feel free to connect anytime.</p>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-4'>
        <ul
          className='flex flex-col md:flex-row *:flex-1 lg:flex-col gap-4'
          aria-label='Contact info'
        >
          {contactInfo.map(info => (
            <ContactCard key={info.Type} {...info} />
          ))}
        </ul>
        <ContactForm />
      </div>
    </section>
  )
}
