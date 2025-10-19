/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this line
  ],
}