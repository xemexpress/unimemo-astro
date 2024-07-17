import type { APIRoute } from "astro";
import { projectAuth } from "../../firebase/client";

export const POST: APIRoute = async ({ request }) => {
    try {
        await projectAuth.signOut();

        return new Response(
            JSON.stringify({ message: "Logged out!", redirect: "/" }),
            {
                status: 200,
            }
        );
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
};
