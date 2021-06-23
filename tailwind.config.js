module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme("colors"),
    textColor: {
      "primary": "#D2D2D2",
      "secondary": "#E85D04"
    },

    fontFamily: {
      main:"Benne",
      secondary:"Great Vibes"
    },
    colors: {
      transparent:"transparent",
      current:"currentColor",
      main:{
        DEFAULT:"#111111"
      },
      textMain:{
        DEFAULT: "#E85D04"
      }

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
