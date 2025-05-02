/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor:{
        primary:{
          1:"#001821",
          2:"#005c7d",
          3:"#009fd9",
          4:"#36c9ff",
          5:"#8be0ff",
          6:"#f9fdff",
        }
      },
      backgroundColor:{
        primary:{
          1:"#001821",
          2:"#005c7d",
          3:"#009fd9",
          4:"#36c9ff",
          5:"#8be0ff",
          6:"#f9fdff",
        }
      },
      borderColor:{
        primary:{
          1:"#001821",
          2:"#005c7d",
          3:"#009fd9",
          4:"#36c9ff",
          5:"#8be0ff",
          6:"#f9fdff",
        }
      },
    },
  },
  plugins: [],
}

