import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.join(__dirname, 'src'),
  plugins: [react()],
  server: {
    open: true,
  },
});
