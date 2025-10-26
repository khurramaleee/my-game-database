import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

  ],
  server: {
    // ⚙️ This section enables the proxy
    proxy: {
      // Any request starting with '/api' will be proxied
      '/api': {
        target: 'https://api.rawg.io', // The base URL of the RAWG API
        changeOrigin: true,            // This is crucial for cross-origin proxying
        secure: true,                  // Since the RAWG API is HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite: /api/games -> /games
      },
    },
  },

})

