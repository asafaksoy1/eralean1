/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // EraLean brand system — Volt is the ONE accent (use sparingly).
        ink: "#0B0B0C", // page background
        carbon: "#161618", // raised surfaces
        volt: "#BDFF00", // the single accent
        "volt-deep": "#9AC700", // Volt text on light surfaces
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // body, weight 300
        display: ['"Inter Tight"', "system-ui", "sans-serif"], // headlines
        serif: ["Newsreader", "Georgia", "serif"], // editorial pull-quotes only
      },
      letterSpacing: {
        display: "-0.03em",
      },
    },
  },
  plugins: [],
};
