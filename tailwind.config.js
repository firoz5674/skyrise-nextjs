/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": '#5E36F2',
        // "primary-color": '#e11616',
        "heading-color": '#000424',
        "content-color": '#626262'
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(90deg, #f54bff, #5E36F2)',
        'topbar-gradient': 'linear-gradient(117deg,#fef0f8 14.35%,#dacfff 84.4%)',
        'card-gradient': 'linear-gradient(117deg,#fff2f9 14.01%,#f2eeff 120.85%)'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'main-shadow': '0px 0px 30px rgba(0,0,0,0.12)',
        'light-shadow': '0px 0px 30px rgba(0,0,0,0.067)',
        'dark-shadow': '0px 0px 20px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
