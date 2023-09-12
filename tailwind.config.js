/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary:"#7f5af0",
          base:"#16161a",
          light:"#fffffe",
          accent:"#94a1b2",
          op:"#2cb67d",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}  