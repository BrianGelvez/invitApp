import type { Config } from "tailwindcss";
import { colorsDefault } from "./config/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/home/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colorsDefault,
      screens: {
        s: "375px",
      },
      boxShadow: {
        full: "0 3px 5px rgba(0, 0, 0, 0.15), 0 -3px 5px rgba(0, 0, 0, 0.1), 3px 0 5px rgba(0, 0, 0, 0.1), -3px 0 5px rgba(0, 0, 0, 0.1)",
        light:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05), 1px 0 3px rgba(0, 0, 0, 0.05), -1px 0 3px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
} satisfies Config;
