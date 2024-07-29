/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BB9B97',
        secondary: '#E4CCC9',
        third: '#F5E4E3',
      },
      backgroundImage: {
        pageHead: "url('/assets/images/bg/03.jpg')",
      },
    },
  },
  plugins: [],
}
