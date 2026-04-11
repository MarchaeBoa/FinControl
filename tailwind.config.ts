import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        surface: "#111118",
        "surface-2": "#1a1a24",
        border: "rgba(255,255,255,0.07)",
        accent: {
          DEFAULT: "#00e5a0",
          hover: "#00ffb3",
        },
        accent2: {
          DEFAULT: "#7c5cfc",
        },
        accent3: {
          DEFAULT: "#ff6b35",
        },
        "fc-text": "#f0f0f5",
        muted: "#6b6b80",
        danger: "#ff4444",
        warning: "#ffb830",
        success: "#00e5a0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 32px rgba(0,0,0,0.4)",
        glow: "0 0 40px rgba(0,229,160,0.15)",
        "glow-lg": "0 0 60px rgba(0,229,160,0.25)",
        "glow-accent": "0 0 24px rgba(0,229,160,0.4)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        "fade-up-delay-1": "fadeUp 0.6s ease 0.1s both",
        "fade-up-delay-2": "fadeUp 0.6s ease 0.2s both",
        "fade-up-delay-3": "fadeUp 0.6s ease 0.3s both",
        "fade-up-delay-4": "fadeUp 0.6s ease 0.4s both",
        "float": "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-reverse": "float 10s ease-in-out infinite reverse",
        "pulse-dot": "pulseDot 2s ease infinite",
        "spin-slow": "spin 3s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.3s ease",
        "slide-in-right": "slideInRight 0.3s ease",
        "scale-in": "scaleIn 0.3s ease",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,229,160,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0,229,160,0.3)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
