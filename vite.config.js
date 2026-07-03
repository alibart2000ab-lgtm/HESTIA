import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

export default defineConfig({
  base: '/HESTIA/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        notifiche: resolve(__dirname, 'notifiche.html'),
        onboarding1: resolve(__dirname, 'onboarding-1.html'),
        onboarding2: resolve(__dirname, 'onboarding-2.html'),
        onboarding3: resolve(__dirname, 'onboarding-3.html'),
        onboarding4: resolve(__dirname, 'onboarding-4.html'),
        onboarding5: resolve(__dirname, 'onboarding-5.html'),
        room: resolve(__dirname, 'room.html'),
        traguardi: resolve(__dirname, 'traguardi.html'),
      }
    }
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Hestia Web App',
        short_name: 'Hestia',
        description: 'Hestia Prototype converted to PWA',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/HESTIA/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'gewiss-icons.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'gewiss-icons.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
