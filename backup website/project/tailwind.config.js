/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#2F3E46',
          800: '#354F52',
          700: '#52796F',
          600: '#84A98C',
          500: '#CAD2C5',
          400: '#d6dbd1',
          300: '#e1e5de',
          200: '#eceeea',
          100: '#f6f7f5',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};