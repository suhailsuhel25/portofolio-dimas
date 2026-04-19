/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#081B28',
        'accent-green': '#a7e6bb',
        'text-primary': '#ffffff',
        'text-secondary': '#adb5bd',
      },
      fontFamily: {
        'main': ['Inter', 'sans-serif'],
        'heading': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
