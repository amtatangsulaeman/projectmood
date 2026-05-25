import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#000000", paper: "#FFFFFF" },
      fontFamily: {
        display: ["var(--font-league)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.01em",
        wideish: "0.08em",
        wider2: "0.12em",
        widest2: "0.15em",
        widest3: "0.2em",
      },
      maxWidth: { reading: "60ch" },
      screens: { xs: "390px" },
    },
  },
  plugins: [],
};

export default config;
