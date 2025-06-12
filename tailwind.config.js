const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-gloock)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        aboutleft: "#fcf5ec",
        aboutright: "#eea595",
        abouttext: "#ba4b2e",
        contactstyle: "#156669",
      },
    },
  },
  plugins: [],
};
