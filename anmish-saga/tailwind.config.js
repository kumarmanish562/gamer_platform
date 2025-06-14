/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Blue - adjust to your brand color
        secondary: "#8b5cf6", // Purple - adjust to your brand color
      },
    },
  },
  plugins: [],
}