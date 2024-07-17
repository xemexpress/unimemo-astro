/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly PRODUCTS_PER_PAGE: string;
    readonly FIREBASE_PRIVATE_KEY_ID: string;
    readonly FIREBASE_PRIVATE_KEY: string;
    readonly FIREBASE_PROJECT_ID: string;
    readonly FIREBASE_CLIENT_EMAIL: string;
    readonly FIREBASE_CLIENT_ID: string;
    readonly FIREBASE_AUTH_URI: string;
    readonly FIREBASE_TOKEN_URI: string;
    readonly FIREBASE_AUTH_CERT_URL: string;
    readonly FIREBASE_CLIENT_CERT_URL: string;
    readonly PROD: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
