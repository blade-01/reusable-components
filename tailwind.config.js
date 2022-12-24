module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#2F2F2F",
        priText: "#979797",
        secText: "#AAC8E4",
        greenText: "#55D392",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        monoton: ["Monoton", "cursive"],
      },
      fontSize: {
        nl: ["56px", "64px"],
      },
      screens: {
        "1xl": "1400px",
      },
      backgroundImage: {
        map: "url('./assets/img/map.svg')",
      },
    },
  },
  plugins: [],
};
