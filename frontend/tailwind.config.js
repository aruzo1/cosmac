/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4ac294",
          light: "#6fe8ba",
          dark: "#2f9c72",
        },
      },
    },
  },
  plugins: [],
};
