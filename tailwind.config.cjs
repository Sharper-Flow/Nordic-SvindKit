/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,jsx,tsx}',
  "./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {}
  },
  plugins: [
    'tailwind-nord',
    require("@brainandbones/skeleton/tailwind/theme.cjs"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
};