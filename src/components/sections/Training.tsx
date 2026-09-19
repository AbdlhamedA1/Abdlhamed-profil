import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { TRAINING_ITEMS } from '../../data/training';
import { useLanguage } from '../../hooks/useLanguage';
import { Award, Terminal, Palette, X, Eye, CheckCircle2 } from 'lucide-react';
import { TrainingItem } from '../../types';
import { getAssetUrl } from '../../utils/assets';

interface CertificatePreviewProps {
  item: TrainingItem;
  onOpenModal: (item: TrainingItem) => void;
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({ item, onOpenModal }) => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const resolvedCertUrl = getAssetUrl(item.certificateUrl);

  return (
    <div className="space-y-4 pt-2">
      {/* Certificate Frame Container */}
      <div
        onClick={() => onOpenModal(item)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenModal(item);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`${t('training', 'viewCertificate')}: ${t('training', item.programKey)}`}
        className="group/cert relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-dark-bg/80 cursor-pointer transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 focus-visible:ring-2 focus-visible:ring-emerald-500"
        data-cursor="view"
      >
        {/* Certificate Image or Fallback Vector Frame */}
        {resolvedCertUrl && !imgError ? (
          <>
            <img
              src={resolvedCertUrl}
              alt={item.certificateAltKey ? t('training', item.certificateAltKey) : t('training', item.programKey)}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover object-center transition-all duration-500 group-hover/cert:scale-105 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Top Certificate Header Bar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-1.5 bg-slate-900/60 dark:bg-black/70 backdrop-blur-md border-b border-white/10 text-white">
              <span className="text-[10px] font-mono font-medium flex items-center gap-1">
                <Award className="w-3 h-3 text-emerald-400" />
                <span>ITI Certificate</span>
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Verified
              </span>
            </div>
          </>
        ) : (
          /* High-Fidelity Editorial Certificate Mockup Fallback */
          <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-100 dark:from-[#0d1413] dark:via-[#111e1b] dark:to-[#090e0d]">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300">
                  ITI Official Certificate
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Authorized
              </span>
            </div>

            <div className="my-auto text-center space-y-1.5 py-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-dark-subtle">
                Certificate of Completion
              </span>
              <p className="text-sm font-bold text-slate-800 dark:text-dark-text line-clamp-1">
                {t('training', item.programKey)}
              </p>
              <p className="text-xs text-slate-500 dark:text-dark-muted font-mono">
                {t('training', item.institutionKey)}
              </p>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-dark-subtle pt-2 border-t border-slate-200 dark:border-white/10">
              <span>Summer Training Track</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Click to View</span>
            </div>
          </div>
        )}

        {/* Hover Overlay with View Action */}
        <div className="absolute inset-0 bg-slate-950/40 dark:bg-black/50 backdrop-blur-xs opacity-0 group-hover/cert:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="px-4 py-2 rounded-xl bg-white/95 dark:bg-dark-surface/95 text-slate-900 dark:text-white text-xs font-bold shadow-lg border border-slate-200 dark:border-white/10 flex items-center gap-2 transform translate-y-2 group-hover/cert:translate-y-0 transition-transform duration-200">
            <Eye className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t('training', 'viewCertificate')}</span>
          </div>
        </div>
      </div>

      {/* Clear View Certificate Action Button */}
      <button
        type="button"
        onClick={() => onOpenModal(item)}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-dark-surface/60 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 text-slate-800 dark:text-dark-text hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-bold transition-all duration-200 shadow-2xs hover:shadow-sm"
        data-cursor="hover"
      >
        <Award className="w-4 h-4 text-emerald-500" />
        <span>{t('training', 'viewCertificate')}</span>
      </button>
    </div>
  );
};

export const Training: React.FC = () => {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<TrainingItem | null>(null);

  // Close modal callback
  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  // Listen for Escape key to close modal and manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (selectedItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, handleCloseModal]);

  return (
    <section id="training" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={t('training', 'eyebrow')}
          title={t('training', 'title')}
          subtitle={t('training', 'subtitle')}
        />

        {/* Modern Professional Learning Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 max-w-7xl mx-auto">
          {TRAINING_ITEMS.map((item, idx) => {
            const isReactTrack = item.id.includes('react') || item.id.includes('frontend');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-dark-surface/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute -top-10 -right-10 w-44 h-44 rounded-full ${
                    isReactTrack
                      ? 'bg-sky-500/10 dark:bg-sky-500/15'
                      : 'bg-emerald-500/10 dark:bg-emerald-500/15'
                  } blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div className="relative z-10 space-y-5 flex-1 flex flex-col justify-between">
                  {/* Card Header with Track Icon & Badges */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${
                          isReactTrack
                            ? 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30'
                            : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        } flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}
                      >
                        {item.id.includes('uiux') ? (
                          <Palette className="w-5 h-5" />
                        ) : (
                          <Terminal className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-500 dark:text-dark-subtle font-medium block">
                          {t('training', item.institutionKey)}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{t('training', 'certificateVerified')}</span>
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-500/30">
                      <Award className="w-3.5 h-3.5" />
                      <span>{t('training', item.badgeKey)}</span>
                    </span>
                  </div>

                  {/* Program Track Title */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-dark-subtle block mb-1">
                      {t('training', 'track_label')}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-dark-text group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                      {t('training', item.programKey)}
                    </h3>
                  </div>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-dark-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Preview Card Component */}
                  <CertificatePreview
                    item={item}
                    onOpenModal={(selected) => setSelectedItem(selected)}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Accessible Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-950/80 dark:bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-dark-surface shadow-2xl shadow-black/40 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-dark-bg/60 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="certificate-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-dark-text leading-tight">
                      {t('training', selectedItem.programKey)}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-dark-subtle">
                      {t('training', selectedItem.institutionKey)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  aria-label={t('training', 'closeCertificate')}
                  className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-dark-surface hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-dark-muted hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
                  data-cursor="hover"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image View Container */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex items-center justify-center bg-slate-100/50 dark:bg-black/40">
                <div className="relative max-h-[65vh] w-full flex items-center justify-center">
                  <img
                    src={getAssetUrl(selectedItem.certificateUrl)}
                    alt={
                      selectedItem.certificateAltKey
                        ? t('training', selectedItem.certificateAltKey)
                        : t('training', selectedItem.programKey)
                    }
                    className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg border border-slate-200 dark:border-white/10"
                    onError={(e) => {
                      // Fallback placeholder if image not found
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.cert-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />

                  {/* Fallback Display if image not loaded */}
                  <div className="cert-fallback hidden w-full py-16 px-6 text-center rounded-2xl border border-dashed border-slate-300 dark:border-white/20 bg-white/50 dark:bg-dark-surface/50 space-y-3">
                    <Award className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h4 className="text-base font-bold text-slate-800 dark:text-dark-text">
                      {t('training', selectedItem.programKey)}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-dark-subtle font-mono max-w-md mx-auto">
                      {t('training', 'certificateVerified')} • {t('training', selectedItem.institutionKey)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer Description */}
              {selectedItem.certificateDescriptionKey && (
                <div className="px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-dark-bg/60 text-xs text-slate-600 dark:text-dark-muted font-mono flex items-center justify-between gap-4">
                  <p>{t('training', selectedItem.certificateDescriptionKey)}</p>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 shrink-0 font-semibold">
                    ITI Verified
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};


