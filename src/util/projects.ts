export type projectItem = {
  slug: string;
  title: string;
  projectLink: string;
  description: string;
  stack: string[];

  hasImage: boolean;
  image?: string;

  hasGithub: boolean;
  github?: string;
  hasCaseStudy: boolean;
  caseStudyPath?: string;

  featured?: boolean;
};

export const projects: projectItem[] = [
  {
    slug: 'jobloop',
    title: 'Jobloop',
    projectLink: 'https://www.jobloop.no/',
    description: 'I got to work on improving the accessibility of this site. This included a more semantic structure, proper labels, and easier navigation.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],

    hasImage: false,
    hasGithub: true,
    github: 'https://github.com/Kodeverket-AS/Project-Jobloop',
    hasCaseStudy: false,
    featured: true,
  },
  {
    slug: 'example-project',
    title: 'Example Project',
    projectLink: 'https://example.com',
    description: 'An example project.',
    stack: ['PHP'],

    hasImage: false,
    hasGithub: false,
    hasCaseStudy: true,
    caseStudyPath: '/example-project-case-study'
  }
];
