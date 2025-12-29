import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { dirname, resolve } from "node:path";
import Components from "unplugin-vue-components/vite";

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  base: "/",

  plugins: [
    vue(),
    vueDevTools(),
    VueI18nPlugin({
      runtimeOnly: false,
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/i18n/locales/**"
      ),
    }),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/scss/element/index.scss" as *;`,
      },
    },
  },

  server: {
    port: 5173, //Haysy portda islemelidigini gorkezmek
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
