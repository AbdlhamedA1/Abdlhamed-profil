import { TrainingItem } from '../types';

export const TRAINING_ITEMS: TrainingItem[] = [
  {
    id: 'iti-uiux',
    institutionKey: 'iti_title',
    programKey: 'iti_uiux_track',
    badgeKey: 'badge_training',
    tags: ['UI/UX Design', 'User Research', 'Wireframing', 'Figma', 'Photoshop'],
    // Centralized certificate image path (located in public/images/certificates/iti-uiux-certificate.jpg)
    certificateUrl: '/images/certificates/iti-uiux-certificate.jpg',
    certificateAltKey: 'iti_uiux_cert_alt',
    certificateDescriptionKey: 'iti_uiux_cert_desc',
  },
  {
    id: 'iti-react',
    institutionKey: 'iti_title',
    programKey: 'iti_react_track',
    badgeKey: 'badge_training',
    tags: ['React.js', 'Front-End', 'JavaScript', 'Component Architecture'],
    // Centralized certificate image path (upload to public/images/certificates/iti-react-certificate.jpg)
    certificateUrl: '/images/certificates/iti-react-certificate.jpg',
    certificateAltKey: 'iti_react_cert_alt',
    certificateDescriptionKey: 'iti_react_cert_desc',
  },
  {
    id: 'sef-frontend',
    institutionKey: 'sef_title',
    programKey: 'sef_frontend_track',
    badgeKey: 'badge_diploma',
    tags: ['React JS', 'Front-End Development', 'JavaScript', 'Web Development'],
    // Centralized certificate image path (located in public/images/certificates/sef-frontend-diploma.jpg)
    certificateUrl: '/images/certificates/sef-frontend-diploma.jpg',
    certificateAltKey: 'sef_frontend_cert_alt',
    certificateDescriptionKey: 'sef_frontend_cert_desc',
  },
];


