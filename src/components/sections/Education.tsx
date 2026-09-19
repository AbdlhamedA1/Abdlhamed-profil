import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { EDUCATION_DATA } from '../../data/education';
import { useLanguage } from '../../hooks/useLanguage';
import { GraduationCap, Sparkles, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t('education', 'eyebrow')}
          title={t('education', 'title')}
          subtitle={t('education', 'subtitle')}
        />

        {/* Elegant Academic Editorial Presentation */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-dark-surface/60 backdrop-blur-md p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden"
            data-cursor="hover"
          >
            {/* Subtle background academic decorative watermark */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
              <GraduationCap className="w-64 h-64 text-slate-900 dark:text-white" />
            </div>

            <div className="relative z-10 space-y-8">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-sky-500/15 to-accent/25 dark:from-sky-500/20 dark:to-accent/30 border border-sky-500/30 flex items-center justify-center text-accent shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400 border border-sky-500/30">
                      <Sparkles className="w-3 h-3" />
                      <span>{t('education', EDUCATION_DATA.badgeKey)}</span>
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-dark-subtle">
                  {t('education', EDUCATION_DATA.degreeTypeKey)}
                </span>
              </div>

              {/* Institution Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight group-hover:text-accent transition-colors duration-200">
                  {t('education', EDUCATION_DATA.institutionKey)}
                </h3>
              </div>

              {/* Field of Study Highlight Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-dark-bg/60 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-dark-subtle block">
                      {t('education', 'field_label')}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-dark-text">
                      {t('education', EDUCATION_DATA.fieldKey)}
                    </h4>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-dark-muted shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Computer Science</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

