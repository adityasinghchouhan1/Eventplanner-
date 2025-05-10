/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add your font here
        Yellowtail: ['Yellowtail', 'cursive'],
        Yellowtail2: ['Yellowtail'],
        CM: ['Cormorant Garamond', 'sans-serif'],
        Roboto: ['Roboto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
