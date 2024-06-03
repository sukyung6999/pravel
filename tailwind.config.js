/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        100: '#F4F6F8',
        200: '#e8ebf0',
        300: '#E8EBF0',
        400: '#C4CAD4',
        500: '#A5ADBD',
        600: '#8E95A3',
        700: '#595F72',
        800: '#353C49',
        900: '#1A1E27',
      }
    },
    extend: {},
  },
  plugins: [],
}