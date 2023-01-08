/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "320",
      md: "560px",
      lg: "1024px",
      max: { max: "1900px" },
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
    fontSize: {
      h1: "clamp(36px, 10vw, 72px)",
      h2: "clamp(24px, 7.5vw, 48px)",
      h3: "clamp(18px, 5vw, 32px)",
      h4: "clamp(16px, 4vw, 24px)",
      h5: "clamp(16px, 3vw, 20px)",
      h6: "clamp(16px, 2vw, 18px)",
      body: "16px",
      "body-big": "18px",
      "body-small": "14px",
    },
  },
  plugins: [],
};
