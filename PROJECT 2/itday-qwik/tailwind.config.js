/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      height: {
        '76': '850px',
        '74': '747px',
        '56': '556px',
        '57': '527px',
        '36': '360px',
        '38': '380px',
        '28': '280px',
        '18': '118px',
        '15': '100px',
        '8': '50px',
        '3': '30px',




      },
      width: {
        '149': '1490px',
        '701': '701px',
        '651': '580px',
        '300': '200px',
        '138': '1380px',
        '23': '233px',
        '62': '602px',
        '39': '369px',
        '49': '499px',
        '51': '511px',
        '33': '330px',
        '38': '380px',
        '36': '360px',
        '28': '280px',



      },
      backgroundColor: {
        'blackOverlay': 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
