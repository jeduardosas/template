import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react(), 
      svgr({
        svgrOptions:{
          icon:true,
          svgProps:{
            fill:"currentColor",
            stroke:"currentColor"
          }
        }
      })],
    server:{
        host:true,
    },
    resolve: {
      alias: {
        '/@': path.resolve(__dirname, 'src'),
        '/@public': path.resolve(__dirname, 'public'),
      },
    },
})
