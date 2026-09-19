import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { PROJECTS } from '../../data/projects';
import { useLanguage } from '../../hooks/useLanguage';
import { Github, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { Project } from '../../types';

interface ProjectImageVisualProps {
  project: Project;
  className?: string;
  mockupFallback: React.ReactNode;
}

const ProjectImageVisual: React.FC<ProjectImageVisualProps> = ({
  project,
  className = '',
  mockupFallback,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!project.imageUrl || hasError) {
    return <>{mockupFallback}</>;
  }

  return (
    <div className={`relative w-full h-full min-h-[220px] overflow-hidden bg-slate-100 dark:bg-[#0c1017] ${className}`}>
      <img
        src={project.imageUrl}
        alt={project.imageAlt || project.id}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${
          project.imagePosition || 'object-top'
        } transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle overlay gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  // Helper to render high-fidelity vector mockup preview for projects
  const renderProjectMockup = (project: Project) => {
    switch (project.imagePlaceholder.pattern) {
      case 'mesh':
        return (
          <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-[#0c1017] dark:via-[#101726] dark:to-[#070a10] p-4 sm:p-6 flex flex-col justify-center overflow-hidden transition-colors">
            {/* Inner Dashboard / Showcase UI Graphics */}
            <div className="grid grid-cols-12 gap-3 my-auto relative z-10">
              <div className="col-span-4 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2 shadow-sm">
                <div className="h-2 w-12 rounded bg-sky-500" />
                <div className="h-1.5 w-full rounded bg-slate-300 dark:bg-white/20" />
                <div className="h-1.5 w-4/5 rounded bg-slate-300 dark:bg-white/20" />
                <div className="h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-sky-600 dark:text-sky-300 font-semibold">REACT + TS</span>
                </div>
              </div>
              <div className="col-span-8 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-20 rounded bg-emerald-500" />
                  <div className="h-2 w-8 rounded bg-slate-300 dark:bg-white/20" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="h-10 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5" />
                  <div className="h-10 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5" />
                  <div className="h-10 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5" />
                </div>
                <div className="h-8 rounded-lg bg-gradient-to-r from-sky-500/10 to-emerald-500/10 dark:from-sky-500/20 dark:to-emerald-500/20 border border-slate-200 dark:border-white/10 flex items-center px-3">
                  <span className="text-[10px] font-mono text-slate-700 dark:text-white/80 font-medium">Interactive Showcase</span>
                </div>
              </div>
            </div>

            {/* Ambient Lighting Gradients */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-sky-500/15 dark:bg-sky-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-3xl pointer-events-none" />
          </div>
        );

      case 'geometric':
        return (
          <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-emerald-50/50 via-slate-50 to-emerald-100/30 dark:from-[#0e1615] dark:via-[#10221e] dark:to-[#080d0c] p-5 flex flex-col justify-center overflow-hidden transition-colors">
            <div className="space-y-2.5 my-auto relative z-10">
              <div className="h-3 w-28 rounded bg-emerald-500/80" />
              <div className="h-16 rounded-xl bg-white dark:bg-white/5 border border-emerald-500/20 p-2.5 flex items-center justify-around shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="space-y-1.5 flex-1 ms-3">
                  <div className="h-2 w-3/4 rounded bg-slate-300 dark:bg-white/20" />
                  <div className="h-1.5 w-1/2 rounded bg-slate-200 dark:bg-white/10" />
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-2xl pointer-events-none" />
          </div>
        );

      case 'code':
        return (
          <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-purple-50/50 via-slate-50 to-indigo-100/30 dark:from-[#150f24] dark:via-[#1c1333] dark:to-[#0a0714] p-5 flex flex-col justify-center overflow-hidden transition-colors">
            <div className="space-y-2.5 my-auto relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <div className="h-2.5 w-32 rounded bg-purple-500/70" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-14 rounded-lg bg-white dark:bg-white/5 border border-purple-500/20 p-2 space-y-1 shadow-sm">
                  <div className="h-1.5 w-10 rounded bg-slate-300 dark:bg-white/30" />
                  <div className="h-1 w-14 rounded bg-slate-200 dark:bg-white/15" />
                </div>
                <div className="h-14 rounded-lg bg-purple-500/10 border border-purple-500/30 p-2 space-y-1">
                  <div className="h-1.5 w-12 rounded bg-purple-600 dark:bg-purple-300 font-mono text-[10px]" />
                  <div className="h-1 w-8 rounded bg-purple-300 dark:bg-white/20" />
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-purple-500/10 dark:bg-purple-500/15 blur-2xl pointer-events-none" />
          </div>
        );

      case 'minimal':
      default:
        return (
          <div className="relative w-full h-full min-h-[180px] bg-gradient-to-br from-amber-50/50 via-slate-50 to-orange-100/30 dark:from-[#1c1409] dark:via-[#241a0d] dark:to-[#0e0904] p-5 flex flex-col justify-center overflow-hidden transition-colors">
            <div className="my-auto space-y-2">
              <div className="h-2 w-24 rounded bg-amber-500/70" />
              <div className="h-1.5 w-48 rounded bg-slate-300 dark:bg-white/20" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />
          </div>
        );
    }
  };

  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const mediumProjects = PROJECTS.filter((p) => p.layoutVariant === 'medium');
  const compactProject = PROJECTS.find((p) => p.layoutVariant === 'compact');

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t('projects', 'eyebrow')}
          title={t('projects', 'title')}
          subtitle={t('projects', 'subtitle')}
        />

        <div className="space-y-8">
          
          {/* 1. Large Dominant Featured Project Card */}
          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-dark-surface/60 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5"
              data-cursor="view"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Visual Preview Side */}
                <div className="lg:col-span-7 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
                  <ProjectImageVisual
                    project={featuredProject}
                    className="min-h-[280px] sm:min-h-[360px] lg:min-h-[440px]"
                    mockupFallback={renderProjectMockup(featuredProject)}
                  />
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-s border-slate-200 dark:border-white/10">
                  <div>
                    {/* Featured Tag & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{t('projects', 'featuredBadge')}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-dark-subtle">
                        {t('projects', featuredProject.categoryKey)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-dark-text mb-3 group-hover:text-accent transition-colors duration-200">
                      {t('projects', featuredProject.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 dark:text-dark-muted leading-relaxed mb-6">
                      {t('projects', featuredProject.descriptionKey)}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-dark-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-6 border-t border-slate-200 dark:border-white/10">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold shadow-md shadow-accent/20 transition-all duration-200 group/btn"
                      data-cursor="hover"
                    >
                      <span>{t('projects', 'livePreview')}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    {featuredProject.codeUrl && (
                      <a
                        href={featuredProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-accent/40 bg-white dark:bg-dark-surface text-slate-800 dark:text-dark-text text-sm font-semibold transition-all duration-200 shadow-sm"
                        data-cursor="hover"
                      >
                        <Github className="w-4 h-4" />
                        <span>{t('projects', 'viewCode')}</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* 2. Two Medium Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediumProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-dark-surface/60 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-xl"
                data-cursor="view"
              >
                {/* Visual Preview Header */}
                <div className="relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-400">
                  <ProjectImageVisual
                    project={project}
                    className="h-56 sm:h-64 md:h-72"
                    mockupFallback={renderProjectMockup(project)
                      
                    }
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-dark-subtle">
                        {t('projects', project.categoryKey)}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-dark-text mb-2 group-hover:text-accent transition-colors duration-200">
                      {t('projects', project.titleKey)}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed mb-5">
                      {t('projects', project.descriptionKey)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-dark-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors group/link"
                      data-cursor="hover"
                    >
                      <span>{t('projects', 'livePreview')}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-500 dark:text-dark-subtle hover:text-slate-900 dark:hover:text-dark-text inline-flex items-center gap-1 transition-colors"
                        data-cursor="hover"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. Compact / Fourth Project */}
          {compactProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-dark-surface/60 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm"
              data-cursor="view"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-3xl flex-1">
                  {/* Visual Preview thumbnail for compact card */}
                  <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-white/10 group-hover:border-accent/30 transition-colors">
                    <ProjectImageVisual
                      project={compactProject}
                      className="min-h-full h-full"
                      mockupFallback={renderProjectMockup(compactProject)}
                    />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-accent font-semibold uppercase tracking-wider">
                        {t('projects', compactProject.categoryKey)}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-dark-text group-hover:text-accent transition-colors">
                      {t('projects', compactProject.titleKey)}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-dark-muted">
                      {t('projects', compactProject.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {compactProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-dark-subtle"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                  <a
                    href={compactProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent/15 hover:bg-accent/25 text-accent text-xs font-semibold border border-accent/30 transition-all"
                    data-cursor="hover"
                  >
                    <span>{t('projects', 'livePreview')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};
