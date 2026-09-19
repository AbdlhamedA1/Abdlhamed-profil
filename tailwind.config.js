/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0b0e',
          surface: '#11131a',
          elevated: '#161922',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
          text: '#f8fafc',
          muted: '#94a3b8',
          subtle: '#64748b',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          elevated: '#f1f5f9',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-hover': 'rgba(0, 0, 0, 0.18)',
          text: '#0f172a',
          muted: '#475569',
          subtle: '#94a3b8',
        },
        accent: {
          DEFAULT: '#0ea5e9', // refined sky / cyan
          hover: '#38bdf8',
          glow: 'rgba(14, 165, 233, 0.15)',
          emerald: '#10b981',
          teal: '#14b8a6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        '7xl': '1280px',
      },
      animation: {
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
