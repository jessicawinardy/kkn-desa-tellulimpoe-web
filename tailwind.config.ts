import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F4DC00",
        green: "#02682E",
        white: "#FFFFFF",
        "green-hover": "#05B385",
        lightYellow: "#FFFAC8",
        orange: "#F06A75",
      },
      fontSize: {
        "text-s": [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
        "text-m": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "text-l": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "heading-s": [
          "20px",
          {
            lineHeight: "28px",
          },
        ],
        "heading-m": [
          "28px",
          {
            lineHeight: "36px",
          },
        ],
        "heading-l": [
          "36px",
          {
            lineHeight: "44px",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
