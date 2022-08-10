import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'






// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true
			},
		}
	},
	build: {
		outDir: "../public/dist"
  },
  // server: {
  //   port: 3000,
  // }
})
