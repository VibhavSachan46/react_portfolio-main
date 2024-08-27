module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Madimi: ["Salsa", "cursive"],
        inter: ["Inter", "sans-serif"],
        "edu-sa": ["Edu SA Beginner", "cursive"],
        mono: ["Roboto Mono", "monospace"],
        Heading: ["cursive"]
      },
      colors: {
        // Configure your color palette here
        bgblue: '#3b82f6'
      }
    },
  },
  plugins: [],
};
