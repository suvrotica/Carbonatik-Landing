/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Adding a custom gold/amber color for brand consistency
        'carbon-gold': '#ffc700' 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}