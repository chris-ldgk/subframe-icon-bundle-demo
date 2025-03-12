/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/ui/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("./src/ui/tailwind.config.js")]
}

