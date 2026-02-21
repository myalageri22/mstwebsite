import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: "#121a2f",
          ink: "#0a1020",
          blue: "#2f80d8",
          blueDark: "#1e4f9d",
          lime: "#8bd449",
          text: "#e8ecf7",
          muted: "#a8b4d0"
        }
      },
      boxShadow: {
        soft: "0 14px 40px rgba(9, 14, 31, 0.28)",
        card: "0 10px 24px rgba(8, 12, 26, 0.24)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      fontFamily: {
        sans: ["Trebuchet MS", "Segoe UI", "Tahoma", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 500ms ease-out"
      }
    }
  },
  plugins: []
};

export default config;
