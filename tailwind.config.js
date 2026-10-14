/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Bricolage Grotesque"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        page: "rgb(var(--page) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        soft: "rgb(var(--soft) / <alpha-value>)",
        line: "var(--line)",
        glass: "var(--glass)",
        brand: { DEFAULT: "#2563eb", deep: "#1d4ed8", sky: "#0ea5e9" },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        float: "float 7s ease-in-out infinite",
        beam: "beam 9s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        float: { "50%": { transform: "translateY(-10px)" } },
        beam: { "50%": { opacity: "0.45", transform: "scale(1.06)" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
        },
      },
    },
  },
  plugins: [],
  // theme: {
  //   extend: {
  //     colors: {
  //       "primary-color": '#5E36F2',
  //       // "primary-color": '#e11616',
  //       "heading-color": '#000424',
  //       "content-color": '#626262'
  //     },
  //     backgroundImage: {
  //       'button-gradient': 'linear-gradient(90deg, #f54bff, #5E36F2)',
  //       'topbar-gradient': 'linear-gradient(117deg,#fef0f8 14.35%,#dacfff 84.4%)',
  //       'card-gradient': 'linear-gradient(117deg,#fff2f9 14.01%,#f2eeff 120.85%)',
  //       'about-cta-bg': "url('/assets/images/about/ctabg.png)"
  //     },
  //     fontFamily: {
  //       heading: ['Poppins', 'sans-serif'],
  //     },
  //     boxShadow: {
  //       'main-shadow': '0px 0px 30px rgba(0,0,0,0.12)',
  //       'light-shadow': '0px 0px 30px rgba(0,0,0,0.067)',
  //       'dark-shadow': '0px 0px 20px rgba(0,0,0,0.4)',
  //       'very-light-shadow': '0px 10px 50px 0px rgba(0, 0, 0, 0.05)',
  //     },
  //   },
  // },
};
