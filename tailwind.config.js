/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#98c21d',
          600: '#7fb069',
          700: '#65a30d',
          800: '#4d7c0f',
          900: '#365314',
          950: '#1a2e05',
        },
        brand: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#98c21d',
          600: '#7fb069',
          700: '#65a30d',
          800: '#4d7c0f',
          900: '#365314',
          950: '#1a2e05',
        }
      }
    },
  },
  plugins: [],
};
