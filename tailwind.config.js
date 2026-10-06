/** @type {import('tailwindcss').Config} */
const c = (n) => `rgb(var(--c-${n}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // semantic palette
        canvas: c("canvas"),
        surface: c("surface"),
        line: c("line"),
        mute: c("mute"),
        ink: c("ink"),
        accent: c("accent"),
        mark: c("mark"),
        ember: c("ember"),

        // compatibility aliases used by the existing components
        paper: c("paper"),
        steel: c("steel"),
        signal: c("signal"),
        midnight: c("midnight"),
        slate2: c("slate2"),
      },
      maxWidth: { shell: "72rem" },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(15 23 42 / 0.04), 0 10px 30px -18px rgb(17 24 39 / 0.16)",
        lift: "0 10px 35px -18px rgb(17 24 39 / 0.20)",
      },
    },
  },
  plugins: [],
};
