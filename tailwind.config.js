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
        glassblue: "#07195259",
        glasswhite: "#bff4ff3d",
        primary: "#071952",
        primarylight: "#122a78",
        primarycat: "#000516e6",
        heading: "#088395",
        popupbg: "#00061994",
        primarygcat2: "#021214f2",
        branddeepblue: "#03113F",
        brandlightcyan: "#C7F5FF",
        brandBlue: "#4057A3",
        brandPurplelight: "#c4d3ff",
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