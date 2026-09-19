import { SocialLink } from '../types';
import profilePhoto from '../assets/profile.jpg';

export const PROFILE = {
  name: 'Abdlhamed Abdlrady',
  nameAr: 'عبدالحميد عبدالراضي',
  title: 'Front-End Developer',
  tagline: 'Front-End Developer • Building modern web experiences',
  email: 'abdalhamedabass@gmail.com',
  whatsappUrl: 'https://wa.me/qr/DW2VJG5JJRINO1',
  githubUrl: 'https://github.com/AbdlhamedA1',
  linkedinUrl: 'https://www.linkedin.com/in/abdlhamed-abdlrady',
  
  // Real personal profile photo imported directly for 100% reliable bundling across GitHub Pages and custom domains
  customAvatarUrl: profilePhoto,
  avatarAlt: 'Portrait of Abdlhamed Abdlrady, Front-End Developer',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: PROFILE.githubUrl,
    icon: 'Github',
    ariaLabel: 'Visit GitHub Profile',
  },
  {
    name: 'LinkedIn',
    url: PROFILE.linkedinUrl,
    icon: 'Linkedin',
    ariaLabel: 'Visit LinkedIn Profile',
  },
  {
    name: 'WhatsApp',
    url: PROFILE.whatsappUrl,
    icon: 'MessageCircle',
    ariaLabel: 'Chat on WhatsApp',
  },
  {
    name: 'Email',
    url: `mailto:${PROFILE.email}`,
    icon: 'Mail',
    ariaLabel: 'Send an Email',
  },
];

export const NAV_ITEMS = [
  { id: 'hero', labelKey: 'home', href: '#hero' },
  { id: 'about', labelKey: 'about', href: '#about' },
  { id: 'skills', labelKey: 'skills', href: '#skills' },
  { id: 'projects', labelKey: 'projects', href: '#projects' },
  { id: 'education', labelKey: 'education', href: '#education' },
  { id: 'contact', labelKey: 'contact', href: '#contact' },
];
