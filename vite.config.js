import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  base: "/",
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  server: {
    open: true,
    port: 5173,
    host: true,
  },
});