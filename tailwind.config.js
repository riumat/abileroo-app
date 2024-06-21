/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-main": "#faf4e3",
        "dark-main": "#171203"
      }
    },

  },
  plugins: [],
}

