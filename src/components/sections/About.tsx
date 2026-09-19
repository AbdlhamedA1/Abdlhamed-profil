import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../hooks/useLanguage';
import { Compass, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const editorialCards = [
    {
      icon: <Compass className="w-5 h-5 text-accent" />,
      tag: t('about', 'focusSubtitle'),
      title: t('about', 'focusTitle'),
      desc: t('about', 'focusDesc'),
      accentColor: 'from-sky-500/15 to-transparent',
      borderColor: 'hover:border-sky-500/40',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      tag: t('about', 'approachSubtitle'),
      title: t('about', 'approachTitle'),
      desc: t('about', 'approachDesc'),
      accentColor: 'from-emerald-500/15 to-transparent',
      borderColor: 'hover:border-emerald-500/40',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-400" />,
      tag: t('about', 'directionSubtitle'),
      title: t('about', 'directionTitle'),
      desc: t('about', 'directionDesc'),
      accentColor: 'from-indigo-500/15 to-transparent',
      borderColor: 'hover:border-indigo-500/40',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t('about', 'eyebrow')}
          title={t('about', 'title')}
        />

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Editorial Text & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              {/* Highlight Quote */}
              <div className="relative ps-5 border-s-2 border-accent">
                <p className="text-xl sm:text-2xl font-medium tracking-tight text-slate-900 dark:text-dark-text leading-snug">
                  "{t('about', 'quote')}"
                </p>
              </div>

              {/* Narrative paragraphs */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-dark-muted leading-relaxed">
                {t('about', 'p1')}
              </p>

              <p className="text-base sm:text-lg text-slate-600 dark:text-dark-muted leading-relaxed">
                {t('about', 'p2')}
              </p>
            </div>

            {/* Quick Principles List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 mt-8 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-dark-text font-medium">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Responsive & Adaptive Layouts</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-dark-text font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Semantic & Accessible Markup</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-dark-text font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Clean Reusable Component Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-dark-text font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Modern Developer Workflows & Git</span>
              </div>
            </div>
          </motion.div>

          {/* Cards Column */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {editorialCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`group relative p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-dark-surface/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.borderColor}`}
                data-cursor="hover"
              >
                {/* Subtle top card gradient highlight */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-dark-bg/60 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-500 dark:text-dark-subtle">
                      {/* {card.tag} */}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-dark-text mb-2 group-hover:text-accent transition-colors duration-200">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
