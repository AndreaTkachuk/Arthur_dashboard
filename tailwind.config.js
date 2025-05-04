/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
            background: "hsl(var(--background))", // основний фон
          card: "#121C2D", // карточки та секції
          primary: "#1D4ED8", // синя кнопка, виділення
          primaryHover: "#03061A", // синя кнопка при наведенні 
          border: "#1E293B", // бордери в таблицях
          text: "#F8FAFC", // основний текст
          mutedText: "#94A3B8", // вторинний текст
          accentBlue: "#3B82F6", // фільтр, сорт, активні стани
          success: "#4ADE80", // зелений (32%)
          warning: "#FACC15", // жовтий (38%)
          danger: "#F87171", // червоний (67%)
          lightBlue: "#60A5FA", // кнопки в правому меню
          goalGreen: "#22C55E", // зелений індикатор goal
          goalRed: "#EF4444", // червоний індикатор goal
          goalYellow: "#FBBF24", // жовтий індикатор goal
          darkOverlay: "#1E293B", // задній фон у таблицях
          whiteSec: "#C0C9DC",
        },
        borderRadius: {
          xl: "1rem",
          lg: "0.75rem",
          md: "0.5rem",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    // plugins: [require("tailwindcss-animate")],
  }
  