/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                'green-primary': '#9BF00B'
            },
            spacing: {
                '450': '450px',
                '600': '600px',
            }
        },
    },
    plugins: [],
}