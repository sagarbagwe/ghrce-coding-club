/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#09090b', brand: { 50: '#eef2ff', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5' } },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { glow: '0 0 50px rgba(99,102,241,.18)' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: { float: 'float 6s ease-in-out infinite', fadeUp: 'fadeUp .7s ease-out both' },
    },
  },
  plugins: [],
}
