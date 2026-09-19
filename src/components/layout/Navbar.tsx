import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../../data/profile';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useLanguage } from '../../hooks/useLanguage';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSection, isScrolled } = useScrollProgress();
  const { t, isRtl, language } = useLanguage();

  // Close mobile drawer on route click or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 glass-nav shadow-lg shadow-black/5 dark:shadow-black/30'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo / Name */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group select-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              data-cursor="hover"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-emerald-400 p-[1px] shadow-sm">
                <div className="w-full h-full rounded-[11px] bg-white dark:bg-dark-bg flex items-center justify-center font-bold text-accent text-sm">
                  7M
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-dark-text group-hover:text-accent transition-colors">
                  {language === 'ar' ? 'عبدالحميد' : 'Abdlhamed'}
                </span>
                <span className="text-[10px] font-mono font-medium text-slate-500 dark:text-dark-subtle -mt-0.5">
                  7MED
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-dark-surface/60 backdrop-blur-md shadow-sm">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-600 dark:text-dark-muted hover:text-slate-900 dark:hover:text-dark-text'
                    }`}
                    data-cursor="hover"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-accent/15 dark:bg-accent/20 border border-accent/30 dark:border-accent/40 shadow-sm"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{t('nav', item.labelKey)}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: Switchers & Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                iconPosition={isRtl ? 'start' : 'end'}
              >
                {t('nav', 'ctaWork')}
              </Button>
            </div>

            {/* Mobile Controls (Language + Theme + Hamburger) */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
              <ThemeToggle />
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? t('nav', 'menuClose') : t('nav', 'menuOpen')}
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-dark-surface/80 text-slate-700 dark:text-dark-muted hover:text-accent focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Full Screen Drawer / Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[60px] z-30 lg:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border text-base font-bold transition-all ${
                      isActive
                        ? 'border-accent/40 bg-accent/10 text-accent'
                        : 'border-slate-200 dark:border-white/10 text-slate-800 dark:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-surface/50'
                    }`}
                  >
                    <span>{t('nav', item.labelKey)}</span>
                    <span className="text-xs font-mono text-slate-400 dark:text-dark-subtle">0{idx + 1}</span>
                  </motion.a>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-slate-200 dark:border-white/10 space-y-4">
              <Button
                href="#contact"
                onClick={closeMobileMenu}
                variant="primary"
                size="lg"
                className="w-full justify-center"
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition={isRtl ? 'start' : 'end'}
              >
                {t('nav', 'ctaWork')}
              </Button>

              <p className="text-center text-xs text-slate-500 dark:text-dark-subtle font-mono">
                {PROFILE.title} • {language === 'ar' ? PROFILE.nameAr : PROFILE.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
