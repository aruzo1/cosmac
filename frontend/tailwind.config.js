/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      container: {
        screens: { DEFAULT: "1280px" },
        center: true,
        padding: { DEFAULT: "1rem" },
      },
      colors: {
        brand: {
          DEFAULT: "#4ac294",
          light: "#6fe8ba",
          dark: "#2f9c72",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
