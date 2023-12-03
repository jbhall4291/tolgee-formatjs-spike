/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#ffffff",
        "main": "#000000",
        "highlight": "#c39953",
      },
      fontFamily: {
        customSerif: "Cormorant",
        customSans: "DM Sans",
      },
    },
  },
  plugins: [],
}
