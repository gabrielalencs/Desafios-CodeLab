/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pink-primary': '#ffC6DA',
                'yellow-primary': '#FFF1A6',
                'blue-primary': '#BAD8EB',
                'blue-secondary': '#124C5F'
            },
            spacing: {
                '382': '382px',
                '850': '850px',
                '400': '400px',
                '1300': '1300px'
            },
            borderRadius: {
                '500': '500px'
            }
        },
    },
    plugins: [],
}

