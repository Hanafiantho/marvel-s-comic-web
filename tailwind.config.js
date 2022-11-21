/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#202020",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
