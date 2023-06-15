/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#1a1a1a",
        brand: "#f7ab0a",
        red: "#db4437",
        yellow: "#f4b480",
        green: "#0f9d58",
      },
    },
  },
  plugins: [],
};
