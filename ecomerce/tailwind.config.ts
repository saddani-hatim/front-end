import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#5B21B6',
        },
        // Secondary colors
        secondary: {
          DEFAULT: '#EC4899',
          light: '#F472B6',
        },
        // Dark theme colors
        dark: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        // Surface colors
        surface: {
          DEFAULT: '#334155',
          light: '#475569',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(124, 58, 237, 0.3)',
        'glow-lg': '0 0 50px rgba(124, 58, 237, 0.4)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.3)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 50px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}

export default config
