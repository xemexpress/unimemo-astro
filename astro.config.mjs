import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000,
    },
    integrations: [tailwind(), sitemap()],
    site: "https://unimemo.netlify.app/",
});
