/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import type { Plugin } from 'vite'

declare const process: { exit: (code: number) => never }

// React's scheduler keeps a Node handle open after prerender, so the build
// would otherwise sit there after the files are already written.
function exitAfterPrerender(): Plugin {
  return {
    name: 'exit-after-prerender',
    apply: 'build',
    closeBundle() {
      setTimeout(() => process.exit(0), 50)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: new URL('./src/prerender.tsx', import.meta.url).pathname,
    }),
    exitAfterPrerender(),
  ],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
