/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: "#00dd00",
      },
    },
    fontFamily:{
      monofonto:["Monofonto", "sans-serif"],
    },
  },
  plugins: [],
}