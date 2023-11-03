
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'Poppins',
        inter: 'Inter',
      },

      colors:{
        textColor:"#fafafa",
        searchBg: "#f5f5f5",
        color: "#978a8a",
        btnBg:"#db4444"


    },
    boxShadow:{
      lg:"0px 1px 13px 0px rgba(0, 225, 0, 0.07)"
    }
  },
  plugins: [],
}
}