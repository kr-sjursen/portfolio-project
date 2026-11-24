export function Education() {
  return (
    <section
      id='education'
      className='
        flex flex-col gap-2 px-4 py-6
        bg-portfolio-secondary
        border border-portfolio-tertiary rounded-lg
      '
      aria-labelledby='education-title'
    >
      <h3
        id='education-title'
        className='text-2xl mb-2'
      >
        Education
      </h3>
      <ul className='flex flex-col gap-2'>
        {/* TODO: Correct the dates where needed */}
        <li>
          <h4 className='text-xl'>Bachelor in Digital Culture</h4>
          <p className='text-sm font-light'>2021-2025</p>
          <p>I studied at the University of Bergen and graduated in 2025.</p>
          <p>Relevant courses: PHP, history of the digital age, culture</p>
        </li>
        <li>
          <h4 className='text-xl'>Folkehøgskole</h4>
          <p className='text-sm font-light'>2020-2021</p>
          <p>I spent a year at <a href='https://risoy.fhs.no/' rel='noopener' target='_blank'>Risør Folkehøgskole</a>, attending their <span className='italic'>Tegne, Male, Reise</span> course.</p>
          <p>I made the yearbook for that year&apos;s classes, using Adobe InDesign.</p>
          <p>Relevant knowledge: art and design basics, color theory, history of art and architecture</p>
        </li>
        <li>
          <h4 className='text-xl'>High School</h4>
          <p className='text-sm font-light'>2017-2020</p>
          <p>I studied <span className='italic'>media og kommunikasjon</span> at Garnes VGS for two years, followed by a year of <span className='italic'>General studies</span> to receive my <span className='italic'>General University Admissions Certification</span> at Åsane VGS.</p>
          <p>Relevant courses: media studies, communication, design</p>
        </li>
      </ul>
    </section>
  );
}