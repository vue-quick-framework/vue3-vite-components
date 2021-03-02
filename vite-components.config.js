import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		extensions: ['.js', '.ts', '.vue', '.json']
	},
	build: {
		// manifest: true,
		target: 'es2015',
		cssCodeSplit: true,
		// base: './',
		// outDir: 'dist',
		// assetsDir: 'assets',
		// sourcemap: false,
		// publicDir: 'public',
		lib: {
			entry: resolve(__dirname, 'components/main.js'),
			formats: ['cjs'], // 'es' | 'cjs' | 'umd' | 'iife'
			name: 'VueComponents'
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: [
		vue()
	]
})