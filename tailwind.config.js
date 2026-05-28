/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
        surface: {
          DEFAULT: '#0c0c12',
          card: '#111118',
          elevated: '#16161f',
          border: '#1e1e2a',
          muted: '#232330',
        },
      },
      backgroundImage: {
        'radial-lime': 'radial-gradient(ellipse at top right, rgba(163,230,53,0.10) 0%, transparent 65%)',
        'radial-warm': 'radial-gradient(ellipse at bottom left, rgba(249,115,22,0.07) 0%, transparent 65%)',
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'marquee': 'marquee 24s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'lime-glow': '0 0 40px rgba(163,230,53,0.15)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
