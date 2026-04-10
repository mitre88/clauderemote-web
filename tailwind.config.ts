import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        brand: {
          orange: "#FF8C00",
          purple: "#9B59B6",
          blue: "#87CEEB",
          yellow: "#FFFF00",
        },
        bg: {
          dark: "#1A1208",
          card: "#2A1F10",
          elevated: "#3A2E1E",
        },
        text: {
          primary: "#FFFFFF",
          warm: "#F5E6D3",
          muted: "#A0896A",
        },
        status: {
          green: "#4CAF50",
          amber: "#FF9800",
          red: "#F44336",
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at top, #2A1F10 0%, #1A1208 50%, #0D0A05 100%)",
        "orange-gradient": "linear-gradient(135deg, #FF8C00 0%, #FF6B00 50%, #E05000 100%)",
        "purple-gradient": "linear-gradient(135deg, #9B59B6 0%, #7D3C98 100%)",
        "card-gradient": "linear-gradient(145deg, #3A2E1E 0%, #2A1F10 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "particle-1": "particle1 8s linear infinite",
        "particle-2": "particle2 12s linear infinite",
        "particle-3": "particle3 10s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        particle1: {
          "0%": { transform: "translateY(100vh) translateX(0px)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-10vh) translateX(30px)", opacity: "0" },
        },
        particle2: {
          "0%": { transform: "translateY(100vh) translateX(0px)", opacity: "0" },
          "10%": { opacity: "0.7" },
          "90%": { opacity: "0.7" },
          "100%": { transform: "translateY(-10vh) translateX(-20px)", opacity: "0" },
        },
        particle3: {
          "0%": { transform: "translateY(100vh) translateX(0px)", opacity: "0" },
          "10%": { opacity: "0.5" },
          "90%": { opacity: "0.5" },
          "100%": { transform: "translateY(-10vh) translateX(15px)", opacity: "0" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 140, 0, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 140, 0, 0.6)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "orange-glow": "0 0 30px rgba(255, 140, 0, 0.4)",
        "orange-glow-lg": "0 0 60px rgba(255, 140, 0, 0.3)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(255, 140, 0, 0.2)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
