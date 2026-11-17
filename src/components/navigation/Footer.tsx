import { Logo } from '@/components/Logo';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const repoLink = 'https://github.com/kr-sjursen';
const version = '0.1.0';
const year = 2026;
const contactLinks = [
  {
    label: 'GitHub',
    link: 'https://github.com/kr-sjursen',
    icon: FaGithub
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kristian-sjursen-785436390/',
    icon: FaLinkedin
  },
  { // TODO: Set up an email for contact.
    label: 'Email',
    link: 'mailto:example@example.com',
    icon: FaEnvelope
  }
];

// TODO: Add legal links if needed.
// TODO: Add version controller so I can update the version easily without thinking about it.
export function Footer() {
  return (
    <footer className='
      relative w-full flex flex-col px-12 pt-4 pb-8 gap-4 mt-2
      bg-portfolio-primary
      border-t border-portfolio-primary
      text-kv-white
    '>
      <div className='flex flex-row justify-between gap-4'>
        <div className='flex flex-col grow gap-1'>
          <h2>Kristian Sjursen</h2>
          <Logo />
          <p>Web developer, based in Norway</p>
        </div>
        <ul className='flex flex-col gap-1'>
          {contactLinks.map(link => (
            <li
              key={link.label}
              className='hover:underline hover:underline-offset-2 hover:decoration-portfolio-accent'
            >
              <a href={link.link} className='flex items-center gap-1'>
                {link.label}
                <link.icon
                  className='order-first mt-0.5'
                  aria-hidden='true'
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-row justify-between text-sm'>
        <p className=''>© {year} Kristian Sjursen</p>
        <a
          href={repoLink}
          className='hover:underline hover:decoration-portfolio-accent'
        >
          <p>Version {version}</p>
        </a>
      </div>
    </footer>
  );
}
