/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          'lg-650': '650px', 
        },
      },
    },
    plugins: [],
  }