/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Industry-specific color classes
    'text-blue-700', 'text-blue-800', 'text-blue-600',
    'text-purple-700', 'text-purple-800', 'text-purple-600',
    'text-teal-700', 'text-teal-800', 'text-teal-600',
    'text-rose-700', 'text-rose-800', 'text-rose-600',
    'text-orange-700', 'text-orange-800', 'text-orange-600',
    'text-pink-700', 'text-pink-800', 'text-pink-600',
    'text-emerald-700', 'text-emerald-800', 'text-emerald-600',
    'border-blue-100', 'border-blue-200', 'border-blue-300',
    'border-purple-100', 'border-purple-200', 'border-purple-300',
    'border-teal-100', 'border-teal-200', 'border-teal-300',
    'border-rose-100', 'border-rose-200', 'border-rose-300',
    'border-orange-100', 'border-orange-200', 'border-orange-300',
    'border-pink-100', 'border-pink-200', 'border-pink-300',
    'border-emerald-100', 'border-emerald-200', 'border-emerald-300',
    'hover:border-blue-200', 'hover:border-blue-300',
    'hover:border-purple-200', 'hover:border-purple-300',
    'hover:border-teal-200', 'hover:border-teal-300',
    'hover:border-rose-200', 'hover:border-rose-300',
    'hover:border-orange-200', 'hover:border-orange-300',
    'hover:border-pink-200', 'hover:border-pink-300',
    'hover:border-emerald-200', 'hover:border-emerald-300',
    'hover:text-blue-700',
    'hover:text-purple-700',
    'hover:text-teal-700',
    'hover:text-rose-700',
    'hover:text-orange-700',
    'hover:text-pink-700',
    'hover:text-emerald-700',
    'bg-blue-500', 'bg-blue-600',
    'bg-purple-500', 'bg-purple-600',
    'bg-teal-500', 'bg-teal-600',
    'bg-rose-500', 'bg-rose-600',
    'bg-orange-500', 'bg-orange-600',
    'bg-pink-500', 'bg-pink-600',
    'bg-emerald-500', 'bg-emerald-600',
  ],
  theme: {
    extend: {
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
        'dark-gradient': 'linear-gradient(180deg, var(--bg-dark) 0%, #05011a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(255, 77, 77, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};