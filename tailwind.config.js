/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "c-1": "#4F6F52",
      "c-2": "#C1D0B5",
      "c-3": "#D6E8DB",
      "c-4": "#FFF8DE",
      "c-alert": "#FF0000", // Rojo para alertas

      "d-1": "#27374D",
      "d-2": "#526D82",
      "d-3": "#9DB2BF",
      "d-4": "#DDE6ED",
      
    }
  },
  plugins: [],
  darkMode: 'class',
}

