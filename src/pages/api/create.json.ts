import type { APIRoute } from "astro";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "../../firebase/client";
import { ROUTES } from "../../utils/routes";

export const POST: APIRoute = async ({ request }) => {
    const { email, password } = await request.json();
    try {
        await createUserWithEmailAndPassword(projectAuth, email, password);

        return new Response(
            JSON.stringify({
                message: "Accounted created!",
                redirect: ROUTES.HOME,
            }),
            {
                status: 201,
            }
        );
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
};
