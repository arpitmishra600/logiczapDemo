/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
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
      },screens:{
        md:"950px",
        sm:"680px"
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