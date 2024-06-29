/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        grey: {
          100: "#777f98",
          200: "#888eb0",
          300: "#858bb2",
          400: "#494e6e",
          500: "#9199cc",
        },

        lightblue: {
          100: "#7e88c3",
          200: "#9277ff",
          300: " #7c5dfa",
        },

        darkblue: {
          100: "#dfe3fa",
          200: "#373b53",
          300: "#252945",
          400: "#1e2139",
          500: "#141625",
          600: "#0c0e16",
        },

        white: {
          100: "#fff",
          200: "#f9fafe",
          300: "#f8f8fb",
        },
        red: {
          100: "#ff9797",
          200: "#ec5757",
        },
        green: "#33d69f",
        orange: "#ff8f00",
      },
    },
  },
  plugins: [],
};
