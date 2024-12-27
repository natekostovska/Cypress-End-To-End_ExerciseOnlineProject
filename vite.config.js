import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Specify the root folder, if it's not the default project root
  build: {
    outDir: 'dist', // specify the output directory for the build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Default index.html
        alt: path.resolve(__dirname, 'index-alt.html') // Alternative index.html
      },
  },
},
})
