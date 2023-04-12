/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        primary: "blue",
        "primary-focus": "mediumblue",
      },
    },
  ],
  plugins: [require("daisyui")],
}