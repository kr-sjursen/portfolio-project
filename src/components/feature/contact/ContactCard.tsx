import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';


interface ContactCardProps {
  Contact: string;
  Type: string;
  Subtitle?: string;
};

export function ContactCard({ Contact, Type, Subtitle }: ContactCardProps) {
  let icon, href;
  if (Type === 'Location') icon = <LuMapPin className='w-6 h-6' />;
  if (Type === 'Email') {
    icon = <FaEnvelope className='w-6 h-6' />;
    href = `mailto:${Contact}`;
  };
  if (Type === 'LinkedIn') {
    icon = <FaLinkedin className='w-6 h-6' />;
    href = Contact;
  };

  return (
    <li
      className='
        group relative flex flex-row items-center gap-2 px-6 py-4
        bg-portfolio-secondary
        border border-portfolio-tertiary rounded-lg
      '
      aria-labelledby={`contact-${Type}`}
    >
      <div className='flex flex-col gap-1'>
        <h3
          id={`contact-${Type}`}
          className=''
        >
          {Type}
        </h3>
        {!href && <span>{Contact}</span>}
        {href && (
          <a
            href={href}
            rel='noopener noreferrer'
            target='_blank'
            className='after:absolute after:inset-0 text-sm'
          >
            {Contact}
          </a>
        )}
        {Subtitle && <p className='text-sm'>{Subtitle}</p>}
      </div>
      <span
        // TODO: Consider adding an animation on hover
        className='order-first mr-2 group-hover:text-portfolio-accent'
        aria-hidden='true'
      >
        {icon}
      </span>
    </li>
  );
}
