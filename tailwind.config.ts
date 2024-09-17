import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black:{
          custom: "#151718",
        },
        white:{
          custom: "#f5f5f5",
          custom2: "#ffffff",
        },
        gray: {
          custom: "#646465",
        }
      },
      fontFamily: {
        "fira-code": ['"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
