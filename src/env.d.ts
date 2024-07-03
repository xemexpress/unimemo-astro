/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly PRODUCTS_PER_PAGE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
