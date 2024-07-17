// src/middleware.ts

import { defineMiddleware } from "astro/middleware";
import { projectAuth } from "./firebase/client";
import { ROUTES, PUBLIC_ROUTES } from "./utils/routes";

export const onRequest = defineMiddleware(async (context, next) => {
    const isLoggedIn = projectAuth.currentUser;
    const { pathname } = context.url;

    const isPublicRoute = PUBLIC_ROUTES.some((route) => {
        if (route.includes(":slug")) {
            const dynamicRoute = route.replace(":slug", ".*");
            const regex = new RegExp(`^${dynamicRoute}$`);
            return regex.test(pathname);
        }

        return route === pathname;
    });

    if (
        isLoggedIn &&
        (pathname === ROUTES.CREATE_ACCOUNT || pathname === ROUTES.LOGIN)
    ) {
        return context.redirect(ROUTES.HOME);
    }

    if (!isLoggedIn && !isPublicRoute && context.request.method === "GET") {
        return context.redirect(ROUTES.LOGIN);
    }

    return next();
});
