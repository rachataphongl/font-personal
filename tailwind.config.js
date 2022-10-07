/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  extend: {},
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      kai: '#D00000',
      'light-kai': '#373737',
      'dark-kai': '#800000',
      menu: '#D9D9D9'
    },
    height: {
      100: '100vh',
      85: '85vh',
      65: '65vh',
      60: '60vh',
      50: '50vh',
      15: '15vh'
    },
    extend: {
      flex: {
        11100: '0 0 100%'
      }
    }
  },
  plugins: []
};
