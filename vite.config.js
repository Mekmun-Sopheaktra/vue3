import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import compression from 'vite-plugin-compression';
import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator';

export default ({ mode }) => {
  const src = 'src';
  const { VITE_PORT, VITE_BASE_URL } = loadEnv(mode, process.cwd());

  if (!process.env.VITE_PREFIX) {
    process.env.VITE_PREFIX = 'ite';
  }

  return defineConfig({
    base: VITE_BASE_URL || './',
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        eslintrc: {
          enabled: true,
        },
        dts: true,
      }),
      Components({
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
          IconsResolver({
            enabledCollections: ['lets-icons'],
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
      compression({
        algorithm: 'gzip',
        threshold: 10240,
        deleteOriginFile: false,
      }),
    ],
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
      'process.env': {
        VITE_MAINTENANCE_MODE: process.env.VITE_MAINTENANCE_MODE || 'false',
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@views': resolve(__dirname, `./${src}/views`),
        '@composables': resolve(__dirname, `./${src}/composables`),
        '@router': resolve(__dirname, `./${src}/router`),
        '@assets': resolve(__dirname, `./${src}/assets`),
        '@fonts': resolve(__dirname, `./${src}/assets/fonts`),
        '@images': resolve(__dirname, `./${src}/assets/images`),
        '@middlewares': resolve(__dirname, `./${src}/router/middlewares`),
      },
      extensions: ['.js', '.vue', '.json', '.env'],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/style/less/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
        scss: {
          // If you need to globally import custom SCSS files (like Bootstrap customizations)
          additionalData: `
          $prefix: ${process.env.VITE_PREFIX};
          @import "${src}/assets/scss/global.scss";
        `,
        },
      },
    },
    optimizeDeps: {
      include: ['mitt', 'dayjs', 'axios', 'pinia', '@vueuse/core'],
      exclude: ['@iconify-icons/lets-icons'],
    },
    server: {
      port: VITE_PORT,
      host: '0.0.0.0',
      open: true,
      cors: true,
      proxy: {},
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*'],
      },
      hmr: true,
      historyApiFallback: true,
    },

    build: {
      target: 'es2015',
      sourcemap: false,
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          entryFileNames: `${process.env.VITE_PREFIX}-[name]/static/js/[name]-[hash].js`,
          chunkFileNames: `${process.env.VITE_PREFIX}-[name]/static/js/[name]-[hash].js`,
          assetFileNames: `${process.env.VITE_PREFIX}-[name]/static/[ext]/[name]-[hash].[ext]`,
          compact: true,
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
          },
        },
      },
    },
  });
};
