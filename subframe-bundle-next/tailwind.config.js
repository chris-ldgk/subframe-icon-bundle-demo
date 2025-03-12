/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/ui/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("./src/ui/tailwind.config.js")],
};
