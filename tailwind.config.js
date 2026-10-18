/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#ff2a85',
        cherryPink: '#ff75a0',
        darkBg: '#0b0e17',
        cardBg: '#121826',
        cardBorder: 'rgba(255, 42, 133, 0.25)',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
