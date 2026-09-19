import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../data/profile';
import { Code2, Sparkles } from 'lucide-react';

export const AnimeAvatar: React.FC = () => {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto flex items-center justify-center">
      {/* Outer ambient glow */}
      <div 
        className="absolute inset-0 rounded-3xl blur-2xl opacity-25 dark:opacity-35 pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(16, 185, 129, 0.2) 60%, transparent 80%)'
        }}
      />

      {/* Floating frame wrapper */}
      <motion.div
        animate={{ y: [-4, 6, -4] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full"
      >
        {/* Premium Layered Frame Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-accent/40 via-slate-300 to-accent/20 dark:from-accent/30 dark:via-dark-border dark:to-accent/10 shadow-2xl shadow-accent/5 backdrop-blur-md">
          <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-[#12151e] dark:via-[#0d0f15] dark:to-[#08090d] border border-black/5 dark:border-white/5 aspect-[4/4.5] flex items-center justify-center">
            
            {/* Background subtle geometry inside frame */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent/15 blur-2xl pointer-events-none z-0" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none z-0" />

            {/* Avatar Content: Actual Personal Photo */}
            {PROFILE.customAvatarUrl ? (
              <div className="relative w-full h-full overflow-hidden z-10">
                <img
                  src={PROFILE.customAvatarUrl}
                  alt={PROFILE.avatarAlt || `Portrait of ${PROFILE.name}, Front-End Developer`}
                  className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 hover:scale-[1.03] select-none"
                  loading="eager"
                  decoding="async"
                />
                {/* Subtle vignette / bottom gradient shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-40 dark:opacity-60" />
              </div>
            ) : (
              /* High-End Vector Illustration Placeholder (Fallback) */
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-end">
                <svg
                  viewBox="0 0 400 450"
                  className="w-full h-full drop-shadow-2xl select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="60%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#020617" />
                    </linearGradient>
                    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fde047" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="50%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#020617" />
                    </linearGradient>
                    <linearGradient id="glowAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.4" />
                    </filter>
                  </defs>

                  <circle cx="200" cy="185" r="110" fill="url(#glowAccent)" opacity="0.08" filter="blur(20px)" />
                  <circle cx="200" cy="185" r="130" stroke="url(#glowAccent)" strokeWidth="1" strokeDasharray="6 8" opacity="0.25" />

                  <g id="jacket">
                    <path
                      d="M60 450 C75 350, 110 290, 155 275 L200 310 L245 275 C290 290, 325 350, 340 450 Z"
                      fill="url(#jacketGrad)"
                    />
                    <path
                      d="M135 285 L180 345 L200 345 L220 345 L265 285 L245 275 L200 325 L155 275 Z"
                      fill="#1f2637"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1.5"
                    />
                    <path d="M150 280 L185 340" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                    <path d="M250 280 L215 340" stroke="#10b981" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                    <path d="M175 320 L200 345 L225 320 L200 280 Z" fill="#0b0d12" />
                  </g>

                  <g id="neck">
                    <path d="M175 220 L175 280 L225 280 L225 220 Z" fill="#d1d5db" />
                    <path d="M175 220 L200 250 L225 220 Z" fill="#9ca3af" opacity="0.4" />
                  </g>

                  <g id="face">
                    <path
                      d="M145 155 C145 220, 175 245, 200 248 C225 245, 255 220, 255 155 C255 110, 145 110, 145 155 Z"
                      fill="#e2e8f0"
                    />
                    <path
                      d="M150 170 C150 220, 178 244, 200 248 C222 244, 250 220, 250 170 C242 210, 220 236, 200 240 C180 236, 158 210, 150 170 Z"
                      fill="#cbd5e1"
                      opacity="0.6"
                    />
                    <path d="M138 160 C138 150, 145 150, 147 175 C145 185, 140 180, 138 160 Z" fill="#cbd5e1" />
                    <path d="M262 160 C262 150, 255 150, 253 175 C255 185, 260 180, 262 160 Z" fill="#cbd5e1" />

                    <g id="glasses">
                      <rect x="150" y="152" width="40" height="24" rx="4" fill="rgba(14, 165, 233, 0.08)" stroke="#38bdf8" strokeWidth="1.8" />
                      <rect x="210" y="152" width="40" height="24" rx="4" fill="rgba(14, 165, 233, 0.08)" stroke="#38bdf8" strokeWidth="1.8" />
                      <line x1="190" y1="162" x2="210" y2="162" stroke="#38bdf8" strokeWidth="2" />
                      <line x1="142" y1="158" x2="150" y2="160" stroke="#38bdf8" strokeWidth="1.5" />
                      <line x1="250" y1="160" x2="258" y2="158" stroke="#38bdf8" strokeWidth="1.5" />
                      <line x1="154" y1="156" x2="166" y2="156" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                      <line x1="214" y1="156" x2="226" y2="156" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                    </g>

                    <g id="eyes">
                      <path d="M158 163 Q170 160 182 164" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="170" cy="165" r="3.5" fill="#0284c7" />
                      <circle cx="171" cy="164" r="1.2" fill="#ffffff" />
                      
                      <path d="M218 164 Q230 160 242 163" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="230" cy="165" r="3.5" fill="#0284c7" />
                      <circle cx="231" cy="164" r="1.2" fill="#ffffff" />
                    </g>

                    <path d="M198 180 L202 188 L197 190" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M192 208 Q200 211 208 208" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  <g id="hair" filter="url(#shadowFilter)">
                    <path
                      d="M135 155 C120 110, 150 65, 200 65 C250 65, 280 110, 265 155 C275 140, 270 110, 255 85 C235 60, 165 60, 145 85 C130 110, 125 140, 135 155 Z"
                      fill="url(#hairGrad)"
                    />
                    <path
                      d="M135 125 C145 105, 175 90, 200 90 C230 90, 260 105, 268 135 C255 120, 235 115, 215 125 C200 132, 190 148, 178 140 C165 132, 150 145, 135 125 Z"
                      fill="#1e293b"
                    />
                    <path
                      d="M148 115 L160 145 L168 120 L185 148 L195 122 L215 145 L225 125 L245 142 L252 118"
                      fill="#0f172a"
                    />
                    <path
                      d="M165 85 Q200 75 235 85"
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
            )}

            {/* Corner Decorative Tech Badges */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-dark-bg/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-dark-muted shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Abdlhamed</span>
            </div>

            <div className="absolute top-3 right-3 z-20 p-1.5 rounded-lg bg-white/90 dark:bg-dark-bg/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-accent shadow-sm">
              <Code2 className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Floating Bottom Status Pill */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel shadow-lg border border-accent/30 text-xs font-semibold whitespace-nowrap z-20"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-slate-900 dark:text-dark-text font-medium">
            Front-End Developer
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
