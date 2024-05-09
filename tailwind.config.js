/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors:{
        textBlue:'#377DFF',
        textgray:'#464646'
      },
      fontFamily: {
        Catamaran: ["Catamaran", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
