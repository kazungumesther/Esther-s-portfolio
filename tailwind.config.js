/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6",
        ink: "#1C2536",
        sun: "#F6D365",
        sky: "#D6E2F5",
        mint: "#A8D5BA",
        cardgreen: "#CFE0C8",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      boxShadow: {
        hard: "4px 4px 0px #1C2536",
        "hard-lg": "6px 6px 0px #1C2536",
      },
    },
  },
  plugins: [],
};
