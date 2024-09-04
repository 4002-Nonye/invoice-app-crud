/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        xm: "400px",
      },
      boxShadow: {
        '3xl': '0 1rem 2rem 0 rgba(72, 84, 159, 0.25)',
      },
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
  plugins: [
    // To prevent aut0fill color from spoiling background color
    function ({ addUtilities }) {
      const newUtilities = {
        // Light Mode Autofill Styles
        '.autofillClass': {
          '-webkit-box-shadow': '0 0 0px 1000px #dfe3fa inset !important',
          '-webkit-text-fill-color': '#0c0e16 !important',
        },
        // Dark Mode Autofill Styles
        '.dark .autofillClass': {
          '-webkit-box-shadow': '0 0 0px 1000px #1e2139 inset !important',
          '-webkit-text-fill-color': '#fff !important',
        },
        // Light Mode Hover, Focus, and Active States
        '.autofillClass:focus, .autofillClass:hover, .autofillClass:active': {
          '-webkit-box-shadow': '0 0 0px 1000px #dfe3fa inset !important',
          '-webkit-text-fill-color': '#0c0e16 !important',
        },
        // Dark Mode Hover, Focus, and Active States
        '.dark .autofillClass:focus, .dark .autofillClass:hover, .dark .autofillClass:active': {
          '-webkit-box-shadow': '0 0 0px 1000px #1e2139 inset !important',
          '-webkit-text-fill-color': '#fff !important',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover', 'focus', 'dark']);
    },
  ],
};
