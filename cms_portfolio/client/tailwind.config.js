/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#c778dd',
        },
        gray: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#3d3d3d',
          600: '#4d4d4d',
          500: '#6d6d6d',
          400: '#8d8d8d',
          300: '#adadad',
        }
      },
      fontFamily: {
        'mono': ['Fira Code', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}

