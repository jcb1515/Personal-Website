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
        background: "#0a0a0a",
        foreground: "#cccccc", /* light grey body text */
        primary: {
          DEFAULT: "#cc0000",
          hover: "#ff1a1a",
        },
        surface: {
          DEFAULT: "#111111",
          light: "#1a1a1a",
          border: "#333333",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "monospace"],
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(204, 0, 0, 0.7)" },
          "50%": { opacity: ".8", boxShadow: "0 0 15px 5px rgba(204, 0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
