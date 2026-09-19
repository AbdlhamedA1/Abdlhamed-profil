import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { SKILL_CATEGORIES } from '../../data/skills';
import { useLanguage } from '../../hooks/useLanguage';
import {
  Code,
  FileCode2,
  Atom,
  Palette,
  Layers,
  LayoutGrid,
  Globe,
  GitBranch,
  Github,
  Check,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const getTechIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3";
    switch (iconName) {
      case 'Atom':
        return <Atom className={`${iconClass} text-sky-500 dark:text-sky-400`} />;
      case 'FileCode2':
        return <FileCode2 className={`${iconClass} text-blue-500 dark:text-blue-400`} />;
      case 'Code':
        return <Code className={`${iconClass} text-amber-500 dark:text-amber-400`} />;
      case 'Palette':
        return <Palette className={`${iconClass} text-cyan-500 dark:text-cyan-400`} />;
      case 'Layers':
        return <Layers className={`${iconClass} text-blue-600 dark:text-blue-500`} />;
      case 'LayoutGrid':
        return <LayoutGrid className={`${iconClass} text-purple-500 dark:text-purple-400`} />;
      case 'Globe':
        return <Globe className={`${iconClass} text-orange-500 dark:text-orange-400`} />;
      case 'GitBranch':
        return <GitBranch className={`${iconClass} text-red-500 dark:text-red-400`} />;
      case 'Github':
        return <Github className={`${iconClass} text-slate-800 dark:text-slate-200`} />;
      default:
        return <Code className={`${iconClass} text-accent`} />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t('skills', 'eyebrow')}
          title={t('skills', 'title')}
          subtitle={t('skills', 'subtitle')}
        />

        {/* Categories and Grid */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div key={category.id} className="space-y-6">
              {/* Category Subtitle */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                  0{catIdx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-dark-text tracking-wide">
                  {t('skills', category.titleKey)}
                </h3>
                <div className="h-[1px] flex-1 bg-slate-200 dark:bg-dark-border" />
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.06 }}
                    className="group relative p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-dark-surface/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                    data-cursor="hover"
                  >
                    {/* Top row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-dark-bg/80 shadow-sm">
                        {getTechIcon(skill.iconName)}
                      </div>
                    
                    </div>

                    {/* Skill Name */}
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-dark-text mb-2 group-hover:text-accent transition-colors duration-200">
                      {skill.name}
                    </h4>

                    {/* Capability Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-dark-muted leading-relaxed">
                      {t('skills', skill.descriptionKey)}
                    </p>

                    {/* Subtle status indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      <span>Production Ready</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
