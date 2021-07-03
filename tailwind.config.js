const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './atoms/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', 
    './containers/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './molecules/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}', 
    './typography/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ['"Montserrat"', 'sans-serif'],
    },

    fontSize: {
      '13': '13px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '36': '36px',
      '48': '48px',
    },

    extend: {
      

      letterSpacing: {
        '1p': '1%',
        '3p': '3%',
      },

      lineHeight: {
        '140p': '140%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
