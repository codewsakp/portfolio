/** Tailwind config: the colour palette lives here, so you can re-theme the whole site in one place. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0B1020', 800: '#111A30', 700: '#18233F' },
        brand: { purple: '#9B6DFF', blue: '#4F8CFF', lavender: '#C4B5FD' },
        ink: { DEFAULT: '#F5F3FF', muted: '#A9A6C4' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(155,109,255,0.45)',
      },
    },
  },
  plugins: [],
};
