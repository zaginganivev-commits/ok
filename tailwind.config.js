/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#CB0101',
          redHover: '#B00000',
          dark: '#1F1F1F',
          footer: '#262626',
          footerDark: '#1B1B1B',
          grayBg: '#F7F7F7',
          grayBorder: '#E5E7EB',
          accent: '#E50914'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        'site': '1400px'
      }
    },
  },
  plugins: [],
}
