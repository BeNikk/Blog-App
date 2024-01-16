/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightest-purple': '#ebeaf9', // the lightest shade
        'light-purple-2': '#dad9fd', // an even lighter shade
        'light-purple-1': '#c9c8fc', // a slightly lighter shade
        'bright-purple': '#b8b7fb', // your main color
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #ebeaf9 70%, #dad9fd 50%, #c9c8fc50, #b8b7fb)',
      },
    },
  },
  plugins: [],
}