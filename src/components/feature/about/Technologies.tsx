import { LayoutCard } from '@/components/cards/LayoutCard'

function TechContent() {
  return (
    <>
      <ul className='flex flex-col gap-2 ml-5'>
        <li>
          <h3>Frontend</h3>
          <ul className='list-disc ml-5'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </li>

        <li>
          <h3>Backend</h3>
          <ul className='list-disc ml-5'>
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
          </ul>
        </li>

        <li>
          <h3>Server</h3>
          <ul className='list-disc ml-5'>
            <li>Apache</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </li>

        <li>
          <h3>Other</h3>
          <ul className='list-disc ml-5'>
            <li>Git</li>
            <li>Docker</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export function Technologies() {
  return (
    <>
      <LayoutCard
        Title='Technologies I use'
        Content={<TechContent />}
      />
    </>
  )
}