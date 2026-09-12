export default {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms") ({
      strategy: "class"
    })
  ],
}