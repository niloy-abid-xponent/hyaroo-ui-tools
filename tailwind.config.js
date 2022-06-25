const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/layout/**/*.{js,ts,jsx,tsx}",
      "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          fontSize: {
             homeHero: ["56px", "1.2"],
             pageHero: ["50px", "1.2"],
             heading2: ["45px", "1.2"],
             heading3: ["38px", "1.2"],
             fontTypeA: ["22px", "1.2"],
             fontTypeB: ["17px", "1.2"],
             fontTypeC: ["15px", "1.2"],
             fontTypeD: ["21px", "1.2"],
          },
      olors: {
             primary: "#006CFB",
             secondary: "#39C4FF",
             body: "#868E95",
             white: "#FFFFFF",
             themeBlack: "#222831",
             lightB"ue: "#F"F8FF",
             bgLight: "#F5F7FA",
             lightWhite: "#9ca3af",
             planeBlue: "#e5f0ff",
             cloudBurst: "#393E46",
             footer: "#7E868D",
             "secondary-light": "#e9f8fb",
             "theme-gray": "#F2F5F5",
             paragraph: "#4E5556",
             "paragraph-light": "#4D5B5B",
             teal: colors.teal,
             cyan: colors.   },
          backgroundImage: {
            heroHome: "url('/img/home/hero-bg.png')",
            bannr2: "url('/img/icons/banner-icon2.svg')",
            baner3: "url('/img/icons/banner-icon3.svg')",
            quoe: "url('/img/icons/quote.svg')",
            qote: "url('/img/icons/quote.svg')",
            pop1: "url('/img/icons/section-prop1.svg')",
            pop2: "url('/img/icons/section-prop2.svg')",
            pop3: "url('/img/icons/section-prop3.svg')",
            pop4: "url('/img/icons/section-prop4.svg')",
      },
        },
  },
  plugins: [],
};
;