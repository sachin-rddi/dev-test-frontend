import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },

    resolve: {
      alias: {
        "@views": path.resolve(__dirname, "src/views"),
        "@components": path.resolve(__dirname, "src/components"),
        "@store": path.resolve(__dirname, "src/store"),
        "@enums": path.resolve(__dirname, "src/enums"),
        "@lib": path.resolve(__dirname, "src/lib"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@": path.resolve(__dirname, "src/"),
      },
    },
  };
});
