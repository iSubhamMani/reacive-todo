/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color-light)",
        "secondary-color": "var(--secondary-color-light)",
        "bg-color-dark": "var(--bg-clr-dark)",
      },
    },
  },
  plugins: [],
};
