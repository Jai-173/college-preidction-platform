/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}",
    './NavBar/**/*.{html,js}',
    './Components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
        },
      },
    },
    plugins: [],
  };