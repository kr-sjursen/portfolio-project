import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { ContactForm } from '@/components/feature/contact/ContactForm';

/**
 * Inspiration observations:
 * - Some add contact info in cards.
 *   - Consider adding timezone info.
 *   - State that i am available for remote work.
 * - Consider adding a contact form (even if it requires some backend)
 *   - Fields for: full name, email, subject, message.
 * - Improve title to be more engaging (like "Let's build something" but less generic)
 * - Consider adding a subtitle for context? (like "Have a project in mind? I'd love to hear about it.")
 *
 * Maybe structure can be more like the following:
 * [Email]    [Form]
 * [LinkedIn] [Form]
 * [Location] [Form]
 */
export function ContactCTA() {
  return (
    <section
      id='contact'
      className='
        flex flex-row gap-2 max-w-300
        mx-auto mb-8 px-8 py-6
        bg-portfolio-primary rounded-lg
        border border-portfolio-tertiary
      '
      aria-labelledby='contact-title'
    >
      <div className='flex flex-col gap-2 justify-center'>
        <h2
          id='contact-title'
          className='text-3xl'
        >
          Let&apos;s Talk!
        </h2>
        <p>
          I&apos;m always looking to connect and help make the web more
          accessible, one website at a time. 
        </p>
        <p>I can be reached via email or LinkedIn, feel free to connect anytime.</p>
        <div className='flex gap-2 mb-2'>
          <a
            className='
              flex items-center gap-1 w-fit px-4 py-2
              bg-portfolio-accent-dark text-kv-black rounded-lg
              hover:bg-portfolio-accent
              shadow-md shadow-portfolio-primary/25
            '
            href='mailto:kr.sjursen@gmail.com'
          >
            Email
            <FaEnvelope
              className='order-first'
              aria-hidden='true'
            />
          </a>
          <a
            className='
              flex items-center gap-1 w-fit px-4 py-2
              bg-portfolio-accent-dark text-kv-black rounded-lg
              hover:bg-portfolio-accent
              shadow-md shadow-portfolio-primary/25
            '
            href='https://www.linkedin.com/in/kristian-sjursen-785436390/'
          >
            LinkedIn
            <FaLinkedin
              className='order-first'
              aria-hidden='true'
            />
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  )
}
