export type Theme = 'dark' | 'light';
export type Language = 'en' | 'ar';

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  categoryKey: string;
  tags: string[];
  liveUrl: string;
  codeUrl?: string;
  isFeatured?: boolean;
  layoutVariant: 'featured' | 'medium' | 'compact';
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: string;
  imagePlaceholder: {
    accentColor: string;
    pattern: 'mesh' | 'geometric' | 'code' | 'minimal';
    previewUrl?: string;
  };
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  levelTag?: string;
  iconName: string;
  descriptionKey: string;
}

export interface EducationData {
  id: string;
  institutionKey: string;
  fieldKey: string;
  badgeKey: string;
  degreeTypeKey: string;
}

export interface TrainingItem {
  id: string;
  institutionKey: string;
  programKey: string;
  badgeKey: string;
  tags: string[];
  certificateUrl?: string;
  certificateAltKey?: string;
  certificateDescriptionKey?: string;
}

export interface EducationItem {
  id: string;
  type: 'education' | 'training';
  institutionKey: string;
  programKey: string;
  badgeKey: string;
  descriptionKey: string;
}

export interface NavItem {
  id: string;
  labelKey: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}
