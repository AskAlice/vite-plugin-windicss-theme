import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import windiCSS from 'vite-plugin-windicss'
import windiThemePlugin from 'vite-plugin-windicss-theme'
export default defineConfig({
  plugins: [reactRefresh(), windiCSS(), windiThemePlugin({config: "./windi.config.ts"})],
})
