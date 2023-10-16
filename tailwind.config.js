/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        'wxl':'235px',
        'wll': '174px'
      },
      boxShadow:{
        'shadoww':'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
      },
      margin:{
        'mll':'17px'
      },
      height:{
        'hh':'346px'
      }
    },
  },
  plugins: [],

}