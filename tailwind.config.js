export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary:"#7f5af0",
          secondary:"#16161a",
          light:"#fffffe",
          accent:"#94a1b2",
          op:"#2cb67d",
        }
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}