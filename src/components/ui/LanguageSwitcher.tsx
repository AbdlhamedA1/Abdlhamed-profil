import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-dark-surface/80 text-xs font-medium shadow-sm ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="ps-2 pe-1 text-slate-400 dark:text-dark-subtle">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`relative px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
          language === 'en'
            ? 'text-slate-900 dark:text-white'
            : 'text-slate-500 dark:text-dark-muted hover:text-slate-900 dark:hover:text-dark-text'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="lang-pill"
            className="absolute inset-0 rounded-full bg-accent/15 dark:bg-accent/20 border border-accent/30 dark:border-accent/40 shadow-sm"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('ar')}
        aria-pressed={language === 'ar'}
        className={`relative px-2.5 py-1 rounded-full text-[11px] font-semibold font-arabic transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
          language === 'ar'
            ? 'text-slate-900 dark:text-white'
            : 'text-slate-500 dark:text-dark-muted hover:text-slate-900 dark:hover:text-dark-text'
        }`}
      >
        {language === 'ar' && (
          <motion.div
            layoutId="lang-pill"
            className="absolute inset-0 rounded-full bg-accent/15 dark:bg-accent/20 border border-accent/30 dark:border-accent/40 shadow-sm"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">عربي</span>
      </button>
    </div>
  );
};
