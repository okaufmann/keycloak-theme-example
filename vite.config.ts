import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        'src/index.ts',
      ],
      output: {
        assetFileNames: '[name][extname]',
        dir: 'theme/mighty-code/login/resources/dist_sub',
        entryFileNames: '[name].js',
      },
    },
  },
});
