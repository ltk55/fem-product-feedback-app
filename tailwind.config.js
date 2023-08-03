/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-header-desktop":
          "url('/img/suggestions/desktop/background-header.png')",
        "background-header-mobile":
          "url('/img/suggestions/mobile/background-header.png')",
        "background-header-tablet":
          "url('/img/suggestions/tablet/background-header.png')",
      },
    },
  },
  plugins: [],
};
