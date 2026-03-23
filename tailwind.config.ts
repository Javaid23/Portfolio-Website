import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cyber: "#f59e0b",
        emerald: "#14b8a6"
      },
      boxShadow: {
        cyber: "0 0 0 1px rgba(245, 158, 11, 0.35), 0 10px 30px rgba(245, 158, 11, 0.2)"
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.12) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
