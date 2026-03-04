/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light:   '#E8C84A',
          dim:     'rgba(212,175,55,0.12)',
          border:  'rgba(212,175,55,0.25)',
          glow:    'rgba(212,175,55,0.45)',
        },
        black: {
          DEFAULT: '#0B0B0B',
          2:       '#111111',
          3:       '#181818',
          4:       '#1E1E1E',
        },
        cream: {
          DEFAULT: '#F4F1EA',
          dim:     'rgba(244,241,234,0.60)',
          muted:   'rgba(244,241,234,0.30)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      animation: {
        'grid-drift':   'gridDrift 24s linear infinite',
        'orb-float':    'orbFloat 10s ease-in-out infinite',
        'orb-float-r':  'orbFloat 14s ease-in-out infinite reverse',
        'fade-up':      'fadeUp 0.8s ease both',
        'blink':        'blink 2.2s ease-in-out infinite',
        'scroll-left':  'scrollLeft 36s linear infinite',
        'scan':         'scan 3s ease-in-out infinite',
      },
      keyframes: {
        gridDrift: {
          '0%':   { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(72px) translateX(72px)' },
        },
        orbFloat: {
          '0%,100%': { transform: 'scale(1) translateY(0)' },
          '50%':     { transform: 'scale(1.08) translateY(-25px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
        scrollLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%,100%': { opacity: '0.4' },
          '50%':     { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '72px 72px',
      },
      boxShadow: {
        'gold':    '0 0 50px rgba(212,175,55,0.45)',
        'gold-sm': '0 0 28px rgba(212,175,55,0.28)',
        'gold-lg': '0 12px 40px rgba(212,175,55,0.15)',
        'card':    '0 24px 64px rgba(0,0,0,0.6)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
