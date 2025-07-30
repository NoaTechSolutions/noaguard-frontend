const flowbitePlugin = require("flowbite/plugin");

module.exports = {
  darkMode: "class", // ✅ Permite alternancia manual con la clase "dark"
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00BFFF",
          light: "#E0F7FF",
          dark: "#008ACF",
        },
        accent: {
          DEFAULT: "#FFD700",
          dark: "#FFC107",
        },
        darkBg: "#1f2937", // útil si lo usas como fondo personalizado
      },
    },
  },
  plugins: [flowbitePlugin],
};
