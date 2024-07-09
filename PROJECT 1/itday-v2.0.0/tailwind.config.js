/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./packages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
    colors: {
      dark: '#1E2124',
      white: '#ffffff',
      black2: '#000000',
      textGrey: '#AAAAAA',
      trans: '#00FFFFFF',
      brcolor:'#767676',
    }
  },
  plugins: [],
}