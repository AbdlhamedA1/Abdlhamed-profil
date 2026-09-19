import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40" />

      {/* Top Ambient Glow (Soft Cyan / Indigo) */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 dark:opacity-25 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.45) 0%, rgba(99, 102, 241, 0.15) 70%, transparent 100%)'
        }}
      />

      {/* Hero Right Accent Glow (Soft Emerald / Cyan) */}
      <div 
        className="absolute top-1/4 -right-40 w-[550px] h-[550px] rounded-full blur-[130px] opacity-15 dark:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(14, 165, 233, 0.1) 70%, transparent 100%)'
        }}
      />

      {/* Bottom Center Subtle Glow */}
      <div 
        className="absolute bottom-10 left-1/3 w-[650px] h-[450px] rounded-full blur-[160px] opacity-10 dark:opacity-15 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(16, 185, 129, 0.1) 60%, transparent 100%)'
        }}
      />

      {/* Very subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] bg-repeat mix-blend-overlay" />
    </div>
  );
};
