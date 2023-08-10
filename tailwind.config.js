/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8fc',
          100: '#dfeff7',
          200: '#b2d6ed',
          300: '#88bde3',
          400: '#4085cf',
          500: '#024dba',
          600: '#0242a8',
          700: '#01328c',
          800: '#012470',
          900: '#001854',
          950: '#000d36',
        },
      },
    },
  },
  plugins: [],
}
