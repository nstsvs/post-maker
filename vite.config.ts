import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

export default defineConfig({
  root: 'src',
  build: {
    // ???
    outDir: '../dist',
  },
  plugins: [
    svgr({
      svgrOptions: {
        exportType: "default", // SVG будет экспортироваться как компонент по умолчанию
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: "**/*.svg",
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  server: {
    open: true,
  },
});
