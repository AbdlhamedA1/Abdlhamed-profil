import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { PROFILE } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';
import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      name: 'Email',
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      icon: <Mail className="w-5 h-5 text-sky-500 dark:text-sky-400" />,
      desc: t('contact', 'emailCardDesc'),
      actionLabel: 'Send Mail',
    },
    {
      name: 'WhatsApp',
      value: '+20 WhatsApp Chat',
      href: PROFILE.whatsappUrl,
      icon: <MessageCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
      desc: t('contact', 'whatsappCardDesc'),
      actionLabel: 'Open WhatsApp',
    },
    {
      name: 'GitHub',
      value: 'github.com/AbdlhamedA1',
      href: PROFILE.githubUrl,
      icon: <Github className="w-5 h-5 text-slate-800 dark:text-slate-300" />,
      desc: t('contact', 'githubCardDesc'),
      actionLabel: 'View Repositories',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/abdlhamed-abdlrady',
      href: PROFILE.linkedinUrl,
      icon: <Linkedin className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
      desc: t('contact', 'linkedinCardDesc'),
      actionLabel: 'Connect Profile',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-b from-white/95 via-slate-50/90 to-white/95 dark:from-dark-surface/90 dark:via-dark-surface/60 dark:to-dark-bg/90 backdrop-blur-xl p-8 sm:p-12 lg:p-16 overflow-hidden mb-12 shadow-2xl"
        >
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>{t('contact', 'eyebrow')}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-dark-text tracking-tight mb-4">
              {t('contact', 'headline')}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-dark-muted leading-relaxed mb-8 max-w-xl mx-auto">
              {t('contact', 'supporting')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button
                href={`mailto:${PROFILE.email}`}
                variant="primary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                iconPosition={isRtl ? 'start' : 'end'}
                className="w-full sm:w-auto"
              >
                {t('contact', 'emailBtn')}
              </Button>

              <Button
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                icon={<MessageCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />}
                iconPosition={isRtl ? 'start' : 'end'}
                className="w-full sm:w-auto"
              >
                {t('contact', 'whatsappBtn')}
              </Button>
            </div>

            {/* Copy Email Button */}
            <div className="inline-flex items-center">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-dark-bg/60 text-slate-700 dark:text-dark-muted hover:text-accent dark:hover:text-accent hover:border-accent/40 shadow-sm transition-all duration-200"
                data-cursor="hover"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-sans font-medium">{t('contact', 'emailCopied')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Direct Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactChannels.map((channel, idx) => (
            <motion.a
              key={channel.name}
              href={channel.href}
              target={channel.name !== 'Email' ? '_blank' : undefined}
              rel={channel.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-dark-surface/60 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 dark:hover:border-accent/40 shadow-sm hover:shadow-lg"
              data-cursor="hover"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-dark-bg/80 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                    {channel.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-dark-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-dark-text mb-1">
                  {channel.name}
                </h4>

                <p className="text-xs text-slate-600 dark:text-dark-muted leading-relaxed mb-3">
                  {channel.desc}
                </p>
              </div>

              <span className="text-[11px] font-mono text-accent font-medium truncate">
                {channel.value}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
