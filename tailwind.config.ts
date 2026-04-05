import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FAF7F3",
          100: "#F5F1ED",
          200: "#EBE7E3",
          300: "#D8CDBD",
          400: "#C9A799",
          500: "#8B6F5E",
          600: "#7C685C",
          700: "#614E42",
          800: "#4A3C35",
          900: "#2B1909",
        },
        accent: {
          rose: "#C9A799",
          clay: "#7C685C",
          mulberry: "#461C20",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
