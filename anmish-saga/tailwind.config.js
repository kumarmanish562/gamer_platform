/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{ 
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
      primary: '#00C2Ff',
        secondary: '#DD0BFF', 
        dark: '#111111',
       
      },
      container: {
        padding: {
          center: true,
          DEFAULT: '1rem',
          sm: '3rem',
      
        },
      },
    },
  },
  plugins: [],
}