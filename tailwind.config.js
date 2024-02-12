/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'libre': ['Libre', 'sans-serif'],
        'lora': ['Lora', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

