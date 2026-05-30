/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        ember: "#ff252d",
        graphite: "#141414"
      },
      boxShadow: {
        glow: "0 0 55px rgba(255, 37, 45, 0.28)"
      }
    }
  },
  plugins: []
};
