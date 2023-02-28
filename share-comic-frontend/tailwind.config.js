/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        ssm: "0.5rem",
      },
      width: {
        120: "120px",
        150: "150px",
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        450: "450px",
        656: "656px",
        880: "880px",
        508: "508px",
        2000: "2000px",
      },
      textColor: {
        lightGrey: "#fafbfc",
      },
      backgroundColor: {
        mainColor: "#D37E7E",
        pinkOverlay: "rgba(248,120,120,0.3)",
        loginContainer: "#F9F0F0",
        lightPinkBg: "#F9F0F0",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-100px)",
            tranform: "translateX(-100px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            tranform: "translateX(0px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
