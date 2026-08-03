/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jb: {
          navy: '#102A43',
          'white-warm': '#FAFAF8',
          sand: '#F5F5F0',
          gold: '#FBBF24',
          'gold-deep': '#F59E0B',
          charcoal: '#334155',
          success: '#25D366'
        }
      }
    },
  },
  plugins: [],
}
