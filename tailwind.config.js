/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'page-black': '#1E1E1E',
        'trans-1': 'rgba(0,0,0,0.1)',
        'trans-2': 'rgba(0,0,0,0.7)',
        'trans-red': 'rgb(229, 0, 0, 0.1)',
        'black06': '#0F0F0F',
        'gray75': '#BFBFBF',
        'gray60': '#999999',
        'black10': "#1A1A1A",
        'red45': '#E50000',
        'black20': '#333333'
      },

      gridTemplateColumns:{
        'large': 'repeat(auto-fill, minmax(140px, 1fr))',
        'small': 'repeat(auto-fill, minmax(100px, 1fr))',
      },
      screens:{
        'breakcon': '450px',
        's-1': '320px',
        'laptop': '1440px',
        'mobile': '390px',
        'tablet': '820px',
        'mobilelg': '530px'
      },
      fontFamily:{
        'manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}