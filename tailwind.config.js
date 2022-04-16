module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        modal: "800px",
        "product-height": "550px",
        "10%": "10%",
        "90%": "90%",
      },
      width: {
        modal: "766px",
      },
      gridTemplateRows: {
        "product-cart-list": "repeat(auto-fill, minmax(200px, 1fr))",
      },
      gridTemplateColumns: {
        "product-list": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {transform: "translateX(0%)"},
          "100%": {transform: "translateX(-100%)"},
        },
        marquee2: {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(0%)"},
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
