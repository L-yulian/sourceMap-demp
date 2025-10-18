import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    base: './',
    build: {
      outDir: 'dist',
      sourcemap: true,
      emptyOutDir: true,

      // rollupOptions: {
      //   // make sure to externalize deps that shouldn't be bundled
      //   // into your library
      //   external: ['vue'],
      //   output: {
      //     // Provide global variables to use in the UMD build
      //     // for externalized deps
      //     globals: {
      //       vue: 'Vue',
      //     },
      //   },
      // },
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
