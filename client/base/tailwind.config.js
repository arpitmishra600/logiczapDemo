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
    animation: {
      shine: 'shine 1.5s infinite',
    },
    keyframes:{
      shine: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
    }
  },
  darkMode: "class",
  plugins: [],
}