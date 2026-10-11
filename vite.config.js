import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Deux pages : le portfolio (/) et la carte de visite (/carte/).
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("index.html", import.meta.url)),
        carte: fileURLToPath(new URL("carte/index.html", import.meta.url)),
      },
    },
  },
});
