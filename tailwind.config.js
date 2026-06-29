/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A0A0A',
          navy: '#111111',
          gold: '#D4A500',
          'gold-light': '#F0C030',
          'gold-dark': '#A87C00',
          white: '#F8F9FA',
          gray: '#8A8A8A',
          'light-gray': '#222222',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}
