import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export function ContactCTA() {
  return (
    <section
      id='contact'
      className='
        flex flex-col gap-2 max-w-300
        mx-auto mb-8 px-8 py-6
        bg-portfolio-primary rounded-lg
        border border-portfolio-tertiary
      '
      aria-labelledby='contact-title'
    >
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
      <div className='flex gap-2'>
        <a
          className='
            flex items-center gap-1 w-fit px-4 py-2
            bg-portfolio-accent text-kv-black rounded-lg
            hover:bg-portfolio-primary hover:text-kv-white
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
            bg-portfolio-accent text-kv-black rounded-lg
            hover:bg-portfolio-primary hover:text-kv-white
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
    </section>
  )
}
