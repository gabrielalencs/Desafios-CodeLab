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
                'blue-primary': '#124C5F0D',
                'blue-secondary': '#124C5F'
            },
            spacing: {
                '382': '382px',
                '400': '400px',
                '450': '450px',
                '650': '650px',
                '850': '850px',
                '1300': '1300px'
            },
            borderRadius: {
                '500': '500px'
            }
        },
    },
    plugins: [],
}

