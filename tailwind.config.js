/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f3a2f",
        bg2: "#0c2f27",
        brand: "#2dd4bf",
        brand2: "#9ae6b4",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "18px",
      },
    },
  },
  plugins: [],
};
