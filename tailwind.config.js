/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fundo: '#000',
        vermelho: '#E21221',
        cinza: 'rgba(251,251,251, 0.3)'
      },
      fontFamily: {
        'netflix' : 'NETFLIX'
      }
      
    },
  },
  plugins: [require("tailwind-gradient-mask-image"),require('tailwind-scrollbar-hide')],
}

