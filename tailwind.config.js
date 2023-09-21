/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{scss, js,jsx,ts,tsx}",
    './src/pages/**/*.{scss,tsx}',
    './src/components/**/*.{scss,tsx}',
    "./src/App.js",
    "./src/App.scss"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite'
      }
    },
  },
  plugins: [],
}

