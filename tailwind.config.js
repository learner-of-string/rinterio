/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#ABEF5F",
          accent: "#ABEF5F80"
        },
      },
    ],
  },
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
