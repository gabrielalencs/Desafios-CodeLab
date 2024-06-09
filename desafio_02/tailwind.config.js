/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            'archivo': ['Archivo', 'sans-serif']
        },
        colors: {
            'primary-color': '#7CA2F4',
            'black-primary': '#121214',
            'gray-primary': '#F3F7FF'
        }
    },
  },
  plugins: [],
}

