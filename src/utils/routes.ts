// src/utils/routes.ts

export const ROUTES = {
    HOME: "/",
    FEEDBACK: "/feedback",
    CREATE_ACCOUNT: "/create",
    LOGIN: "/login",
    PROFILE: "/profile",
    PRODUCTS: (slug: string) => `/products/${slug}`,
    OVERVIEW: "/overview",
    NOT_FOUND: "/404",
    RSS: "/rss.xml",
    THANK_YOU: "/thank-you",
} as const;

export const PUBLIC_ROUTES = [
    ROUTES.HOME,
    ROUTES.FEEDBACK,
    ROUTES.CREATE_ACCOUNT,
    ROUTES.LOGIN,
    ROUTES.PRODUCTS(":slug"), // This is a placeholder for dynamic routes
    ROUTES.OVERVIEW,
    ROUTES.NOT_FOUND,
    ROUTES.RSS,
    ROUTES.THANK_YOU,
] as const;
