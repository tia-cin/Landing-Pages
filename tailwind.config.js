/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#e7e5e4',
      'light-gray': '#d7d5d3',
      'gray': '#b2b0ae',
      'brown': '#a89283',
      'black': '#252525'
    },
    extend: {
      backgroundImage: {
        'blur-1': "url(https://imgs.search.brave.com/Q3xeRToFI6p3MSZ_D10Oda-DYdahwrL-zbR2gei-e6c/rs:fit:627:520:1/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2Z1bGwvMzYt/MzY2ODg2X2JsdXIt/cG5nLnBuZw)"
      }
    },
  },
  plugins: [],
}
