module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Open Sans', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
        },
        extend: {
            fontSize: {
                14: '14px',
            },
            backgroundColor: {
                'main-bg': '#FAFBFB',
                'main-dark-bg': '#20232A',
                'secondary-dark-bg': '#33373E',
                'light-gray': '#F7F7F7',
                'half-transparent': 'rgba(0, 0, 0, 0.5)',
                'color-primary': '#AB7A5FFF',
            },
            borderWidth: {
                1: '1px',
            },
            borderColor: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            width: {
                400: '400px',
                600: '600px',
                760: '760px',
                780: '780px',
                800: '800px',
                1000: '1000px',
                1200: '1200px',
                1400: '1400px',
            },
            height: {
                80: '80px',
                500: '500px'
            },
            minHeight: {
                590: '590px',
            },
            backgroundImage: {
                'hero-pattern': "url('https://www.een.com/wp-content/uploads/2021/10/future-proof-bg2.jpg')",
                'features-pattern': "url('https://www.een.com/wp-content/uploads/2021/10/built-world-bg2.jpg')",
                'demo-pattern': "../src/img/line-art-bg.png"
            },
            color: {
                'color-primary': '#AB7A5FFF',
            },
            gridTemplateColumns: {
                'auto': 'auto auto 1fr auto',
                '1fr': '316px 1fr 1fr 1fr auto',
                '2fr': '200px auto auto',
                '3fr': '125px 1fr'
            }
        },
    },
    plugins: [],
};