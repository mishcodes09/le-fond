/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e0d0b",
        surface: "#f5f3ef",
        coral: "#c94f2c",
        teal: "#1a6b54",
        amber: "#b86e0b",
      },

      fontFamily: {
        serif: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },

      fontSize: {
        "display-xl": [
          "clamp(3rem, 6vw, 5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4.5vw, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.75rem, 3vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
      },

      maxWidth: {
        layout: "1200px",
      },
    },
  },
  plugins: [],
};
