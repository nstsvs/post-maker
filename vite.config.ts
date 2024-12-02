import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [svgr({
    // svgr options: https://react-svgr.com/docs/options/
    svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
    include: "**/*.svg",
  }),, react()],
  server: {
    open: true,
  },
});
