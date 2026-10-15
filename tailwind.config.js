/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#06b6d4',
          magenta: '#ec4899',
          darkBg: '#0f172a',
          cardBg: '#1e293b',
        }
      }
    },
  },
  plugins: [],
}