import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ClUehYY9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/create.json.astro.mjs');
const _page3 = () => import('./pages/api/feedback.json.astro.mjs');
const _page4 = () => import('./pages/api/login.json.astro.mjs');
const _page5 = () => import('./pages/api/logout.json.astro.mjs');
const _page6 = () => import('./pages/create.astro.mjs');
const _page7 = () => import('./pages/feedback.astro.mjs');
const _page8 = () => import('./pages/login.astro.mjs');
const _page9 = () => import('./pages/overview.astro.mjs');
const _page10 = () => import('./pages/products/_slug_.astro.mjs');
const _page11 = () => import('./pages/profile.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/thank-you.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/create.json.ts", _page2],
    ["src/pages/api/feedback.json.ts", _page3],
    ["src/pages/api/login.json.ts", _page4],
    ["src/pages/api/logout.json.ts", _page5],
    ["src/pages/create.astro", _page6],
    ["src/pages/feedback.astro", _page7],
    ["src/pages/login.astro", _page8],
    ["src/pages/overview.astro", _page9],
    ["src/pages/products/[slug].astro", _page10],
    ["src/pages/profile.astro", _page11],
    ["src/pages/rss.xml.ts", _page12],
    ["src/pages/thank-you.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "85f350e4-7865-4f62-879f-f3f9eea44deb"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
