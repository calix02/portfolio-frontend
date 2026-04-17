import tailwindcss from "@tailwindcss/vite"; 
import react from "@vitejs/plugin-react"; 
import path from "path"; 
import { defineConfig } from "vite"; 
 
export default defineConfig({ 
  plugins: [react(), tailwindcss()], 
   assetsInclude: ['**/*.lottie'],
  resolve: { 
    alias: { 
      "@": path.resolve(__dirname, "./src"), 
    }, 
  }, 
})
