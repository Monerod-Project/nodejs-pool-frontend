module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dracula: {
          background: "hsla(231, 15%, 18%)",
          line: "hsla(232, 14%, 31%)",
          foreground: "hsla(60, 30%, 96%)",
          selection: "hsla(232, 14%, 31%)",
          comment: "hsla(225, 27%, 51%)",
          cyan: "hsla(191, 97%, 77%)",
          green: "hsla(135, 94%, 65%)",
          orange: "hsla(31, 100%, 71%)",
          pink: "hsla(326, 100%, 74%)",
          purple: "hsla(265, 89%, 78%)",
          red: "hsla(0, 100%, 67%)",
          yellow: "hsla(65, 92%, 76%)",
        },
        dashboard: {
          "blue-200": "#171531",
          "blue-400": "#292657",
          "blue-500": "#25204D"
        }
      },

      backgroundImage: theme => ({
        "circuit": "url('images/background.webp')"
      }),

      width: {
        "3/10": "30%"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
