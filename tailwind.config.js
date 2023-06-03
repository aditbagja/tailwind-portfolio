/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: { // menimpa codingan css tailwind
    container: {
      center: true,
      padding: '20px',
    },
    extend: { // menambah extend css pada tailwind
      colors:{
        primary: '#1d4ed8',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

