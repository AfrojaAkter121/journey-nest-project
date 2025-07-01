import daisyui from "daisyui";
import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui, scrollbarHide],
  daisyui: {
    themes: ["light", "dark"], 
  },
};

export default config;