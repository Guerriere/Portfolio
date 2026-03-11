/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        carbon:   { DEFAULT: "#0a0c0f", 50: "#12151a", 100: "#1a1d24", 200: "#22262f" },
        electric: { DEFAULT: "#0066ff", light: "#3385ff", glow: "rgba(0,102,255,0.15)", border: "rgba(0,102,255,0.3)" },
        neon:     { DEFAULT: "#00d4aa", light: "#33dfbb", glow: "rgba(0,212,170,0.12)" },
        slate:    { dim: "rgba(255,255,255,0.06)", mid: "rgba(255,255,255,0.35)", hi: "rgba(255,255,255,0.7)" },
      },
      fontFamily: {
        mono:    ["'IBM Plex Mono'", "monospace"],
        display: ["'IBM Plex Sans Condensed'", "sans-serif"],
        body:    ["'IBM Plex Sans'", "sans-serif"],
      },
      animation: {
        "pulse-slow":   "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-up":      "fadeUp 0.5s ease-out both",
        "scan":         "scan 8s linear infinite",
        "blink":        "blink 1.1s step-end infinite",
        "data-flow":    "dataFlow 20s linear infinite",
      },
      keyframes: {
        fadeUp:   { from: { opacity: 0, transform: "translateY(16px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        scan:     { "0%": { backgroundPosition: "0 -100%" }, "100%": { backgroundPosition: "0 200%" } },
        blink:    { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
        dataFlow: { "0%": { transform: "translateY(0)" }, "100%": { transform: "translateY(-50%)" } },
      },
    },
  },
  plugins: [],
};
