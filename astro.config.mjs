import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000,
    },
    integrations: [
        tailwind(),
        sitemap(),
        partytown({
            config: { forward: ["dataLayer.push"] },
        }),
    ],
    site: "https://unimemo.netlify.app/",
    output: "server",
    adapter: netlify(),
    // experimental: {
    //     actions: true,
    // },
});
