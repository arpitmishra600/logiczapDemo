import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({ open: true }) // Automatically opens the report in the browser
    ],
        output: {
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    // Split node_modules into separate chunks
                    return 'vendor';
                }
                // You can further customize chunking based on your application's structure
            }
        }
    }
}
  
})
