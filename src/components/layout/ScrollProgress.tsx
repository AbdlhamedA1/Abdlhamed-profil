import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useLanguage } from '../../hooks/useLanguage';

export const ScrollProgress: React.FC = () => {
  const { scrollProgress } = useScrollProgress();
  const { isRtl } = useLanguage();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-accent via-accent-hover to-emerald-400 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(14,165,233,0.6)]"
        style={{
          width: `${scrollProgress}%`,
          marginLeft: isRtl ? 'auto' : '0',
          marginRight: isRtl ? '0' : 'auto',
        }}
      />
    </div>
  );
};
