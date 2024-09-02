/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
        'pink-primary': '#ffC6DA',
        'yellow-primary': '#FFF1A6',
        'blue-primary': '#BAD8EB',
        'blue-secondary': '#124C5F'
    },
  },
  plugins: [],
}

