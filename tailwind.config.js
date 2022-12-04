/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ca8a04',
          DEFAULT: '#a16207',
          dark: '#854d0e',
        },
        secondary: {
          lighter: '#e4e4e7',
          light: '#d4d4d8',
          DEFAULT: '#a1a1aa',
          darklighter: '#71717a',
          darklight: '#52525b',
          dark: '#3f3f46',
          darker: '#27272a',
          darkest: '#18181b',
        },
      },
    },
  },
  plugins: [],
}
