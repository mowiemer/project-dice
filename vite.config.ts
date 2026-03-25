import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/project-dice/",
  base: "/",
  build: {
    outDir: "site",
    emptyOutDir: false,
  },
});
