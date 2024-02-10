/// <reference types="vite-plugin-svgr/client" />
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import environment from "vite-plugin-environment"
import svgr from "vite-plugin-svgr"
import { resolve } from "node:path"

const alias = [{ find: "@", replacement: resolve(__dirname) }]

export default defineConfig({
  root: ".",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  plugins: [react(), environment("all"), svgr()],
})
