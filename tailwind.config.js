/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Combining all patterns
  ],
 theme: {
    extend: {
      colors: {
        white: "#F7F6FB",
        black: "#000",
        primary: "#191746",
        darkPurple: "#4C2185",
        darkBlue: "#381a5f",
        purple: "#8c35ff",
        whitePurple: "#EFECF6",
        waterWhite: "#ffffff33",
        halfWhite: "#ffffff50",
        lightPurple: "#786C88",
        green: "#67C95F",
        pink: "#FB8F8E",
        purpleNav: "#6839A7",
        yellow: "#FFBF15",
        gray: "#EAEAEA",
        placeholder: "#969AB8",
        darkGreen: "#34A853",
        gary1: "#E0E2E9",
      },
      boxShadow: {
        shadowUp: "0 4px 30px rgba(0, 0, 0, 0.1)",
        lightShadow: "0px 4px 7px 0px #EFECF6",
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(180deg, #6839A7 0%, rgb(118 57 167) 100%)",
      },
      fontSize: {
        28: "28px", // Add custom font size with the name '28'
      },
      height: {
        62: "62px",
      },
    },
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  },
  plugins: [],
}

