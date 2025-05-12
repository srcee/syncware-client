import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: "named",
      },
      include: "**/*.svg",
    }),
    react(),
  ],
  test: {
    root: "src",
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    clearMocks: true,
    pool: "threads",
    retry: 2,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".json", ".jsx", ".js", ".mjs", ".mts"],
  },
});
