/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/images/hero.webp')",
        "hero-pattern-lg": "url('/images/hero-lg.webp')",
        "about-pattern": "url('/images/about-hero.webp')",
      }),
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
};
