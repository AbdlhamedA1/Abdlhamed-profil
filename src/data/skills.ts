import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'core',
    titleKey: 'category_core',
    skills: [
      {
        name: 'React.js',
        levelTag: 'Core Library',
        iconName: 'Atom',
        descriptionKey: 'skill_react_desc',
      },
      {
        name: 'TypeScript',
        levelTag: 'Type System',
        iconName: 'FileCode2',
        descriptionKey: 'skill_ts_desc',
      },
      {
        name: 'JavaScript (ES6+)',
        levelTag: 'Language',
        iconName: 'Code',
        descriptionKey: 'skill_js_desc',
      },
    ],
  },
  {
    id: 'styling',
    titleKey: 'category_styling',
    skills: [
      {
        name: 'Tailwind CSS',
        levelTag: 'Modern CSS',
        iconName: 'Palette',
        descriptionKey: 'skill_tailwind_desc',
      },
      {
        name: 'CSS3 / Modern Layouts',
        levelTag: 'Flexbox & Grid',
        iconName: 'Layers',
        descriptionKey: 'skill_css_desc',
      },
      {
        name: 'Bootstrap',
        levelTag: 'Responsive UI',
        iconName: 'LayoutGrid',
        descriptionKey: 'skill_bootstrap_desc',
      },
      {
        name: 'HTML5 Semantic Web',
        levelTag: 'Accessibility & SEO',
        iconName: 'Globe',
        descriptionKey: 'skill_html_desc',
      },
    ],
  },
  {
    id: 'tools',
    titleKey: 'category_tools',
    skills: [
      {
        name: 'Git',
        levelTag: 'Version Control',
        iconName: 'GitBranch',
        descriptionKey: 'skill_git_desc',
      },
      {
        name: 'GitHub',
        levelTag: 'Collaboration & CI',
        iconName: 'Github',
        descriptionKey: 'skill_github_desc',
      },
    ],
  },
];
