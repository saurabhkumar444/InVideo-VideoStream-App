/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://img.freepik.com/premium-vector/modern-blue-3d-banner-background-with-abstract-waves_181182-20327.jpg')",
        "footer-texture":
          "url('https://img.freepik.com/premium-vector/modern-blue-3d-banner-background-with-abstract-waves_181182-20327.jpg')",
      },
    },
  },
  plugins: [],
};
