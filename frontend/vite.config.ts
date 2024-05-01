/// <reference types="vite-plugin-svgr/client" />
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import environment from "vite-plugin-environment"
import svgr from "vite-plugin-svgr"
import { resolve } from "node:path"
import "dotenv/config"

const alias = [{ find: "@", replacement: resolve(__dirname) }]
const { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_PUBLIC } = process.env

export default defineConfig({
  root: ".",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias,
  },
  define: {
    STATIC_CONTEXT: {
      SUPABASE_URL: REACT_APP_SUPABASE_URL,
      SUPABASE_ANON_PUBLIC: REACT_APP_SUPABASE_ANON_PUBLIC,
    },
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
