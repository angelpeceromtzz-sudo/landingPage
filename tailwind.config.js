/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        surface: {
          DEFAULT: '#141414',
          secondary: '#1A1A1A',
        },
        line: '#252525',
        accent: {
          DEFAULT: '#E8A317',
          dark: '#C48912',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
