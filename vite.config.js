import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [vue()],
});
// export default defineConfig({
//   plugins: [vue(), viteSingleFile()],
//   build: {
//     target: 'esnext',
//     assetsInlineLimit: 100000000,
//     chunkSizeWarningLimit: 100000000,
//     cssCodeSplit: false,
//     brotliSize: false,
//     rollupOptions: {
//       inlineDynamicImports: true,
//       output: {
//         manualChunks: () => 'everything.js',
//       },
//     },
//   },
// });
