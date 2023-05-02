const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{js,jsx}",
  ],
  
  darkMode: false,

  theme: {
    extend: {
      colors: {
        'black': '#121212',
        'light-black': '#191919',
        'gray': '#888888',
        'dark-gray': '#4E4E4E',
        'light-gray': '#B1B1B1',
        'neutral-gray': '#656565',
        'light-neutral-gray': '#999999',
        'darker-white' : '#F1F1F1',
      },
    },
    borderRadius: {
      'none': '0',
      'default': '0.75rem',
      'small': '30px',
      'large': '70px'
    },
    fontFamily: {
      sans: ['var(--font-Space_Grotesk)', ...fontFamily.sans],
      pixel: ['var(--font-)']
    },
    fontSize: {
      'xs': '16px',
      'sm': '22px',
      'base': '24px',
      'lg': '32px',
      'xl': '36px',
      '2xl': '48px',
      '3xl': '64px',
    },
    dropShadow: {
      default: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
  },

  plugins: [],
}