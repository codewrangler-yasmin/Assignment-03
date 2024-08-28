/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/script.js"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#ABEF5F",
        "neon-green-light": "rgba(171, 239, 95, 0.50)",
        mono: "#212121",
        accent: "#494949",
      },
      fontFamily: {
        manrope: ['"Manrope", sans-serif'],
      },
      backgroundImage: {
        "contact-texture": "url('./public/images/bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
