import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify(), tailwindcss()],
});
