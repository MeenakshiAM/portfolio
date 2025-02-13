/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1E40AF",
        customPink: "#D1A3D8",
      },
      fontFamily: {
        customFont: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
