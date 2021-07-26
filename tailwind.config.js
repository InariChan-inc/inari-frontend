const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './atoms/**/*.tsx',
    './components/**/*.{ts,tsx}', 
    './containers/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './molecules/**/*.{ts,tsx}',
    './organizms/**/*.{ts,tsx}', 
    './pages/**/*.{ts,tsx}', 
    './typography/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: defaultTheme.colors.transparent,
      white: defaultTheme.colors.white,
      black: defaultTheme.colors.black,
      yellow: {
        '1': '#FFEFCD',
        '2': '#FEDF9A',
        '3': '#FECA57',
        '4': '#FF9F43',
        '5': '#CC7F36',
        '6': '#995F28',
        '7': '#FFF9ED',
      },
      gray: {
        '0': '#263238',
        '1': '#E9F0F7',
        '2': '#D3DDE7',
        '3': '#94A3B3',
        '4': '#607080',
        '5': '#364B63',
        '6': '#1B314B',
        '7': '#58585E',
        '8': '#45454C',
        '9': '#393940',
        '10': '#2E2E33',
        '11': '#171719',
        '12': '#020203',
        '13': '#121212',
      },
      brown: {
        '1': '#7F5D57',
        '2': '#301818',
      },
      red: {
        '1': '#E71A1A',
        '2': '#B00020',
      },
      green: {
        '1': '#21A300',
        '2': '#166701',
      },
    },

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
      },

      boxShadow: {
        'anime-card': '0 4px 16px 0 #FEDF9A',
        'form-light': '0 4px 8px 0 #FFEFCD',
        'form-dark': '0 4px 8px -5px #FFEFCD',
      }
    },
  },
  variants: {
    scrollbar: ['dark'],
    extend: {},
  },
  plugins: [],
}
