/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0B0C10",
        gray: "#808080",
        "light-gray": "rgb(229 231 233)",
        "bright-blue": "#66FCF1",
        "dark-blue": "#45A29E",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
