/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "page-black": "#141414",
        "trans-1": "rgba(0,0,0,0.1)",
        "trans-2": "rgba(0,0,0,0.7)",
        "trans-3": "rgba(0,0,0,0.8)",
        "trans-5": "rgba(0,0,0,0.5)",
        "trans-4": "rgb(15,15,15, 0.9)",
        "trans-red": "rgb(229, 0, 0, 0.1)",
        "trans-red2": "rgb(229, 0, 0, 0.5)",
        black06: "#0F0F0F",
        gray75: "#BFBFBF",
        gray60: "#999999",
        black10: "#1A1A1A",
        red45: "#E50000",
        black20: "#333333",
        black12: "#1F1F1F",
        black08: "#141414",
        strokeBlack: "#262626",
      },

      gridTemplateColumns: {
        large: "repeat(auto-fill, minmax(140px, 1fr))",
        small: "repeat(auto-fill, minmax(100px, 1fr))",
      },
      screens: {
        breakcon: "450px",
        "s-1": "320px",
        "s-2": "660px",
        "s-3": "480px",
        laptop: "1440px",
        mobile: "390px",
        tablet: "820px",
        mobilelg: "530px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "default-bg": "url('/src/assets/images/defaultbg.png')",
      },
    },
  },
  plugins: [],
};
