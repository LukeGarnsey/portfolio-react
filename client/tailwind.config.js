/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          '900': '#0f172a', // Adjust the hex code to match your desired color
          '400': '#94a3b8',
          '200': '#e2e8f0'
        },
        teal: {
          '300': '#5eead4',
          '400': '#2dd4bf',
          '900': '#134e4a'
        },
        blue:{
          '500': '#3b82f6'
        },
        purple:{
          '600': '#9333ea'
        }
      },
    },
  },
  plugins: [],
}

