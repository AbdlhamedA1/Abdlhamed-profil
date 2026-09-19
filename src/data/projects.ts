import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    titleKey: 'project_1_title',
    descriptionKey: 'project_1_desc',
    categoryKey: 'project_1_category',
    tags: ['HTML', 'CSS', 'UI/UX Design'],
    liveUrl: 'https://abdlhameda1.github.io/project-2/',
    codeUrl: 'https://github.com/AbdlhamedA1/project-2',
    isFeatured: true,
    layoutVariant: 'featured',
    // Centralized project cover image path (located in public/images/projects/project-1.png)
    imageUrl: '/images/projects/project-1.png',
    imageAlt: 'Interactive Web Experience & UI Showcase Preview',
    imagePosition: 'object-top',
    imagePlaceholder: {
      accentColor: '#0ea5e9',
      pattern: 'mesh',
    },
  },
  {
    id: 'project-2',
    titleKey: 'project_2_title',
    descriptionKey: 'project_2_desc',
    categoryKey: 'project_2_category',
    tags: ['HTML5', 'CSS3', 'Responsive UI'],
    liveUrl: 'https://abdlhameda1.github.io/mustacchio/',
    codeUrl: 'https://github.com/AbdlhamedA1/mustacchio',
    isFeatured: false,
    layoutVariant: 'medium',
    // Centralized project cover image path (located in public/images/projects/project-2.png)
    imageUrl: '/images/projects/project-2.png',
    imageAlt: 'Mustacchio Lifestyle & Brand Platform Preview',
    imagePosition: 'object-top',
    imagePlaceholder: {
      accentColor: '#10b981',
      pattern: 'geometric',
    },
  },
  {
    id: 'project-3',
    titleKey: 'project_3_title',
    descriptionKey: 'project_3_desc',
    categoryKey: 'project_3_category',
    tags: [ 'HTML5', 'CSS3'],
    liveUrl: 'https://abdlhameda1.github.io/project-1-new/',
    codeUrl: 'https://github.com/AbdlhamedA1/project-1-new',
    isFeatured: false,
    layoutVariant: 'medium',
    // Centralized project cover image path (located in public/images/projects/project-3.png)
    imageUrl: '/images/projects/project-3.png',
    imageAlt: 'Modern Product Showcase & Landing Experience Preview',
    imagePosition: 'object-top',
    imagePlaceholder: {
      accentColor: '#8b5cf6',
      pattern: 'code',
    },
  },
  {
    id: 'project-4',
    titleKey: 'project_4_title',
    descriptionKey: 'project_4_desc',
    categoryKey: 'project_4_category',
    tags: [ 'HTML','CSS','Java Script', 'Modern Layout'],
    liveUrl: 'https://abdlhameda1.github.io/project-4/',
    codeUrl: 'https://github.com/AbdlhamedA1/project-4',
    isFeatured: false,
    layoutVariant: 'compact',
    // Centralized project cover image path (located in public/images/projects/project-4.png)
    imageUrl: '/images/projects/project-4.png',
    imageAlt: 'Dynamic Web Interface & Layout Project Preview',
    imagePosition: 'object-top',
    imagePlaceholder: {
      accentColor: '#f59e0b',
      pattern: 'minimal',
    },
  },
];
