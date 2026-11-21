/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#0F4A35', 700: '#0B3A29', 900: '#072A1D', 50: '#EAF3EE' },
        electric: { DEFAULT: '#2EE68E', 600: '#1FC474' },
        graphite: { DEFAULT: '#151917', 800: '#1D2220', 700: '#2A312E', 500: '#5B6662' },
        paper: '#F5F6F2',
      },
      fontFamily: {
        sans: ['Barlow', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'Barlow', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '80rem' },
    },
  },
  plugins: [],
}
