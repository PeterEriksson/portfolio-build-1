module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "500px",
        smaller: "540px",
      },
      fontSize: {
        verySmall: "12px",
        contactText: "13px",
      },
      colors: {
        mainDarkBlue: "#091c29",
      },
      maxWidth: {
        twoPointFivexl: "700px",
        projectContent: "320px",
        contactMail: "140px",
      },
      opacity: {
        opacityNavLink: 0.81,
      },
      height: {
        projectCard: "450px",
      },
      transitionDuration: {
        850: "850ms",
        menuTest: "1ms",
        600: "600ms",
      },
      scale: {
        120: "1.20",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
