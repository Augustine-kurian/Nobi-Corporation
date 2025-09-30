/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-ellipse": "radial-gradient(ellipse at top left,#cad6ec,#ebdfe1,#cad6ec)",
        "radial-ellipse-even": "radial-gradient(ellipse at top left,#ebdfe1,#cad6ec,#ebdfe1)",
      },
      colors:{
        brand:{
          DEFAULT:'#20576E'
        },
        gray:{
          DEFAULT: 'text-gray-500'
        }
      },
      fontFamily: {
        custom: ["Source Sans Pro", "-apple-system", "BlinkMacSystemFont", "Segeo UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        // custom: ['customFont', 'sans-serif']
      }
    },
  },
  plugins: [],
}


