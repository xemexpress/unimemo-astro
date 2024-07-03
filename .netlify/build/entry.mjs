import { renderers } from './renderers.mjs';
import { manifest } from './manifest_hj8tVHSd.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/overview/metal-types/_category_.astro.mjs');
const _page3 = () => import('./pages/overview/plating-types/_category_.astro.mjs');
const _page4 = () => import('./pages/overview/product-types/_category_.astro.mjs');
const _page5 = () => import('./pages/overview.astro.mjs');
const _page6 = () => import('./pages/products/_slug_.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/overview/metal-types/[category].astro", _page2],
    ["src/pages/overview/plating-types/[category].astro", _page3],
    ["src/pages/overview/product-types/[category].astro", _page4],
    ["src/pages/overview.astro", _page5],
    ["src/pages/products/[slug].astro", _page6],
    ["src/pages/rss.xml.ts", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "8457ba58-8394-460c-9948-78dbf3573b13"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
