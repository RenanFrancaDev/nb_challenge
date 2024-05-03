import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "category-item-gradient":
          "linear-gradient(45deg, #730fe6 0%, #3c3c3b 100%);",
      },
      colors: {
        primary: "#730fe6",
        foreground: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
export default config;
