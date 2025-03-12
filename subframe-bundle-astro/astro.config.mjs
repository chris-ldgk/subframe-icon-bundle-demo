// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      visualizer({
        emitFile: true,
        filename: "stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
  },
});
