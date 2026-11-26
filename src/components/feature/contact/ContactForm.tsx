import Form from 'next/form'
import { FaPhone, FaPen } from 'react-icons/fa';
import { IoPerson, IoMailSharp } from 'react-icons/io5';
import { LinkButton } from '@/components/buttons/LinkButtons'

const required = <span className='text-red-400 ml-1' aria-hidden='true'>*</span>;
const data = [
  {
    id: 'full-name',
    label: 'Full name',
    type: 'text',
    placeholder: 'Your Full Name',
    icon: <IoPerson />,
    required: true
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    icon: <IoMailSharp />,
    required: true
  },
  {
    id: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: 'Optional',
    icon: <FaPhone />,
    required: false
  },
  {
    id: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: "What's this about?",
    icon: <FaPen />,
    required: true
  }
];

// TODO: Consider adding a subject dropdown? (can i have a dropdown with a free-text option?)
// TODO: Add a confirmation message after submit.
// TODO: Add form validation feedback.
// TODO: Consider limiting message length, to incentivize brevity (e.g., 2000 chars should be plenty). If limit has been reached, give an explanation to the user and give a recommendation to shorten it, but consider giving an option to override it (but, add quiet warning in subject line).
// TODO: Test form fields with long input to ensure layout holds.
export function ContactForm() {
  return (
    <Form
      action='/' // TODO: set correct endpoint
      id='contact-form'
      className='
        flex flex-col wrap gap-x-2 gap-y-4 px-6 py-4 justify-center w-full
        bg-portfolio-secondary
        border border-portfolio-tertiary rounded-xl
        text-sm
      '
      aria-labelledby='contact-form-title'
    >
      <h3
        id='contact-form-title'
        className='
          mx-auto mb-2 px-4 w-fit
          text-xl text-center
          border-b border-portfolio-accent
        '
      >
        Contact Me
      </h3>
      <div className='flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-4'>
        {data.map(d => (
          <div
            key={d.id}
            className='flex flex-col gap-1 sm:w-[calc(50%-0.5rem)]'
          >
            <label
              htmlFor={d.id}
              className='w-fit'
            >
              {d.label}{d.required ? required : ''}
            </label>
            <div className='
              group flex flex-row gap-3 w-full px-1 items-center
              border border-portfolio-tertiary rounded-md
              bg-portfolio-primary
            '>
              <span
                className='ml-1 group-focus-within:text-portfolio-accent'
                aria-hidden='true'
              >
                {d.icon}
              </span>
              <input
                id={d.id}
                name={d.id}
                type={d.type}
                placeholder={d.placeholder}
                className='
                  w-full py-1 my-1 rounded-xs
                  focus:outline-1 focus:outline-offset-3
                  focus:outline-portfolio-accent
                '
                required={d.required}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='message'>Message{required}</label>
        <textarea
          id='message'
          name='message'
          rows={4}
          placeholder='Your message'
          className='
            w-full min-h-24 px-4 p-2
            field-sizing-content
            bg-portfolio-primary
            text-kv-white
            border border-portfolio-tertiary rounded-md
            focus:outline-1 focus:outline-portfolio-accent
          '
          required
        />
      </div>
      <LinkButton
        Text='Send'
        Type='submit'
        IsButton
      />
    </Form>
  );
}
