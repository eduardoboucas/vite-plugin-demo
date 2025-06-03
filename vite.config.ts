import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify()],
});
