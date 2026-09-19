import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { AnimeAvatar } from './AnimeAvatar';
import { useLanguage } from '../../hooks/useLanguage';
import { PROFILE, SOCIAL_LINKS } from '../../data/profile';

export const Hero: React.FC = () => {
  const { t, isRtl, language } = useLanguage();

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
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Hero Content) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-start"
          >
            {/* Status / Eyebrow Pill */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-dark-surface/70 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-dark-muted">
                  {t('hero', 'eyebrow')}
                </span>
              </div>
            </motion.div>

            {/* Name Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-dark-text mb-3"
            >
              {language === 'ar' ? PROFILE.nameAr : PROFILE.name}
            </motion.h1>

            {/* Professional Title & Tagline */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-accent via-accent-hover to-emerald-400 bg-clip-text text-transparent">
                {t('hero', 'title')}
              </h2>
              <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-dark-subtle mt-1">
                {t('hero', 'tagline')}
              </p>
            </motion.div>

            {/* Concise Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-dark-muted leading-relaxed max-w-xl mb-8"
            >
              {t('hero', 'intro')}
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition={isRtl ? 'start' : 'end'}
                className="w-full sm:w-auto"
              >
                {t('hero', 'ctaWork')}
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<MessageSquare className="w-4 h-4 text-accent" />}
                iconPosition={isRtl ? 'start' : 'end'}
                className="w-full sm:w-auto"
              >
                {t('hero', 'ctaTalk')}
              </Button>
            </motion.div>

            {/* Social Links & Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-6 border-t border-slate-200 dark:border-white/10 w-full"
            >
              <span className="text-xs text-slate-500 dark:text-dark-subtle font-mono uppercase tracking-wider me-2">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-dark-surface/60 text-slate-600 dark:text-dark-muted hover:text-accent dark:hover:text-accent hover:border-accent/40 dark:hover:border-accent/40 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                    data-cursor="hover"
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Anime Avatar Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <AnimeAvatar />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
