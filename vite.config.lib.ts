import { defineConfig } from "vite";
import config from "./vite.config";

// https://vitejs.dev/config/
export default defineConfig({
  ...config,
  build: {
    lib: {
      entry: "./src/components/Card.vue",
      name: "vue-card",
      formats: ["cjs", "umd", "es", "iife"],
    },
    outDir: "dist",
    rollupOptions: {
      output: {
        extend: true,
      },
    },
  },
});
