import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    imagetools(),
    sitemap({
      hostname: "https://mohammadkhanautoparts.com",
      outDir: "./dist",
    }),
  ],
});
