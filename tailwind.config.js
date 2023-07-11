/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Playfair Display', serif",
      },
      colors: {
        "mayhaven-black": "#0F0F10",
        "mayhaven-white": "#ffff",
        "mayhaven-brown": "#FFAB09",
        "mayhaven-blue": "#462E89",
        "mayhaven-y1": "#2A2B30",
        "mayhaven-ash": "#47545B",
        "mayhaven-dark-brown": "#E57638",
        "mayhaven-dark-to": "#3E4347",
        "mayhaven-grey": "#28282A",
        "mayhaven-trans": "#828386",
        "mayhaven-red": "#E8423E",
        grey: "#D9D9D9",
      },
      maxWidth: {
        largest: "1530px",
      },
    },
  },
  plugins: [],
};
