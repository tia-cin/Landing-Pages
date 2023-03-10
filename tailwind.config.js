/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#e7e5e4",
      "light-gray": "#d7d5d3",
      gray: "#b2b0ae",
      brown: "#a89283",
      black: "#252525",
    },
    extend: {
      height: {
        300: "300px",
        500: "500px",
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
