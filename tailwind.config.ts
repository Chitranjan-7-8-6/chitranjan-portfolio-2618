import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { fontFamily: {
    oswald: ["var(--font-oswald)"], syne: ["var(--font-syne)"],
    grotesk: ["var(--font-grotesk)"], mono: ["var(--font-mono)"] } } },
  plugins: [],
};
export default config;
