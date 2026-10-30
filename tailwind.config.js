/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0C10',
          card: '#12161F',
          cardBorder: '#1F2633',
          amber: '#F59E0B',
          amberHover: '#D97706',
          gold: '#EAB308',
          accent: '#FFB800',
          muted: '#8A94A6',
          light: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
