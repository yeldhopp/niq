/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bbd6ff',
          300: '#8dbaff',
          400: '#5894ff',
          500: '#3370ff',
          600: '#1a52f5',
          700: '#1240e1',
          800: '#1436b6',
          900: '#16328f',
          950: '#111f55',
        },
        teal: {
          50: '#eefcfb',
          100: '#d6f7f5',
          200: '#b0eeeb',
          300: '#7ce1dd',
          400: '#3ecbc8',
          500: '#1ab0ae',
          600: '#148c8d',
          700: '#147071',
          800: '#155a5b',
          900: '#164a4c',
          950: '#082e2f',
        },
        orange: {
          50: '#fff6ed',
          100: '#ffebd4',
          200: '#ffd5a8',
          300: '#ffb870',
          400: '#ff9238',
          500: '#ff7010',
          600: '#f04e06',
          700: '#c73508',
          800: '#9c2a0f',
          900: '#7e2510',
          950: '#440f06',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};