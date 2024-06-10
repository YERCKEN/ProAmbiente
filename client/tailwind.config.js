/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {},
    colors:{
      customGreen: '#00CC00'
    },
    boxShadow: {
      'custom-box': 'rgba(0, 204, 0, 0.25) 0px 25px 25px -12px, rgba(0, 204, 0, 0.3) 0px 18px 10px -18px',
      'custom-green': 'rgba(0, 204, 0, 0.2) 0px 20px 30px',
    }
  },
  plugins: [],
}

