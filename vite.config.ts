import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA, VitePWAOptions} from "vite-plugin-pwa";

const pwaConfig : VitePWAOptions = {
  disable: false,
  includeManifestIcons: false,
  injectManifest: undefined,
  injectRegister: undefined,
  minify: false,
  workbox: undefined,
  registerType: 'autoUpdate',
  includeAssets: ['icon.png'],
  manifest:{
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    display: "standalone",
    scope: "/",
    start_url: "/",
    name: "webtoys",
    short_name: "webtoys",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      }
    ]
  },
  devOptions:{
    enabled: true,
  }
}

export default defineConfig({
  plugins: [
    VitePWA(pwaConfig),
    react()],
})
