export function Accessibility() {
  /**
   * Notes:
   * - Add direct examples of accessible features.
   * - Is it rude to add examples of common inaccessible patterns that look cool?
   * - Rewrite the story and make sure that i don't imply that the use of screen readers in general is exhausting, just while using inaccessible sites.
   */
  return (
    <article
      id='accessibility'
      className='
        flex flex-col gap-4 max-w-300
        mx-auto mb-8 px-8 pt-6 pb-8
      '
      aria-labelledby='accessibility-title'
    >
      <div className='flex flex-col gap-2'>
        <h2
          id='accessibility-title'
          className='text-3xl'
        >
          Why accessibility?
        </h2>
        <p>I have been lucky to learn about accessibility early in my career through various projects and courses, as well as personal study.</p>
        <p>What got me hooked was a lecture where a blind guest speaker shared their experience, and simply navigated the web using a screen reader. There are many lectures that left me exhausted afterwards, but this one might just have been the roughest one. The act of sitting there and having to listen to the screen reader for one lecture was exhausting, and i only had to listen to it for a relatively short time. The idea of having to navigate the web like that regularly, on websites not built with accessibility in mind, was infuriating.</p>
        <p>So I decided to focus on making my work accessible.</p>
        <p>It&apos;s a responsibility I take seriously in all my projects.</p>
      </div>

      <section
        id='accessibility-improved'
        aria-labelledby='accessibility-improved-title'
      >
        <h3
          id='accessibility-improved-title'
          className='text-2xl'
        >
          Accessibility can always be improved
        </h3>
        <p>There is always room to make things better. Even small improvements matter.</p>
        <p>It takes constant attention. It&apos;s a continuous effort, and it&apos;s never done.</p>
        <p>It is so easy to overlook, even unintentionally. That is why it has to be easy to report issues and give feedback.</p>
      </section>

      <section
        id='accessibility-benefit'
        aria-labelledby='accessibility-benefit-title'
      >
        <h3
          id='accessibility-benefit-title'
          className='text-2xl'
        >
          We all benefit from accessible web experiences
        </h3>
        <p>Accessible sites help everyone navigate better.</p>
        <p>It helps with usability too.</p>
        <p>It benefits everyone, but it shouldn&apos;t have to be that way for it to be important. If i can improve the experience for even just one person, it&apos;s worth it.</p>
      </section>
    </article>
  )
}
