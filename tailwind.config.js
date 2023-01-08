/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "320",
      md: "560px",
      lg: "1024px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        800: "#2C2120",
        400: "#4D4442",
      },
      neutral: {
        100: "#FFFFFF",
        300: "#F7F3F2",
        500: "#ADADAD",
        800: "#323232",
        900: "#000000",
      },
      accents: {
        gold: {
          800: "#C17605",
          700: "#D69840",
          500: "#E9CE7F",
          300: "#EFD6B3",
          200: "#EDDEBF",
        },
        error: "#FF4040",
        success: "#88B42D",
      },
    },
    fontFamily: {
      eczar: ["Eczar", "sans-serif"],
    },
    fontSize: {},
  },
  plugins: [],
};
