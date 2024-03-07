/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins'],
            },
            objectPosition: {
                aboutUsImg: '0 30%',
            },
            colors: {
                primary: '#1a1a1a',
                action: '#00b3dd',
            },
        },
    },
    plugins: [],
}
