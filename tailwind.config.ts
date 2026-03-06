import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1F2933",
          secondary: "#E5E7EB",
          accent: "#2C8A8F",
          background: "#F5F7F7"
        }
      },
      boxShadow: {
        steel: "0 10px 30px -18px rgba(31, 41, 51, 0.45)"
      },
      backgroundImage: {
        "steel-grid": "linear-gradient(rgba(31,41,51,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,41,51,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
