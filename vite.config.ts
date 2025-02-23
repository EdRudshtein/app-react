import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    target: "modules",
    rollupOptions: {},
  },
});
