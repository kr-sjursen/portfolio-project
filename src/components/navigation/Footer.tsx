import { Logo } from '@/components/Logo';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const repoLink = 'https://github.com/kr-sjursen';
const issueLink = 'https://github.com/kr-sjursen/portfolio-project/issues';
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
  { // TODO: Set up an email specific for contact when going live.
    label: 'Email',
    link: 'mailto:kr.sjursen@gmail.com',
    icon: FaEnvelope
  }
];

// TODO: Add legal links if needed.
// TODO: Add version controller so I can update the version easily without thinking about it.
export function Footer() {
  return (
    <footer
      id='site-footer'
      className='
        relative w-full flex flex-col flex-wrap mx-auto px-12 py-10 gap-6 mt-6
        bg-portfolio-primary
        border-t border-portfolio-tertiary
        text-kv-white
      '
    >
      <div className='flex flex-col sm:flex-row justify-between gap-6'>
        <div className='flex flex-col gap-2 items-center sm:items-start'>
          <h2 className='text-lg -mt-1'>Kristian Sjursen</h2>
          <Logo />
          <p>Web developer</p>
          <p>
            Bergen, Norway
          </p>
        </div>
        <ul className='
          flex flex-col gap-2 items-center sm:items-end
          border-t border-portfolio-tertiary pt-6 w-fit mx-auto
          sm:border-none sm:pt-0 sm:mx-0
        '>
          {contactLinks.map(link => (
            <li
              key={link.label}
              className='hover:underline hover:underline-offset-2 hover:decoration-portfolio-accent'
            >
              <a href={link.link} className='flex items-center gap-1'>
                {link.label}
                <link.icon
                  className='order-first'
                  aria-hidden='true'
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='
        flex flex-col sm:flex-row gap-4 text-center justify-between text-sm
        border-t border-portfolio-tertiary pt-8 font-mono
        w-fit sm:w-full mx-auto sm:mx-0
      '>
        <p className=''>© {year} Kristian Sjursen</p>
        <a
          href={repoLink}
          className='hover:underline hover:decoration-portfolio-accent'
        >
          <p>Version {version}</p>
        </a>
        <a
          href={issueLink}
          className='hover:underline hover:decoration-portfolio-accent'
        >
          Report Issue
        </a>
      </div>
    </footer>
  );
}
