import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'MessageCircle':
        return <MessageCircle className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <Github className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-dark-surface/40 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-start space-y-1.5">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-dark-text tracking-tight">
              {language === 'ar' ? PROFILE.nameAr : PROFILE.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-dark-muted">
              {t('footer', 'tagline')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-dark-bg/60 text-slate-600 dark:text-dark-muted hover:text-accent dark:hover:text-accent hover:border-accent/40 dark:hover:border-accent/40 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                data-cursor="hover"
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-dark-bg/60 text-slate-700 dark:text-dark-muted hover:text-accent dark:hover:text-accent hover:border-accent/40 shadow-sm transition-all duration-200"
              data-cursor="hover"
              aria-label={t('footer', 'backToTop')}
            >
              <span>{t('footer', 'backToTop')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Sub-footer copyright & tech badge */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] font-mono text-slate-500 dark:text-dark-subtle">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. {t('footer', 'rights')}
          </p>
          {/* <p>{t('footer', 'designedWith')}</p> */}
        </div>
      </div>
    </footer>
  );
};
