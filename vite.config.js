import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite + React setup. No changes needed for Vercel.
export default defineConfig({
  plugins: [react()],
});
