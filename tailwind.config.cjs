module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
