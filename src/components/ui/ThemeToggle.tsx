import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { t } = useLanguage();

  const label = isDark ? t('nav', 'themeLight') : t('nav', 'themeDark');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-dark-surface/80 text-slate-700 dark:text-dark-muted hover:text-accent dark:hover:text-accent hover:border-accent/40 dark:hover:border-accent/40 shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
