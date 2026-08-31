/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/partners/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  // Minimal safelist - only critical dynamic classes
  safelist: [],
  // Disable features that slow down JIT
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        'nav': '1200px',
        'cards': '1250px',
      },
      colors: {
        dark: {
          DEFAULT: 'var(--bg-dark)',
          lighter: 'var(--bg-lighter)',
          card: 'var(--bg-card)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          glow: 'var(--accent-glow)',
          red: 'var(--accent-red)',
          pink: 'var(--accent-pink)',
          purple: 'var(--accent-purple)',
          blue: 'var(--accent-blue)',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
        'dark-gradient': 'linear-gradient(180deg, var(--bg-dark) 0%, #05011a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'moveLeft': 'moveLeft 50s linear infinite',
        'moveRight': 'moveRight 50s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        moveLeft: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(255, 77, 77, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};