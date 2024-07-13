/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        bgdark: "#00072D",
        bgcolor: "#EBF4F6",
        primary: "#071952",
        heading: "#088395",
        branddeepblue: "#03113F",
        brandlightcyan: "#C7F5FF",
        brandBlue: "#4057A3",
        brandWhite: "#eeeeee",
      },
      container:{
        center:true,
        padding:{
          default: "1rem",
          sm: "3rem",
        },
      },

    },
  },
  plugins: [],
}