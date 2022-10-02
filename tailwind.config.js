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
      'dark-kai': '#800000'
    },
    height: {
      100: '100vh',
      85: '85vh',
      15: '15vh'
    }
  },
  plugins: []
};
