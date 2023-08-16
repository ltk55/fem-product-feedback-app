/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "border-orange-300",
    "border-fuchsia-600",
    "border-blue-400",
    "bg-orange-300",
    "bg-fuchsia-600",
    "bg-blue-400",
    "text-white",
    "text-[#647196]",
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
