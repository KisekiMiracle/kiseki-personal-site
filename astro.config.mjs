// @ts-check

import Icons from "unplugin-icons/vite";
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  site: "https://kiseki-miracle.dev",
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [
      tailwindcss(),
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
    ],
  },

  output: "server",
  adapter: cloudflare(),
});
