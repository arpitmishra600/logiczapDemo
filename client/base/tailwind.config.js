/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],fontFamily:{
    'inter':["Inter", "system-ui"],
    'ins':["Instrument Serif","serif"],
    'oss':["OpenSauceSans"]
  },
  theme: {
    extend: {
      colors:{
        ourBlue:"#3523B5"
      }
    },
  },
  plugins: [],
}