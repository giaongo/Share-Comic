/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      },
      textColor: {
        lightGrey:"#fafbfc"
      },
      backgroundColor: {
        mainColor: "#D37E7E",
        pinkOverlay: "rgba(248,120,120,0.3)",
        loginContainer: "#F9F0F0",
        lightPinkBg: "#F9F0F0" 

      },
    },
  },
  plugins: [],
};
