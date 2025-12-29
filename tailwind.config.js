/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        big_desktop: "1600px",
        desktop: "1280px",
        xlg: "1120px",
        laptop: "1024px",
        lg: "968px",
        tablet: "775px",
        phone: "650px",
        mini_phone: "500px",
      },

      container: {
        center: true,
      },

      fontSize: {
        xxs: [".65rem", ".75rem"],
      },
      colors: {
        speech: {
          blue: "#bfddfa",
          lines: "#a2a0b5",
          // dark: {
          //   wrapper: "#1D1E21",
          //   semiBlack: "#141414",
          //   black: "#000000",
          //   activeColor: "#0043FF",
          //   red: "#AA0000",
          //   yellow: "#D5B500",
          //   pink: "#FFE5EE",
          //   lightYellow: "##FFF8E7",
          // },
          // light: {
          //   wrapper: "#F1F2F6",
          //   white: "#FFF",
          //   activeColor: "#E6EAF5",
          //   red: "#AA0000",
          //   yellow: "#D5B500",
          //   pink: "#FFE5EE",
          //   lightYellow: "##FFF8E7",
          // },
        },
        dark: {
          bgWrap: "#bfddfa",
        },
      },
    },
  },
  plugins: [],
};
