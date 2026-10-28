/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- Esto activa el modo oscuro basado en la clase "dark" en el <html>
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};