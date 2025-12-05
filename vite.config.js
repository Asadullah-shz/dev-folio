import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react({
      
      fastRefresh: true
    }),
    tailwindcss()
  ],

  
  build: {
    
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, 
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },


    rollupOptions: {
      output: {
        manualChunks: {
         
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['gsap'],
          'ui-vendor': ['antd', 'lucide-react'],
          'three-vendor': ['three', '@react-three/fiber'],
        },
      
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },


    chunkSizeWarningLimit: 1000,


    sourcemap: false,


    target: 'es2015',

  
    cssCodeSplit: true,
  },


  server: {

    hmr: {
      overlay: true
    },
 
    fs: {
      strict: false
    }
  },


  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'gsap',
      'antd',
      'lucide-react'
    ],
    exclude: ['@tailwindcss/vite']
  },

  
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})