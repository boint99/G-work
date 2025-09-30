import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      /* eslint-disable no-undef */
      "~": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    port: 5173, 
    host: true,
  },
});
